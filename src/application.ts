import * as path from 'path'
import {ListrTask, ListrBaseClassOptions} from 'listr2'
import * as fs from 'fs-extra'
import ignore from 'ignore'
import * as minimist from 'minimist'

type ConfigFunc = (app: Application) => void
export type TaskObject = ListrTask
export type TaskOptions = ListrBaseClassOptions<any, any, "verbose">

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

export class Application {

    tasks: { [key: string] : TaskObject } = {}

    /**
     * package.json 信息
     */
    packageJSON: any = null
    
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
     * registry url -- create by 2.0
     */
    private _registryUrl?: string

    set registryUrl(url: string) {
        this._registryUrl = url
    }

    get registryUrl(): string {
        return this._registryUrl || process.env.LISA_REGISTRY || 'https://registry-lpm.listenai.com'
    }

    /**
     * debug func -- create by 2.0
     */
    private _debug?: any

    set debug(flag: string) {
        this._debug = require('debug')(flag)
    }
 
    get debug(): any {
        return this._debug || ((flag: any, msg?: any) => {
            if (msg !== undefined) {
                require('debug')(flag)(msg)
            } else {
                require('debug')('lisa:debug')(flag)
            }
        })
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
     * 程序设置
     * @param callback
     */
    configuration(callback: ConfigFunc) {
        callback(this)
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
    argv: string[] | minimist.ParsedArgs = []

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
}
