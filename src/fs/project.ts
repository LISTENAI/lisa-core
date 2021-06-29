import { fstat } from 'fs-extra'
import * as path from 'path'
import * as fs from 'fs-extra'
import * as ejs from 'ejs'
import { application } from '../index'
import got from 'got'
import * as stream from 'stream'
import {promisify} from 'util'
import * as AdmZip from 'adm-zip'

export type LogFunction = (method: string, message: any) => void

/**
 * 项目类，用于快捷创建项目结构
 */
export class Project {
  /**
   * 项目主目录
   */
  private _root?: string

  set root(dir: string) {
    this._root = dir
  }

  get root(): string {
    return this._root || application.root
  }

  /**
   * template 目录
   */
  private _template_path?: string

  set template_path(dir: string) {
    this._template_path = dir
  }

  get template_path(): string {
    return this._template_path || application.template_path
  }

  /**
   * template 目录
   */
  private _download_path?: string

  set download_path(dir: string) {
    if (!fs.existsSync(dir)) {
      fs.mkdirpSync(dir)
    }
    this._download_path = dir
  }

  get download_path(): string {
    return this._download_path || application.download_path
  }


  /**
   * 日志方法
   */
  info: LogFunction

  /**
   * 错误日志方法
   */
  error: LogFunction

  constructor() {
    // this.root = root root = process.cwd()
    // this.template_path = this.join("template")

    this.info = (_method, _message) => {}
    this.error = (method, message) => {
      throw new Error(`${method}->${message}`)
    }
  }

  /**
   * 获取项目的对应目录
   * @param paths 路径地址
   */
  join(...paths: string[]): string {
    return path.join(this.root, ...paths)
  }

  /**
   * 获取模板路径
   * @param paths 路径地址
   */
  template_join(...paths: string[]): string {
    return path.join(this.template_path, ...paths)
  }

  /**
   * 获取下载路径
   * @param paths 路径地址
   */
  download_join(...paths: string[]): string {
    return path.join(this.download_path, ...paths)
  }

  /**
   * 创建目录
   * @param paths 目录路径，请注意，这是里相对路径
   */
  async mkdir(...paths: string[]) {
    for (let _path of paths) {
      try {
        await fs.mkdirp(this.join(_path))
        this.info('mkdir', _path)
      } catch(err) {
        this.error('mkdir', err)
      }
    }
  }

  /**
   * 创建空白文件
   */
  async touch(...paths: string[]) {
    for (let _path of paths) {
      try {
        await fs.ensureFile(this.join(_path))
        this.info('touch', _path)
      } catch(err) {
        this.error('touch', err)
      }
    }
  }

  /**
   * 文件复制 or 目录复制
   * @param source 模版地址，注意是在项目设置的模版目录中寻找
   * @param target 目标地址，注意是在项目中对应的地址
   */
  async copy(source: string, target: string) {
    try {
      await fs.copy(this.template_join(source), this.join(target))
      this.info('copy', {source: source, target: target})
    } catch(err) {
      this.error('copy', err)
    }
  }


  /**
   * 模版渲染器
   * @param source 模版地址，注意是在项目设置的模版目录中寻找
   * @param target 目标地址，注意是在项目中对应的地址
   * @param options 模版所需要的元数据
   */
  async template(source: string, target: string, data: any) {
    try {
      const str = await (await fs.readFile(this.template_join(source))).toString()
      const template = ejs.render(str, data)
      await fs.outputFile(this.join(target), template)
      this.info('template', {source: source, target: target, data: data})
    } catch(err) {
      this.error('err', err)
    }
  }

  /**
   * 下载文件
   * @param url 下载地址
   * @param fileName 目标文件名
   * @param targetDir 下载目标目录
   */
  async downloadFile(opts: {
    url: string,
    fileName: string,
    targetDir?: string,
    progress?: (percentage: number, transferred: number, total: number) => void
  }) {
    const pipeline = promisify(stream.pipeline)

    const target = opts.targetDir ? path.join(opts.targetDir || '', opts.fileName) : this.download_join(opts.fileName)
    const downloadStream = got.stream(opts.url)

    await fs.ensureFile(target)
    const fileWriterStream = fs.createWriteStream(target)

    let event = { err: 0, msg: ''}
    downloadStream
    .on('downloadProgress', ({transferred, total, percent}) => {
      const percentage = Math.round(percent * 100)
      opts?.progress && opts?.progress(percentage, transferred, total)
    })
    .on('error', error => {
      event.err = 1
      event.msg = error.message
    })

    fileWriterStream
    .on('error', error => {
      event.err = 1
      event.msg = error.message
    })
    await pipeline(downloadStream, fileWriterStream)
    return event
  }

  /**
   * 解压文件
   * @param source zip文件地址
   * @param target 解压目录
   */
  async unzip(source: string, target?: string) {
    var zip = new AdmZip(source)
    await zip.extractAllTo(target || '', true)
  }

  /**
   * 获取zip实例
   */
  zip() {
    return new AdmZip()
  }
}
