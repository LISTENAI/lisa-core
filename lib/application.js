"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Application = exports.PipelineObject = void 0;
const path = require("path");
const fs = require("fs-extra");
const ignore_1 = require("ignore");
/**
 * pipelineObject定义
 */
class PipelineObject {
    constructor() {
        this.desc = '';
        this.tasks = [];
    }
}
exports.PipelineObject = PipelineObject;
class Application {
    constructor() {
        this.tasks = {};
        /**
         * package.json 信息
         */
        this.packageJSON = null;
        /**
         * 项目主目录
         */
        this.root = process.cwd();
        /**
         * template 目录
         */
        this.template_path = path.join(process.cwd(), 'template');
        /**
         * download 目录
         */
        this.download_path = path.join(process.cwd(), 'target/cache');
        /**
         * task 文件地址
         */
        this.task_path = undefined;
        /**
         * 创建项目时的参数
         */
        this.pipeline = {
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
        };
        /**
         * 自定义参数
         */
        this._context = {};
        /**
         * 执行命令的参数
         */
        this.argv = [];
    }
    set lpmRegistryUrl(url) {
        this._lpmRegistryUrl = url;
    }
    get lpmRegistryUrl() {
        return this._lpmRegistryUrl || '//registry-lpm.listenai.com';
    }
    set registryUrl(url) {
        this._registryUrl = url;
    }
    get registryUrl() {
        return this._registryUrl || process.env.LISA_REGISTRY || 'https://registry-lpm.listenai.com';
    }
    set debug(flag) {
        this._debug = require('debug')(flag);
    }
    get debug() {
        return this._debug || ((flag, msg) => {
            if (msg !== undefined) {
                require('debug')(flag)(msg);
            }
            else {
                require('debug')('lisa:debug')(flag);
            }
        });
    }
    set apiHost(url) {
        this._apiHost = url;
    }
    get apiHost() {
        return this._apiHost || 'https://castor.iflyos.cn';
    }
    set apiPrefix(url) {
        this._apiPrefix = url;
    }
    get apiPrefix() {
        return this._apiPrefix || '/castor/v3';
    }
    set cacheDir(url) {
        this._cacheDir = url;
    }
    get cacheDir() {
        return this._cacheDir || process.cwd();
    }
    /**
     * 程序设置
     * @param callback
     */
    configuration(callback) {
        callback(this);
    }
    get context() {
        return this._context || {};
    }
    /**
     * 添加指定包的自定义参数
     * @param packageName lisa lib包名
     * @param context 自定义参数
     */
    addContext(packageName, context) {
        if (this._context[packageName]) {
            this._context[packageName] = Object.assign(this._context[packageName], context);
        }
        else {
            this._context[packageName] = context;
        }
    }
    /**
     * 添加全局的自定义参数
     * @param context 自定义参数
     */
    addGlobalContext(context) {
        this._context = Object.assign(this._context, context);
    }
    /**
     * 获取包名下面的Context属性
     * @param packaegName 包名
     */
    getContextFromPackageName(packaegName) {
        if (packaegName in this._context) {
            return this._context[packaegName];
        }
        else {
            return {};
        }
    }
    set logPath(url) {
        this._logPath = url;
    }
    get logPath() {
        return this._logPath || path.join(process.cwd(), '.lisa');
    }
    /**
     * gitignore 设置git忽略的目录文件
     * @param path .gitignore 路径
     * @param args 要忽略的目录文件
     */
    gitignore(path, args) {
        let ignoreText = '';
        if (fs.existsSync(path)) {
            ignoreText = fs.readFileSync(path).toString();
        }
        let haveSave = false;
        const ig = ignore_1.default().add(ignoreText);
        for (let arg of args) {
            if (!ig.test(arg).ignored) {
                haveSave = true;
                ignoreText += `\n${arg}`;
            }
        }
        if (haveSave) {
            fs.writeFileSync(path, ignoreText);
        }
    }
    /**
     * log stdout 输出
     * @param stdout 输出内容
     */
    log(stdout) {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirpSync(this.logPath);
        }
        const _logFile = path.join(this.logPath, 'exec.log');
        if (fs.existsSync(_logFile)) {
            fs.appendFileSync(_logFile, `${stdout}\n`);
        }
        else {
            fs.writeFileSync(_logFile, stdout);
        }
    }
    /**
     * log stderr 输出
     * @param stderr 输出内容
     */
    errorLog(stderr) {
        if (!fs.existsSync(this.logPath)) {
            fs.mkdirpSync(this.logPath);
        }
        const _logFile = path.join(this.logPath, 'exec-error.log');
        if (fs.existsSync(_logFile)) {
            fs.appendFileSync(_logFile, `${stderr}\n`);
        }
        else {
            fs.writeFileSync(_logFile, stderr);
        }
    }
}
exports.Application = Application;
//# sourceMappingURL=application.js.map