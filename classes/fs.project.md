[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / Project

# Class: Project

[fs](../modules/fs.md).Project

项目类，用于快捷创建项目结构

## Table of contents

### Constructors

- [constructor](fs.project.md#constructor)

### Properties

- [\_download\_path](fs.project.md#_download_path)
- [\_root](fs.project.md#_root)
- [\_template\_path](fs.project.md#_template_path)
- [error](fs.project.md#error)
- [info](fs.project.md#info)

### Accessors

- [download\_path](fs.project.md#download_path)
- [root](fs.project.md#root)
- [template\_path](fs.project.md#template_path)

### Methods

- [copy](fs.project.md#copy)
- [downloadFile](fs.project.md#downloadfile)
- [download\_join](fs.project.md#download_join)
- [join](fs.project.md#join)
- [mkdir](fs.project.md#mkdir)
- [template](fs.project.md#template)
- [template\_join](fs.project.md#template_join)
- [touch](fs.project.md#touch)
- [unzip](fs.project.md#unzip)
- [zip](fs.project.md#zip)

## Constructors

### constructor

• **new Project**()

#### Defined in

[src/fs/project.ts:68](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L68)

## Properties

### \_download\_path

• `Private` `Optional` **\_download\_path**: `string`

template 目录

#### Defined in

[src/fs/project.ts:46](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L46)

___

### \_root

• `Private` `Optional` **\_root**: `string`

项目主目录

#### Defined in

[src/fs/project.ts:20](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L20)

___

### \_template\_path

• `Private` `Optional` **\_template\_path**: `string`

template 目录

#### Defined in

[src/fs/project.ts:33](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L33)

___

### error

• **error**: `LogFunction`

错误日志方法

#### Defined in

[src/fs/project.ts:68](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L68)

___

### info

• **info**: `LogFunction`

日志方法

#### Defined in

[src/fs/project.ts:63](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L63)

## Accessors

### download\_path

• `get` **download_path**(): `string`

#### Returns

`string`

#### Defined in

[src/fs/project.ts:55](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L55)

• `set` **download_path**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

[src/fs/project.ts:48](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L48)

___

### root

• `get` **root**(): `string`

#### Returns

`string`

#### Defined in

[src/fs/project.ts:26](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L26)

• `set` **root**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

[src/fs/project.ts:22](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L22)

___

### template\_path

• `get` **template_path**(): `string`

#### Returns

`string`

#### Defined in

[src/fs/project.ts:39](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L39)

• `set` **template_path**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

[src/fs/project.ts:35](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L35)

## Methods

### copy

▸ **copy**(`source`, `target`): `Promise`<`void`\>

文件复制 or 目录复制

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | 模版地址，注意是在项目设置的模版目录中寻找 |
| `target` | `string` | 目标地址，注意是在项目中对应的地址 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs/project.ts:138](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L138)

___

### downloadFile

▸ **downloadFile**(`opts`): `Promise`<`Object`\>

下载文件

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.fileName` | `string` |
| `opts.progress?` | (`percentage`: `number`, `transferred`: `number`, `total`: `number`) => `void` |
| `opts.targetDir?` | `string` |
| `opts.url` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

[src/fs/project.ts:171](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L171)

___

### download\_join

▸ **download_join**(...`paths`): `string`

获取下载路径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | 路径地址 |

#### Returns

`string`

#### Defined in

[src/fs/project.ts:100](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L100)

___

### join

▸ **join**(...`paths`): `string`

获取项目的对应目录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | 路径地址 |

#### Returns

`string`

#### Defined in

[src/fs/project.ts:84](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L84)

___

### mkdir

▸ **mkdir**(...`paths`): `Promise`<`void`\>

创建目录

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | 目录路径，请注意，这是里相对路径 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs/project.ts:108](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L108)

___

### template

▸ **template**(`source`, `target`, `data`): `Promise`<`void`\>

模版渲染器

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | 模版地址，注意是在项目设置的模版目录中寻找 |
| `target` | `string` | 目标地址，注意是在项目中对应的地址 |
| `data` | `any` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs/project.ts:154](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L154)

___

### template\_join

▸ **template_join**(...`paths`): `string`

获取模板路径

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `...paths` | `string`[] | 路径地址 |

#### Returns

`string`

#### Defined in

[src/fs/project.ts:92](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L92)

___

### touch

▸ **touch**(...`paths`): `Promise`<`void`\>

创建空白文件

#### Parameters

| Name | Type |
| :------ | :------ |
| `...paths` | `string`[] |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs/project.ts:122](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L122)

___

### unzip

▸ **unzip**(`source`, `target?`): `Promise`<`void`\>

解压文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `source` | `string` | zip文件地址 |
| `target?` | `string` | 解压目录 |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/fs/project.ts:210](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L210)

___

### zip

▸ **zip**(): `AdmZip`

获取zip实例

#### Returns

`AdmZip`

#### Defined in

[src/fs/project.ts:218](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/project.ts#L218)
