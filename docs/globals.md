---
id: "globals"
title: "@listenai/lisa_core"
sidebar_label: "Globals"
---

## Index

### Classes

* [Application](classes/application.md)
* [PipelineObject](classes/pipelineobject.md)
* [Project](classes/project.md)

### Type aliases

* [ConfigFunc](globals.md#configfunc)
* [LogFunction](globals.md#logfunction)
* [Pipeline](globals.md#pipeline)
* [TaskObject](globals.md#taskobject)
* [TaskOptions](globals.md#taskoptions)

### Variables

* [_Execa](globals.md#let-_execa)
* [_Tasks](globals.md#let-_tasks)
* [fs](globals.md#fs)
* [minimist](globals.md#const-minimist)
* [project](globals.md#project)

### Functions

* [argv](globals.md#argv)
* [flags](globals.md#flags)
* [getTaskDict](globals.md#gettaskdict)
* [job](globals.md#job)
* [load](globals.md#load)
* [loadDependence](globals.md#loaddependence)
* [loadDependencies](globals.md#loaddependencies)
* [loadDevDependencies](globals.md#loaddevdependencies)
* [loadFile](globals.md#loadfile)
* [loadFileSync](globals.md#loadfilesync)
* [loadPackageJSON](globals.md#loadpackagejson)
* [loadPreRunTask](globals.md#loadpreruntask)
* [loadPwdConfig](globals.md#loadpwdconfig)
* [loadPwdTask](globals.md#loadpwdtask)
* [loadTaskDict](globals.md#loadtaskdict)
* [loadTypescript](globals.md#loadtypescript)
* [parsePackageJSON](globals.md#parsepackagejson)
* [runner](globals.md#runner)

## Type aliases

###  ConfigFunc

Ƭ **ConfigFunc**: *function*

#### Type declaration:

▸ (`app`: [Application](classes/application.md)): *void*

**Parameters:**

Name | Type |
------ | ------ |
`app` | [Application](classes/application.md) |

___

###  LogFunction

Ƭ **LogFunction**: *function*

#### Type declaration:

▸ (`method`: string, `message`: any): *void*

**Parameters:**

Name | Type |
------ | ------ |
`method` | string |
`message` | any |

___

###  Pipeline

Ƭ **Pipeline**: *object*

pipeline定义

#### Type declaration:

* \[ **key**: *string*\]: [PipelineObject](classes/pipelineobject.md)

___

###  TaskObject

Ƭ **TaskObject**: *ListrTask*

___

###  TaskOptions

Ƭ **TaskOptions**: *ListrBaseClassOptions‹any, any, "verbose"›*

## Variables

### `Let` _Execa

• **_Execa**: *typeof Execa | undefined*

___

### `Let` _Tasks

• **_Tasks**: *typeof Listr | undefined*

___

###  fs

• **fs**: *"E:/listenai/opensource/lisa-core/src/fs"*

___

### `Const` minimist

• **minimist**: *minimist* = _minimist

___

###  project

• **project**: *[Project](classes/project.md)* = new Project()

项目主路径，默认为命令行运行的当前的目录

## Functions

###  argv

▸ **argv**(`argv`: string[], `opts?`: _minimist.Opts): *ParsedArgs*

获取环境变量

**Parameters:**

Name | Type | Default | Description |
------ | ------ | ------ | ------ |
`argv` | string[] | (lisa.application.argv as string[]) | - |
`opts?` | _minimist.Opts | - | 设置解析参数  |

**Returns:** *ParsedArgs*

___

###  flags

▸ **flags**(`key`: string): *(Anonymous function)*

仅供typescript代码使用

**`example`** 
```typescript
export class CliUx {
@flags("project_path")
async getProjectPath() {
const projectPath = await cli.prompt("请输入项目路径", {default: '.'})
return path.resolve(projectPath)
}

@flags('author')
async getAuthor() {
const author = await cli.prompt('请输入作者名称', {default: ''}) as string
return author
}

getProjectName(projectPath: string) {
return path.basename(projectPath)
}
}
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`key` | string | 方法字段  |

**Returns:** *(Anonymous function)*

___

###  getTaskDict

▸ **getTaskDict**(): *object*

获取 任务字典

**Returns:** *object*

* \[ **key**: *string*\]: any

___

###  job

▸ **job**(`cmdName`: string, `task`: [TaskObject](globals.md#taskobject)): *void*

创建任务

**`example`** 
```typescript
job("lisa_core:pre_build", {
 title: "编译任务1",
 task: async() => {
   console.log("a")
   await fs.remove("./out")
   fs.project.root = "./out"
   await fs.project.mkdir("app", "config", "target")
 }
})
```

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`cmdName` | string | 任务名称，必须是类似 `build:pre` 的名称；请注意，如果任务名称相同，不可知道任务是否会被替换，推荐使用 `{包名}:{任务名}`的命名规范 |
`task` | [TaskObject](globals.md#taskobject) | 任务对象  |

**Returns:** *void*

___

###  load

▸ **load**(): *void*

**Returns:** *void*

___

###  loadDependence

▸ **loadDependence**(`dep`: string): *void*

加载 单个依赖包

**Parameters:**

Name | Type |
------ | ------ |
`dep` | string |

**Returns:** *void*

___

###  loadDependencies

▸ **loadDependencies**(): *void*

**Returns:** *void*

___

###  loadDevDependencies

▸ **loadDevDependencies**(): *void*

**Returns:** *void*

___

###  loadFile

▸ **loadFile**(`file`: string): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | string | 加载路径  |

**Returns:** *void*

___

###  loadFileSync

▸ **loadFileSync**(`file`: string): *void*

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`file` | string | 同步加载路径  |

**Returns:** *void*

___

###  loadPackageJSON

▸ **loadPackageJSON**(`packagePath?`: undefined | string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`packagePath?` | undefined &#124; string |

**Returns:** *void*

___

###  loadPreRunTask

▸ **loadPreRunTask**(): *void*

**Returns:** *void*

___

###  loadPwdConfig

▸ **loadPwdConfig**(`configPath?`: undefined | string): *void*

加载 config.[js|ts]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`configPath?` | undefined &#124; string | config地址，默认为packge.json中配置的地址，如果没有配置，读取项目中config.js  |

**Returns:** *void*

___

###  loadPwdTask

▸ **loadPwdTask**(`taskPath?`: undefined | string): *void*

加载 task.[js|ts]

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`taskPath?` | undefined &#124; string | task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js  |

**Returns:** *void*

___

###  loadTaskDict

▸ **loadTaskDict**(): *void*

加载 任务字典

**Returns:** *void*

___

###  loadTypescript

▸ **loadTypescript**(): *void*

**Returns:** *void*

___

###  parsePackageJSON

▸ **parsePackageJSON**(`packagePath?`: undefined | string): *any*

**Parameters:**

Name | Type |
------ | ------ |
`packagePath?` | undefined &#124; string |

**Returns:** *any*

___

###  runner

▸ **runner**(`job_list?`: undefined | string, `ctx?`: undefined | object, `verbose?`: undefined | false | true): *Promise‹unknown›*

**Parameters:**

Name | Type |
------ | ------ |
`job_list?` | undefined &#124; string |
`ctx?` | undefined &#124; object |
`verbose?` | undefined &#124; false &#124; true |

**Returns:** *Promise‹unknown›*
