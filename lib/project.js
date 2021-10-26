"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Project = void 0;
const path = require("path");
const fs = require("fs-extra");
const ejs = require("ejs");
const index_1 = require("./index");
const got_1 = require("got");
const stream = require("stream");
const util_1 = require("util");
const AdmZip = require("adm-zip");
/**
 * 项目类，用于快捷创建项目结构
 */
class Project {
    constructor() {
        // this.root = root root = process.cwd()
        // this.template_path = this.join("template")
        this.info = (_method, _message) => {
            index_1.default.application.log(`${_method},${_message}`);
        };
        this.error = (method, message) => {
            index_1.default.application.errorLog(`${method},${message}`);
            throw new Error(`${method}->${message}`);
        };
    }
    set root(dir) {
        this._root = dir;
    }
    get root() {
        return this._root || index_1.default.application.root;
    }
    set template_path(dir) {
        this._template_path = dir;
    }
    get template_path() {
        return this._template_path || index_1.default.application.template_path;
    }
    set download_path(dir) {
        if (!fs.existsSync(dir)) {
            fs.mkdirpSync(dir);
        }
        this._download_path = dir;
    }
    get download_path() {
        return this._download_path || index_1.default.application.download_path;
    }
    /**
     * 获取项目的对应目录
     * @param paths 路径地址
     */
    join(...paths) {
        return path.join(this.root, ...paths);
    }
    /**
     * 获取模板路径
     * @param paths 路径地址
     */
    template_join(...paths) {
        return path.join(this.template_path, ...paths);
    }
    /**
     * 获取下载路径
     * @param paths 路径地址
     */
    download_join(...paths) {
        return path.join(this.download_path, ...paths);
    }
    /**
     * 创建目录
     * @param paths 目录路径，请注意，这是里相对路径
     */
    async mkdir(...paths) {
        for (let _path of paths) {
            try {
                await fs.mkdirp(this.join(_path));
                this.info('mkdir', _path);
            }
            catch (err) {
                this.error('mkdir', err);
            }
        }
    }
    /**
     * 创建空白文件
     */
    async touch(...paths) {
        for (let _path of paths) {
            try {
                await fs.ensureFile(this.join(_path));
                this.info('touch', _path);
            }
            catch (err) {
                this.error('touch', err);
            }
        }
    }
    /**
     * 文件复制 or 目录复制
     * @param source 模版地址，注意是在项目设置的模版目录中寻找
     * @param target 目标地址，注意是在项目中对应的地址
     */
    async copy(source, target) {
        try {
            await fs.copy(this.template_join(source), this.join(target));
            this.info('copy', { source: source, target: target });
        }
        catch (err) {
            this.error('copy', err);
        }
    }
    /**
     * 模版渲染器
     * @param source 模版地址，注意是在项目设置的模版目录中寻找
     * @param target 目标地址，注意是在项目中对应的地址
     * @param options 模版所需要的元数据
     */
    async template(source, target, data) {
        try {
            const str = await (await fs.readFile(this.template_join(source))).toString();
            const template = ejs.render(str, data);
            await fs.outputFile(this.join(target), template);
            this.info('template', { source: source, target: target, data: data });
        }
        catch (err) {
            this.error('err', err);
        }
    }
    /**
     * 下载文件
     * @param url 下载地址
     * @param fileName 目标文件名
     * @param targetDir 下载目标目录
     */
    async downloadFile(opts) {
        const pipeline = util_1.promisify(stream.pipeline);
        const target = opts.targetDir ? path.join(opts.targetDir || '', opts.fileName) : this.download_join(opts.fileName);
        const downloadStream = got_1.default.stream(opts.url);
        await fs.ensureFile(target);
        const fileWriterStream = fs.createWriteStream(target);
        let event = { err: 0, msg: '' };
        downloadStream
            .on('downloadProgress', ({ transferred, total, percent }) => {
            const percentage = Math.round(percent * 100);
            (opts === null || opts === void 0 ? void 0 : opts.progress) && (opts === null || opts === void 0 ? void 0 : opts.progress(percentage, transferred, total));
        })
            .on('error', error => {
            event.err = 1;
            event.msg = error.message;
        });
        fileWriterStream
            .on('error', error => {
            event.err = 1;
            event.msg = error.message;
        });
        await pipeline(downloadStream, fileWriterStream);
        return event;
    }
    /**
     * 解压文件
     * @param source zip文件地址
     * @param target 解压目录
     */
    async unzip(source, target) {
        var zip = new AdmZip(source);
        await zip.extractAllTo(target || '', true);
    }
    /**
     * 获取zip实例
     */
    zip() {
        return new AdmZip();
    }
}
exports.Project = Project;
//# sourceMappingURL=project.js.map