---
id: "project"
title: "Project"
sidebar_label: "Project"
---

项目类，用于快捷创建项目结构

## Hierarchy

* **Project**

## Index

### Constructors

* [constructor](project.md#constructor)

### Properties

* [error](project.md#error)
* [info](project.md#info)

### Accessors

* [download_path](project.md#download_path)
* [root](project.md#root)
* [template_path](project.md#template_path)

### Methods

* [copy](project.md#copy)
* [downloadFile](project.md#downloadfile)
* [download_join](project.md#download_join)
* [join](project.md#join)
* [mkdir](project.md#mkdir)
* [template](project.md#template)
* [template_join](project.md#template_join)
* [touch](project.md#touch)
* [unzip](project.md#unzip)
* [zip](project.md#zip)

## Constructors

###  constructor

\+ **new Project**(): *[Project](project.md)*

**Returns:** *[Project](project.md)*

## Properties

###  error

• **error**: *[LogFunction](../globals.md#logfunction)*

错误日志方法

___

###  info

• **info**: *[LogFunction](../globals.md#logfunction)*

日志方法

## Accessors

###  download_path

• **get download_path**(): *string*

**Returns:** *string*

• **set download_path**(`dir`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`dir` | string |

**Returns:** *void*

___

###  root

• **get root**(): *string*

**Returns:** *string*

• **set root**(`dir`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`dir` | string |

**Returns:** *void*

___

###  template_path

• **get template_path**(): *string*

**Returns:** *string*

• **set template_path**(`dir`: string): *void*

**Parameters:**

Name | Type |
------ | ------ |
`dir` | string |

**Returns:** *void*

## Methods

###  copy

▸ **copy**(`source`: string, `target`: string): *Promise‹void›*

文件复制 or 目录复制

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | 模版地址，注意是在项目设置的模版目录中寻找 |
`target` | string | 目标地址，注意是在项目中对应的地址  |

**Returns:** *Promise‹void›*

___

###  downloadFile

▸ **downloadFile**(`opts`: object): *Promise‹object›*

下载文件

**Parameters:**

▪ **opts**: *object*

Name | Type |
------ | ------ |
`fileName` | string |
`progress?` | undefined &#124; function |
`targetDir?` | undefined &#124; string |
`url` | string |

**Returns:** *Promise‹object›*

___

###  download_join

▸ **download_join**(...`paths`: string[]): *string*

获取下载路径

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...paths` | string[] | 路径地址  |

**Returns:** *string*

___

###  join

▸ **join**(...`paths`: string[]): *string*

获取项目的对应目录

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...paths` | string[] | 路径地址  |

**Returns:** *string*

___

###  mkdir

▸ **mkdir**(...`paths`: string[]): *Promise‹void›*

创建目录

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...paths` | string[] | 目录路径，请注意，这是里相对路径  |

**Returns:** *Promise‹void›*

___

###  template

▸ **template**(`source`: string, `target`: string, `data`: any): *Promise‹void›*

模版渲染器

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | 模版地址，注意是在项目设置的模版目录中寻找 |
`target` | string | 目标地址，注意是在项目中对应的地址 |
`data` | any | - |

**Returns:** *Promise‹void›*

___

###  template_join

▸ **template_join**(...`paths`: string[]): *string*

获取模板路径

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`...paths` | string[] | 路径地址  |

**Returns:** *string*

___

###  touch

▸ **touch**(...`paths`: string[]): *Promise‹void›*

创建空白文件

**Parameters:**

Name | Type |
------ | ------ |
`...paths` | string[] |

**Returns:** *Promise‹void›*

___

###  unzip

▸ **unzip**(`source`: string, `target?`: undefined | string): *Promise‹void›*

解压文件

**Parameters:**

Name | Type | Description |
------ | ------ | ------ |
`source` | string | zip文件地址 |
`target?` | undefined &#124; string | 解压目录  |

**Returns:** *Promise‹void›*

___

###  zip

▸ **zip**(): *AdmZip‹›*

获取zip实例

**Returns:** *AdmZip‹›*
