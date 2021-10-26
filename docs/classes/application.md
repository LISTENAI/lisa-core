---
id: "application"
title: "Application"
sidebar_label: "Application"
---

## Hierarchy

* **Application**

## Index

### Properties

* [argv](application.md#argv)
* [download_path](application.md#download_path)
* [packageJSON](application.md#packagejson)
* [root](application.md#root)
* [task_path](application.md#optional-task_path)
* [tasks](application.md#tasks)
* [template_path](application.md#template_path)

### Accessors

* [apiHost](application.md#apihost)
* [apiPrefix](application.md#apiprefix)
* [cacheDir](application.md#cachedir)
* [context](application.md#context)
* [logPath](application.md#logpath)
* [lpmRegistryUrl](application.md#lpmregistryurl)
* [registryUrl](application.md#registryurl)

### Methods

* [addContext](application.md#addcontext)
* [addGlobalContext](application.md#addglobalcontext)
* [configuration](application.md#configuration)
* [errorLog](application.md#errorlog)
* [getContextFromPackageName](application.md#getcontextfrompackagename)
* [gitignore](application.md#gitignore)
* [log](application.md#log)

### Object literals

* [pipeline](application.md#pipeline)

## Properties

###  argv

• **argv**: *string[] | ParsedArgs* = []

执行命令的参数

___

###  download_path

• **download_path**: *string* = path.join(process.cwd(), 'target/cache')

download 目录

___

###  packageJSON

• **packageJSON**: *any* = null

package.json 信息

___

###  root

• **root**: *string* = process.cwd()

项目主目录

___

### `Optional` task_path

• **task_path**? : *undefined | string* = undefined

task 文件地址

___

###  tasks

• **tasks**: *object*

#### Type declaration:

* \[ **key**: *string*\]: [TaskObject](../globals.md#taskobject)

___

###  template_path

• **template_path**: *string* = path.join(process.cwd(), 'template')

template 目录

## Accessors

###  apiHost

• **get apiHost**(): *string*

**Returns:** *string*

• **set apiHost**(`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  apiPrefix

• **get apiPrefix**(): *string*

**Returns:** *string*

• **set apiPrefix**(`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  cacheDir

• **get cacheDir**(): *string*

**Returns:** *string*

• **set cacheDir**(`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  context

• **get context**(): *any*

**Returns:** *any*

___

###  logPath

• **get logPath**(): *string*

**Returns:** *string*

• **set logPath**(`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  lpmRegistryUrl

• **get lpmRegistryUrl**(): *string*

**Returns:** *string*

• **set lpmRegistryUrl**(`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

___

###  registryUrl

• **get registryUrl**(): *string*

**Returns:** *string*

• **set registryUrl**(`url`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`url` | string |

**Returns:** *void*

## Methods

###  addContext

▸ **addContext**(`packageName`: string, `context`: object): *void*

添加指定包的自定义参数

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packageName` | string | lisa lib包名 |
`context` | object | 自定义参数  |

**Returns:** *void*

___

###  addGlobalContext

▸ **addGlobalContext**(`context`: object): *void*

添加全局的自定义参数

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`context` | object | 自定义参数  |

**Returns:** *void*

___

###  configuration

▸ **configuration**(`callback`: [ConfigFunc](../globals.md#configfunc)): *void*

程序设置

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`callback` | [ConfigFunc](../globals.md#configfunc) |   |

**Returns:** *void*

___

###  errorLog

▸ **errorLog**(`stderr`: string): *void*

log stderr 输出

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stderr` | string | 输出内容  |

**Returns:** *void*

___

###  getContextFromPackageName

▸ **getContextFromPackageName**(`packaegName`: string): *any*

获取包名下面的Context属性

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`packaegName` | string | 包名  |

**Returns:** *any*

___

###  gitignore

▸ **gitignore**(`path`: string, `args`: string[]): *void*

gitignore 设置git忽略的目录文件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`path` | string | .gitignore 路径 |
`args` | string[] | 要忽略的目录文件  |

**Returns:** *void*

___

###  log

▸ **log**(`stdout`: string): *void*

log stdout 输出

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`stdout` | string | 输出内容  |

**Returns:** *void*

## Object literals

###  pipeline

### ▪ **pipeline**: *object*

创建项目时的参数

▪ **build**: *object*

* **desc**: *string* = "打包"

* **tasks**: *string[]* = ['build:init', 'build:patch', 'build:source', 'build:pre_respak', 'build:respak', 'build:package']

▪ **create**: *object*

* **desc**: *string* = "创建项目"

* **tasks**: *string[]* = ['create:init', 'create:install']

▪ **init**: *object*

* **desc**: *string* = "项目初始化"

* **tasks**: *string[]* = ['init:ready', 'init:install']
