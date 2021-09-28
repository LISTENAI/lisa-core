import * as minimist from 'minimist'
import * as path from 'path'
import core from '.'
const {fs} = core

/**
 *
 * @param file 加载路径
 */
export function loadFile(file: string) {
    try {
        import(file).then(lib => {
            if ('default' in lib && typeof lib.default == 'function') {
                lib.default(core)
            } else if (typeof lib == 'function') {
                lib(core)
            }
        }).catch(err => {
            // console.log(err)
        })
    } catch(e) {
        /* istanbul ignore next */
        console.error(e)
        /* istanbul ignore next */
        if (process.env['LISA_ENV'] == 'dev') {
            process.exit(1)
        }
    }
}


/**
 *
 * @param file 同步加载路径
 */
 export function loadFileSync(file: string) {
    try {
        if (fs.existsSync(file)) {
            const lib = require(file)
            if ('default' in lib && typeof lib.default == 'function') {
                lib.default(core)
            } else if (typeof lib == 'function') {
                lib(core)
            }
        }
    } catch(e) {
        /* istanbul ignore next */
        console.error(e)
        /* istanbul ignore next */
        if (process.env['LISA_ENV'] == 'dev') {
            process.exit(1)
        }
    }
}

/**
 * 加载 config.[js|ts]
 * @param configPath config地址，默认为packge.json中配置的地址，如果没有配置，读取项目中config.js
 */
export function loadPwdConfig(configPath? : string) {
    if (configPath) {
        loadFileSync(configPath)
        return
    }

    const packageLisaConfigPath = core.application.packageJSON?.lisa?.configPath
    if (packageLisaConfigPath) {
        const filePath = path.join(core.application.root, packageLisaConfigPath)
        loadFileSync(filePath)
        return
    }

    /* istanbul ignore next */
    if (core.application.packageJSON?.lisa?.enableTs) {
        loadFileSync(path.join(process.cwd(), "config.ts"))
    } else {
        loadFileSync(path.join(process.cwd(), "config.js"))
    }
}

/**
 * 加载 task.[js|ts]
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
export function loadPwdTask(taskPath? : string) {
    if (taskPath) {
        loadFileSync(taskPath)
        return
    }

    const packageLisaTaskPath = core.application.packageJSON?.lisa?.taskPath
    if (packageLisaTaskPath) {
        const filePath = path.join(core.application.root, packageLisaTaskPath)
        loadFileSync(filePath)
        return
    }

    if (core.application.packageJSON?.lisa?.enableTs) {
        loadFileSync(path.join(process.cwd(), "task.ts"))
    } else {
        loadFileSync(path.join(process.cwd(), "task.js"))
    }
}

export function parsePackageJSON(packagePath?: string) {
    const packageJsonPath = packagePath ? packagePath : path.join(process.cwd(), "package.json")
    if (fs.existsSync(packageJsonPath)) {
        const packageJSON = fs.readJSONSync(packageJsonPath)
        return packageJSON
    } else {
        return null
    }
}

export function loadPackageJSON(packagePath?: string) {
    core.application.packageJSON = parsePackageJSON(packagePath)
}

export function loadTypescript() {
    if (core.application.packageJSON?.lisa?.enableTs) {
        require('ts-node').register()
    }
}

export function loadDependencies(justConfig?: boolean) {
    if (!core.application.packageJSON) {
        return
    }

    (Object.keys(core.application.packageJSON?.dependencies || {})).forEach((dep: string) => {
        loadDependence(dep, justConfig)
    })
}

/**
 * 加载 单个依赖包
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
function loadDependence(dep: string, justConfig?: boolean) {
    const depPath = fs.project.join(`node_modules/${dep}`)
    const depPackage = parsePackageJSON(path.join(depPath, 'package.json'))

    if (depPackage?.lisa?.configPath) {
        const configPath = path.join(depPath, depPackage?.lisa?.configPath)
        loadFile(configPath)
    }

    if (depPackage?.lisa?.taskPath && !justConfig) {
        const taskPath = path.join(depPath, depPackage?.lisa?.taskPath)
        loadFile(taskPath)
    }

    // v1.1.6新增加载lisa的依赖
    if (depPackage?.lisa?.dependencies) {
        const lisaDependencies = depPackage?.lisa?.dependencies
        if (lisaDependencies instanceof Array) {
            Array.prototype.forEach.call(lisaDependencies, (dep: string) => {
                loadDependence(dep)
            })
        }
    }
}

export function loadDevDependencies() {

    if (!core.application.packageJSON) {
        return
    }

    (Object.keys(core.application.packageJSON?.devDependencies || {})).forEach((dep: string) => {
        const depPath = fs.project.join(`node_modules/${dep}`)
        const depPackage = parsePackageJSON(path.join(depPath, 'package.json'))

        /* istanbul ignore next */
        if (depPackage?.lisa?.configPath) {
            const configPath = path.join(depPath, depPackage?.lisa?.configPath)
            loadFile(configPath)
        }

        if (depPackage?.lisa?.task_path) {
            const taskPath = path.join(depPath, depPackage.lisa_task_path)
            loadFile(taskPath)
        }

    })
}

/**
 * 加载 任务字典
 */
export function loadTaskDict() {
    loadPackageJSON()
    if (!core.application?.packageJSON?.dependencies) {
        return
    }
    let deps = Object.keys(core.application.packageJSON.dependencies)
    for (let i = 0; i < deps.length; i++) {
        core.application.tasks = {}
        const depPath = fs.project.join(`node_modules/${deps[i]}`)
        const depPackage = parsePackageJSON(path.join(depPath, 'package.json'))
        if (depPackage?.lisa?.dependencies) {
            const lisaDependencies = depPackage?.lisa?.dependencies
            if (Array.isArray(lisaDependencies)) {
                deps = deps.concat(lisaDependencies)
            }
        }
        if (depPackage?.lisa?.taskPath) {
            const taskPath = path.join(depPath, depPackage?.lisa?.taskPath)
            loadFileSync(taskPath)
        }
        const taskDict: {
            [key: string]: any
        } = {}
        Object.keys(core.application.tasks).forEach(name => {
            taskDict[name] = {
                title: core.application.tasks[name].title,
                depFrom: deps[i]
            }
        })
        fs.writeFileSync(path.join(depPath, 'taskDict.json'), JSON.stringify(taskDict))
    }
}

/**
 * 获取 任务字典
 */
 export function getTaskDict(): {[key:string]: any} {
    loadPackageJSON()
    let deps = Object.keys(core.application?.packageJSON?.dependencies || {})
    let taskList = {}
    for (let i = 0; i < deps.length; i++) {
        const depPath = fs.project.join(`node_modules/${deps[i]}`)
        const depPackage = parsePackageJSON(path.join(depPath, 'package.json'))
        if (depPackage?.lisa?.dependencies) {
            const lisaDependencies = depPackage?.lisa?.dependencies
            if (Array.isArray(lisaDependencies)) {
                deps = deps.concat(lisaDependencies)
            }
        }

        if (fs.existsSync(path.join(depPath, 'taskDict.json'))) {
            taskList = Object.assign(taskList, fs.readJsonSync(path.join(depPath, 'taskDict.json')))
        }
    }

    loadPwdTask()

    return Object.assign(taskList, core.application.tasks)
}

export function load() {
    loadPackageJSON()
    loadTypescript()
    // 1、load 项目的dependencies包
    loadDependencies()
    // 2、load 项目的根目录的config
    loadPwdConfig()
    // 3、load 最终的config.task_path
    loadPwdTask()
}

export function loadPreRunTask() {
    loadPackageJSON()
    loadTypescript()
    const taskDict = getTaskDict()
    const hasLoad: Array<string> = [];
    (core.application.argv as minimist.ParsedArgs)._.forEach((task: string) => {
        if (taskDict[task]?.depFrom && !hasLoad.includes(taskDict[task]?.depFrom)) {
            hasLoad.push(taskDict[task]?.depFrom)
            loadDependence(taskDict[task]?.depFrom)
        }
    })
    loadDependencies(true)
    loadPwdConfig()
    loadPwdTask()
}

