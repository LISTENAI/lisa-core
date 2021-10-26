"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loadPreRunTask = exports.load = exports.getTaskDict = exports.loadTaskDict = exports.loadDevDependencies = exports.loadDependencies = exports.loadTypescript = exports.loadPackageJSON = exports.parsePackageJSON = exports.loadPwdTask = exports.loadPwdConfig = exports.loadFileSync = exports.loadFile = void 0;
const path = require("path");
const _1 = require(".");
const { fs } = _1.default;
/**
 *
 * @param file 加载路径
 */
function loadFile(file) {
    try {
        Promise.resolve().then(() => require(file)).then(lib => {
            if ('default' in lib && typeof lib.default == 'function') {
                lib.default(_1.default);
            }
            else if (typeof lib == 'function') {
                lib(_1.default);
            }
        }).catch(err => {
            // console.log(err)
        });
    }
    catch (e) {
        /* istanbul ignore next */
        console.error(e);
        /* istanbul ignore next */
        if (process.env['LISA_ENV'] == 'dev') {
            process.exit(1);
        }
    }
}
exports.loadFile = loadFile;
/**
 *
 * @param file 同步加载路径
 */
function loadFileSync(file) {
    try {
        if (fs.existsSync(file)) {
            const lib = require(file);
            if ('default' in lib && typeof lib.default == 'function') {
                lib.default(_1.default);
            }
            else if (typeof lib == 'function') {
                lib(_1.default);
            }
        }
    }
    catch (e) {
        /* istanbul ignore next */
        console.error(e);
        /* istanbul ignore next */
        if (process.env['LISA_ENV'] == 'dev') {
            process.exit(1);
        }
    }
}
exports.loadFileSync = loadFileSync;
/**
 * 加载 config.[js|ts]
 * @param configPath config地址，默认为packge.json中配置的地址，如果没有配置，读取项目中config.js
 */
function loadPwdConfig(configPath) {
    var _a, _b, _c, _d;
    if (configPath) {
        loadFileSync(configPath);
        return;
    }
    const packageLisaConfigPath = (_b = (_a = _1.default.application.packageJSON) === null || _a === void 0 ? void 0 : _a.lisa) === null || _b === void 0 ? void 0 : _b.configPath;
    if (packageLisaConfigPath) {
        const filePath = path.join(_1.default.application.root, packageLisaConfigPath);
        loadFileSync(filePath);
        return;
    }
    /* istanbul ignore next */
    if ((_d = (_c = _1.default.application.packageJSON) === null || _c === void 0 ? void 0 : _c.lisa) === null || _d === void 0 ? void 0 : _d.enableTs) {
        loadFileSync(path.join(process.cwd(), "config.ts"));
    }
    else {
        loadFileSync(path.join(process.cwd(), "config.js"));
    }
}
exports.loadPwdConfig = loadPwdConfig;
/**
 * 加载 task.[js|ts]
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
function loadPwdTask(taskPath) {
    var _a, _b, _c, _d;
    if (taskPath) {
        loadFileSync(taskPath);
        return;
    }
    const packageLisaTaskPath = (_b = (_a = _1.default.application.packageJSON) === null || _a === void 0 ? void 0 : _a.lisa) === null || _b === void 0 ? void 0 : _b.taskPath;
    if (packageLisaTaskPath) {
        const filePath = path.join(_1.default.application.root, packageLisaTaskPath);
        loadFileSync(filePath);
        return;
    }
    if ((_d = (_c = _1.default.application.packageJSON) === null || _c === void 0 ? void 0 : _c.lisa) === null || _d === void 0 ? void 0 : _d.enableTs) {
        loadFileSync(path.join(process.cwd(), "task.ts"));
    }
    else {
        loadFileSync(path.join(process.cwd(), "task.js"));
    }
}
exports.loadPwdTask = loadPwdTask;
function parsePackageJSON(packagePath) {
    const packageJsonPath = packagePath ? packagePath : path.join(process.cwd(), "package.json");
    if (fs.existsSync(packageJsonPath)) {
        const packageJSON = fs.readJSONSync(packageJsonPath);
        return packageJSON;
    }
    else {
        return null;
    }
}
exports.parsePackageJSON = parsePackageJSON;
function loadPackageJSON(packagePath) {
    _1.default.application.packageJSON = parsePackageJSON(packagePath);
}
exports.loadPackageJSON = loadPackageJSON;
function loadTypescript() {
    var _a, _b;
    if ((_b = (_a = _1.default.application.packageJSON) === null || _a === void 0 ? void 0 : _a.lisa) === null || _b === void 0 ? void 0 : _b.enableTs) {
        require('ts-node').register();
    }
}
exports.loadTypescript = loadTypescript;
function loadDependencies(justConfig) {
    var _a;
    if (!_1.default.application.packageJSON) {
        return;
    }
    (Object.keys(((_a = _1.default.application.packageJSON) === null || _a === void 0 ? void 0 : _a.dependencies) || {})).forEach((dep) => {
        loadDependence(dep, justConfig);
    });
}
exports.loadDependencies = loadDependencies;
/**
 * 加载 单个依赖包
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
function loadDependence(dep, justConfig) {
    var _a, _b, _c, _d, _e, _f;
    const depPath = fs.project.join(`node_modules/${dep}`);
    const depPackage = parsePackageJSON(path.join(depPath, 'package.json'));
    if ((_a = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _a === void 0 ? void 0 : _a.configPath) {
        const configPath = path.join(depPath, (_b = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _b === void 0 ? void 0 : _b.configPath);
        loadFile(configPath);
    }
    if (((_c = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _c === void 0 ? void 0 : _c.taskPath) && !justConfig) {
        const taskPath = path.join(depPath, (_d = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _d === void 0 ? void 0 : _d.taskPath);
        loadFile(taskPath);
    }
    // v1.1.6新增加载lisa的依赖
    if ((_e = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _e === void 0 ? void 0 : _e.dependencies) {
        const lisaDependencies = (_f = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _f === void 0 ? void 0 : _f.dependencies;
        if (lisaDependencies instanceof Array) {
            Array.prototype.forEach.call(lisaDependencies, (dep) => {
                loadDependence(dep);
            });
        }
    }
}
function loadDevDependencies() {
    var _a;
    if (!_1.default.application.packageJSON) {
        return;
    }
    (Object.keys(((_a = _1.default.application.packageJSON) === null || _a === void 0 ? void 0 : _a.devDependencies) || {})).forEach((dep) => {
        var _a, _b, _c;
        const depPath = fs.project.join(`node_modules/${dep}`);
        const depPackage = parsePackageJSON(path.join(depPath, 'package.json'));
        /* istanbul ignore next */
        if ((_a = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _a === void 0 ? void 0 : _a.configPath) {
            const configPath = path.join(depPath, (_b = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _b === void 0 ? void 0 : _b.configPath);
            loadFile(configPath);
        }
        if ((_c = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _c === void 0 ? void 0 : _c.task_path) {
            const taskPath = path.join(depPath, depPackage.lisa_task_path);
            loadFile(taskPath);
        }
    });
}
exports.loadDevDependencies = loadDevDependencies;
/**
 * 加载 任务字典
 */
function loadTaskDict() {
    var _a, _b, _c, _d;
    loadPackageJSON();
    let deps = Object.keys(_1.default.application.packageJSON.dependencies);
    for (let i = 0; i < deps.length; i++) {
        _1.default.application.tasks = {};
        const depPath = fs.project.join(`node_modules/${deps[i]}`);
        const depPackage = parsePackageJSON(path.join(depPath, 'package.json'));
        if ((_a = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _a === void 0 ? void 0 : _a.dependencies) {
            const lisaDependencies = (_b = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _b === void 0 ? void 0 : _b.dependencies;
            if (Array.isArray(lisaDependencies)) {
                deps = deps.concat(lisaDependencies);
            }
        }
        if ((_c = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _c === void 0 ? void 0 : _c.taskPath) {
            const taskPath = path.join(depPath, (_d = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _d === void 0 ? void 0 : _d.taskPath);
            loadFileSync(taskPath);
        }
        const taskDict = {};
        Object.keys(_1.default.application.tasks).forEach(name => {
            taskDict[name] = {
                title: _1.default.application.tasks[name].title,
                depFrom: deps[i]
            };
        });
        fs.writeFileSync(path.join(depPath, 'taskDict.json'), JSON.stringify(taskDict));
    }
}
exports.loadTaskDict = loadTaskDict;
/**
 * 获取 任务字典
 */
function getTaskDict() {
    var _a, _b;
    loadPackageJSON();
    let deps = Object.keys(_1.default.application.packageJSON.dependencies);
    let taskList = {};
    for (let i = 0; i < deps.length; i++) {
        const depPath = fs.project.join(`node_modules/${deps[i]}`);
        const depPackage = parsePackageJSON(path.join(depPath, 'package.json'));
        if ((_a = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _a === void 0 ? void 0 : _a.dependencies) {
            const lisaDependencies = (_b = depPackage === null || depPackage === void 0 ? void 0 : depPackage.lisa) === null || _b === void 0 ? void 0 : _b.dependencies;
            if (Array.isArray(lisaDependencies)) {
                deps = deps.concat(lisaDependencies);
            }
        }
        if (fs.existsSync(path.join(depPath, 'taskDict.json'))) {
            taskList = Object.assign(taskList, fs.readJsonSync(path.join(depPath, 'taskDict.json')));
        }
    }
    loadPwdTask();
    return Object.assign(taskList, _1.default.application.tasks);
}
exports.getTaskDict = getTaskDict;
function load() {
    loadPackageJSON();
    loadTypescript();
    // 1、load 项目的dependencies包
    loadDependencies();
    // 2、load 项目的根目录的config
    loadPwdConfig();
    // 3、load 最终的config.task_path
    loadPwdTask();
}
exports.load = load;
function loadPreRunTask() {
    loadPackageJSON();
    loadTypescript();
    const taskDict = getTaskDict();
    const hasLoad = [];
    _1.default.application.argv._.forEach((task) => {
        var _a, _b, _c, _d;
        if (((_a = taskDict[task]) === null || _a === void 0 ? void 0 : _a.depFrom) && !hasLoad.includes((_b = taskDict[task]) === null || _b === void 0 ? void 0 : _b.depFrom)) {
            hasLoad.push((_c = taskDict[task]) === null || _c === void 0 ? void 0 : _c.depFrom);
            loadDependence((_d = taskDict[task]) === null || _d === void 0 ? void 0 : _d.depFrom);
        }
    });
    loadDependencies(true);
    loadPwdConfig();
    loadPwdTask();
}
exports.loadPreRunTask = loadPreRunTask;
//# sourceMappingURL=load.js.map