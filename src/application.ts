import { Contains, validate, ValidationError, Matches } from 'class-validator'
import * as path from 'path'
import * as Listr from 'listr'
import * as fs from 'fs-extra'
import ignore from 'ignore'
import config from './cfgstore'
import got  from 'got'

type ConfigFunc = (app: Application) => void
export type TaskObject = Listr.ListrTask<Listr.ListrContext>
export type TaskOptions = Listr.ListrOptions

/**
 * pipeline定义
 */
export type Pipeline = {[key:string] : PipelineObject}

/**
 * pipelineObject定义
 */
export class PipelineObject {
  desc: string = ''
  tasks: Array<string> = []
}

/**
 * Lisa Env 环境变量
 */
export enum LisaEnv {
  Dev = 'dev',
  Prod = 'prod',
  Test = 'test'
}

export class Application {

  tasks: { [key: string] : TaskObject } = {}

  /**
   * package.json 信息
   */
  packageJSON: any = null

  /**
   * lscloud personalToken
   */
  private _lscloudPersonalToken?: string

  set lscloudPersonalToken(token: string) {
    this._lscloudPersonalToken = token
  }

  get lscloudPersonalToken(): string {
    return this._lscloudPersonalToken || ''
  }

  /**
   * lisa accessToken
   */
  private _lisaAccessToken?: string

  set lisaAccessToken(token: string) {
    this._lisaAccessToken = token
  }

  get lisaAccessToken(): string {
    return this._lisaAccessToken || ''
  }

  /**
   * lpm registry url
   */
  private _lpmRegistryUrl?: string

  set lpmRegistryUrl(url: string) {
    this._lpmRegistryUrl = url
  }

  get lpmRegistryUrl(): string {
    return this._lpmRegistryUrl || '//registry-lpm.listenai.com'
  }

  /**
   * lisa server api host
   */
  private _apiHost?: string

  set apiHost(url: string) {
    this._apiHost = url
  }

  get apiHost(): string {
    return this._apiHost || 'https://castor.iflyos.cn'
  }

  /**
   * lisa server api prefix
   */
  private _apiPrefix?: string

  set apiPrefix(url: string) {
    this._apiPrefix = url
  }

  get apiPrefix(): string {
    return this._apiPrefix || '/castor/v3'
  }

  /**
   * lisa cache 缓存目录
   */
  private _cacheDir?: string

  set cacheDir(url: string) {
    this._cacheDir = url
  }

  get cacheDir(): string {
    return this._cacheDir || process.cwd()
  }
  

  /**
   * 固件配置
   */
  firmwareConfiguration: any = {}

  /**
   * pin脚设置
   */
  hardwareConfiguration: any = {}

  /**
   * 设置版本号，要求为三位表达式, eg: 1.0.0
   */
  @Matches(/^([1-9]\d|[1-9])(\.([1-9]\d|\d)){2}$/)
  version: string = "1.0.0"

  /**
   * 项目说明
   */
  description: string = "CSK 项目"

  /**
   * 项目主目录
   */
  root: string = process.cwd()

  /**
   * template 目录
   */
  template_path: string = path.join(process.cwd(), 'template')

  /**
   * download 目录
   */
  download_path: string = path.join(process.cwd(), 'target/cache')

  /**
   * task 文件地址
   */
  task_path?: string = undefined

  /**
   * 验证错误信息
   */
  errors: ValidationError[] = []

  /**
   * 烧录的lpk包地址
   */
  flashLpkPath: string = path.join(process.cwd(), 'target/output/debug')

  /**
   * 程序设置
   * @param callback
   */
  configuration(callback: ConfigFunc) {
    callback(this)
  }

  async validateConfig() {
    const errors = await validate(this)
    if (errors.length > 0) {
      this.errors = errors
      return false
    } else {
      return true
    }
  }

  /**
   * 创建项目时的参数
   */
  pipeline: Pipeline = {
    create: {
      desc: '创建项目',
      tasks: ['create:init', 'create:install']
    },
    init: {
      desc: '项目初始化',
      tasks: ['init:ready', 'init:install']
    },
    build: {
      desc: '打包',
      tasks: ['build:init', 'build:patch', 'build:source', 'build:pre_respak', 'build:respak', 'build:package']
    }
  }

  /**
   * 自定义参数
   */
  private _context: any = {}
  get context(): any {
    return this._context || {}
  }

  /**
   * 添加指定包的自定义参数
   * @param packageName lisa lib包名
   * @param context 自定义参数
   */
  addContext(packageName: string, context: {[key:string] : any}) {
    if (this._context[packageName]) {
      this._context[packageName] = Object.assign(this._context[packageName], context)
    } else {
      this._context[packageName] = context
    }
    
  }

  /**
   * 添加全局的自定义参数
   * @param context 自定义参数
   */
  addGlobalContext(context: {[key:string] : any}) {
    this._context = Object.assign(this._context, context)
  }

  /**
   * 获取包名下面的Context属性
   * @param packaegName 包名
   */
  getContextFromPackageName(packaegName: string) {
    if (packaegName in this._context) {
      return this._context[packaegName]
    } else {
      return {}
    }
  }

  /**
   * 执行命令的参数
   */
  argv: Array<string> = []

  /**
   * 获取 Lisa 在某个环境中使用, 不可以通过代码设置，仅允许通过环境变量 LISA_ENV 来设置
   * 可选参数 dev prod test
   * 默认是 dev，不用做多修改，允许测试的时候请你使用
   * ```
   * npm run build && LISA_ENV=test jest --coverage
   * ```
   */
  env() : LisaEnv {
    const env = process.env.LISA_ENV || 'dev'
    if (env == 'prod') {
      return LisaEnv.Prod
    } else if (env == 'test') {
      return LisaEnv.Test
    } else {
      return LisaEnv.Dev
    }
  }

  /**
   * log 路径
   */
  private _logPath?: string

  set logPath(url: string) {
    this._logPath = url
  }

  get logPath(): string {
    return this._logPath || path.join(process.cwd(), '.lisa')
  }

  /**
   * gitignore 设置git忽略的目录文件
   * @param path .gitignore 路径
   * @param args 要忽略的目录文件
   */
  gitignore(path: string, args: string[]) {
    let ignoreText = ''
    if (fs.existsSync(path)) {
      ignoreText = fs.readFileSync(path).toString()
    }
    let haveSave = false
    const ig = ignore().add(ignoreText)
      for (let arg of args) {
        if (!ig.test(arg).ignored) {
          haveSave = true
          ignoreText += `\n${arg}`
        }
      }
    
    if (haveSave) {
      fs.writeFileSync(path, ignoreText)
    }
  }

  /**
   * log stdout 输出
   * @param stdout 输出内容
   */
  log(stdout: string) {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirpSync(this.logPath)
    }
    const _logFile = path.join(this.logPath, 'exec.log')
    if (fs.existsSync(_logFile)) {
      fs.appendFileSync(_logFile, `${stdout}\n`)
    } else {
      fs.writeFileSync(_logFile, stdout)
    }
  }

  /**
   * log stderr 输出
   * @param stderr 输出内容
   */
  errorLog(stderr: string) {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirpSync(this.logPath)
    }
    const _logFile = path.join(this.logPath, 'exec-error.log')
    if (fs.existsSync(_logFile)) {
      fs.appendFileSync(_logFile, `${stderr}\n`)
    } else {
      fs.writeFileSync(_logFile, stderr)
    }
  }


  /**
   * 上报到日志服务
   * @param options Object 需要上报的内容
   */
   
  async logReport(options: {
    company_id?: string | number;
    user_id?: string | number;
    project_name?: string;
    version?: string;
    type: string;
    cid?: string | number;
    csk_commit?: string | number;
    content?: string;
    res?: string | null;
  }) {
    const accessToken = config.get('lisaUserInfo')?.accessToken
    if (accessToken) {
      try {
        await got.post('https://api.iflyos.cn/external/ls_log/create', {
          timeout: 2000,
          headers: {
            Authorization: `Bearer ${accessToken}`
          },
          json: Object.assign({
            type: '',
          } ,options),
          responseType: 'json',
        })
      } catch (error) {}
    }
  }

}
