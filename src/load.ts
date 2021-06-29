import * as path from 'path'
import { fs } from '.'
import * as core from '.'

/**
 * 项目引导能力，用于命令行引导程序
 */

export var project_lang: string

/**
 *
 * @param file 加载路径
 */
export function loadFile(file: string) {
  try {
    if (fs.existsSync(file)) {
      const module = require(file)
      if ('default' in module && typeof module.default == 'function') {
        require(file).default(core)
      } else if (typeof module == 'function') {
        require(file)(core)
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
export function loadConfig(configPath? : string) {
  if (configPath) {
    loadFile(configPath)
    return
  }

  const packageLisaConfigPath = core.application.packageJSON?.lisa?.configPath
  if (packageLisaConfigPath) {
    const filePath = path.join(core.application.root, packageLisaConfigPath)
    loadFile(filePath)
    return
  }

  /* istanbul ignore next */
  if (core.application.packageJSON?.lisa?.enableTs) {
    loadFile(path.join(process.cwd(), "config.ts"))
  } else {
    loadFile(path.join(process.cwd(), "config.js"))
  }
}


/**
 * 加载 task.[js|ts]
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
export function loadTask(taskPath? : string) {
  if (taskPath) {
    loadFile(taskPath)
    return
  }

  const packageLisaTaskPath = core.application.packageJSON?.lisa?.taskPath
  if (packageLisaTaskPath) {
    const filePath = path.join(core.application.root, packageLisaTaskPath)
    loadFile(filePath)
    return
  }

  if (core.application.packageJSON?.lisa?.enableTs) {
    loadFile(path.join(process.cwd(), "task.ts"))
  } else {
    loadFile(path.join(process.cwd(), "task.js"))
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

export function loadDependencies() {

  if (!core.application.packageJSON) {
    return
  }

  (Object.keys(core.application.packageJSON?.dependencies || {})).forEach((dep: string) => {
    loadDependence(dep)
  })
}

/**
 * 加载 单个依赖包
 * @param taskPath task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js
 */
function loadDependence(dep: string) {
  const depPath = fs.project.join(`node_modules/${dep}`)
  const depPackage = parsePackageJSON(path.join(depPath, 'package.json'))

  if (depPackage?.lisa?.configPath) {
    const configPath = path.join(depPath, depPackage?.lisa?.configPath)
    loadFile(configPath)
  }

  if (depPackage?.lisa?.taskPath) {
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

export function load() {
  loadPackageJSON()
  loadTypescript()
  // 1、load 项目的dependencies包
  loadDependencies()
  // 2、load 项目的根目录的config
  loadConfig()
  // 3、load 最终的config.task_path
  loadTask()

  return core
}

