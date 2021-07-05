[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / Application

# Class: Application

## Table of contents

### Constructors

- [constructor](application.md#constructor)

### Properties

- [\_apiHost](application.md#_apihost)
- [\_apiPrefix](application.md#_apiprefix)
- [\_cacheDir](application.md#_cachedir)
- [\_context](application.md#_context)
- [\_lisaAccessToken](application.md#_lisaaccesstoken)
- [\_logPath](application.md#_logpath)
- [\_lpmRegistryUrl](application.md#_lpmregistryurl)
- [\_lscloudPersonalToken](application.md#_lscloudpersonaltoken)
- [argv](application.md#argv)
- [description](application.md#description)
- [download\_path](application.md#download_path)
- [errors](application.md#errors)
- [firmwareConfiguration](application.md#firmwareconfiguration)
- [flashLpkPath](application.md#flashlpkpath)
- [hardwareConfiguration](application.md#hardwareconfiguration)
- [packageJSON](application.md#packagejson)
- [pipeline](application.md#pipeline)
- [root](application.md#root)
- [task\_path](application.md#task_path)
- [tasks](application.md#tasks)
- [template\_path](application.md#template_path)
- [version](application.md#version)

### Accessors

- [apiHost](application.md#apihost)
- [apiPrefix](application.md#apiprefix)
- [cacheDir](application.md#cachedir)
- [context](application.md#context)
- [lisaAccessToken](application.md#lisaaccesstoken)
- [logPath](application.md#logpath)
- [lpmRegistryUrl](application.md#lpmregistryurl)
- [lscloudPersonalToken](application.md#lscloudpersonaltoken)

### Methods

- [addContext](application.md#addcontext)
- [addGlobalContext](application.md#addglobalcontext)
- [configuration](application.md#configuration)
- [env](application.md#env)
- [errorLog](application.md#errorlog)
- [getContextFromPackageName](application.md#getcontextfrompackagename)
- [gitignore](application.md#gitignore)
- [log](application.md#log)
- [logReport](application.md#logreport)
- [validateConfig](application.md#validateconfig)

## Constructors

### constructor

• **new Application**()

## Properties

### \_apiHost

• `Private` `Optional` **\_apiHost**: `string`

lisa server api host

#### Defined in

[src/application.ts:86](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L86)

___

### \_apiPrefix

• `Private` `Optional` **\_apiPrefix**: `string`

lisa server api prefix

#### Defined in

[src/application.ts:99](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L99)

___

### \_cacheDir

• `Private` `Optional` **\_cacheDir**: `string`

lisa cache 缓存目录

#### Defined in

[src/application.ts:112](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L112)

___

### \_context

• `Private` **\_context**: `any` = `{}`

自定义参数

#### Defined in

[src/application.ts:213](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L213)

___

### \_lisaAccessToken

• `Private` `Optional` **\_lisaAccessToken**: `string`

lisa accessToken

#### Defined in

[src/application.ts:60](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L60)

___

### \_logPath

• `Private` `Optional` **\_logPath**: `string`

log 路径

#### Defined in

[src/application.ts:279](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L279)

___

### \_lpmRegistryUrl

• `Private` `Optional` **\_lpmRegistryUrl**: `string`

lpm registry url

#### Defined in

[src/application.ts:73](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L73)

___

### \_lscloudPersonalToken

• `Private` `Optional` **\_lscloudPersonalToken**: `string`

lscloud personalToken

#### Defined in

[src/application.ts:47](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L47)

___

### argv

• **argv**: `string`[] = `[]`

执行命令的参数

#### Defined in

[src/application.ts:255](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L255)

___

### description

• **description**: `string` = `"CSK 项目"`

项目说明

#### Defined in

[src/application.ts:142](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L142)

___

### download\_path

• **download\_path**: `string`

download 目录

#### Defined in

[src/application.ts:157](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L157)

___

### errors

• **errors**: `ValidationError`[] = `[]`

验证错误信息

#### Defined in

[src/application.ts:167](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L167)

___

### firmwareConfiguration

• **firmwareConfiguration**: `any` = `{}`

固件配置

#### Defined in

[src/application.ts:126](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L126)

___

### flashLpkPath

• **flashLpkPath**: `string`

烧录的lpk包地址

#### Defined in

[src/application.ts:172](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L172)

___

### hardwareConfiguration

• **hardwareConfiguration**: `any` = `{}`

pin脚设置

#### Defined in

[src/application.ts:131](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L131)

___

### packageJSON

• **packageJSON**: `any` = `null`

package.json 信息

#### Defined in

[src/application.ts:42](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L42)

___

### pipeline

• **pipeline**: [`Pipeline`](../modules.md#pipeline)

创建项目时的参数

#### Defined in

[src/application.ts:195](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L195)

___

### root

• **root**: `string`

项目主目录

#### Defined in

[src/application.ts:147](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L147)

___

### task\_path

• `Optional` **task\_path**: `string`

task 文件地址

#### Defined in

[src/application.ts:162](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L162)

___

### tasks

• **tasks**: `Object` = `{}`

#### Index signature

▪ [key: `string`]: [`TaskObject`](../modules.md#taskobject)

#### Defined in

[src/application.ts:37](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L37)

___

### template\_path

• **template\_path**: `string`

template 目录

#### Defined in

[src/application.ts:152](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L152)

___

### version

• **version**: `string` = `"1.0.0"`

设置版本号，要求为三位表达式, eg: 1.0.0

#### Defined in

[src/application.ts:137](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L137)

## Accessors

### apiHost

• `get` **apiHost**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:92](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L92)

• `set` **apiHost**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:88](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L88)

___

### apiPrefix

• `get` **apiPrefix**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:105](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L105)

• `set` **apiPrefix**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:101](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L101)

___

### cacheDir

• `get` **cacheDir**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:118](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L118)

• `set` **cacheDir**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:114](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L114)

___

### context

• `get` **context**(): `any`

#### Returns

`any`

#### Defined in

[src/application.ts:214](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L214)

___

### lisaAccessToken

• `get` **lisaAccessToken**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:66](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L66)

• `set` **lisaAccessToken**(`token`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:62](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L62)

___

### logPath

• `get` **logPath**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:285](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L285)

• `set` **logPath**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:281](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L281)

___

### lpmRegistryUrl

• `get` **lpmRegistryUrl**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:79](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L79)

• `set` **lpmRegistryUrl**(`url`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `url` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:75](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L75)

___

### lscloudPersonalToken

• `get` **lscloudPersonalToken**(): `string`

#### Returns

`string`

#### Defined in

[src/application.ts:53](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L53)

• `set` **lscloudPersonalToken**(`token`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `token` | `string` |

#### Returns

`void`

#### Defined in

[src/application.ts:49](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L49)

## Methods

### addContext

▸ **addContext**(`packageName`, `context`): `void`

添加指定包的自定义参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packageName` | `string` | lisa lib包名 |
| `context` | `Object` | 自定义参数 |

#### Returns

`void`

#### Defined in

[src/application.ts:223](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L223)

___

### addGlobalContext

▸ **addGlobalContext**(`context`): `void`

添加全局的自定义参数

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `context` | `Object` | 自定义参数 |

#### Returns

`void`

#### Defined in

[src/application.ts:236](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L236)

___

### configuration

▸ **configuration**(`callback`): `void`

程序设置

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | `ConfigFunc` |

#### Returns

`void`

#### Defined in

[src/application.ts:178](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L178)

___

### env

▸ **env**(): [`LisaEnv`](../enums/lisaenv.md)

获取 Lisa 在某个环境中使用, 不可以通过代码设置，仅允许通过环境变量 LISA_ENV 来设置
可选参数 dev prod test
默认是 dev，不用做多修改，允许测试的时候请你使用
```
npm run build && LISA_ENV=test jest --coverage
```

#### Returns

[`LisaEnv`](../enums/lisaenv.md)

#### Defined in

[src/application.ts:265](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L265)

___

### errorLog

▸ **errorLog**(`stderr`): `void`

log stderr 输出

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stderr` | `string` | 输出内容 |

#### Returns

`void`

#### Defined in

[src/application.ts:333](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L333)

___

### getContextFromPackageName

▸ **getContextFromPackageName**(`packaegName`): `any`

获取包名下面的Context属性

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `packaegName` | `string` | 包名 |

#### Returns

`any`

#### Defined in

[src/application.ts:244](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L244)

___

### gitignore

▸ **gitignore**(`path`, `args`): `void`

gitignore 设置git忽略的目录文件

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | `string` | .gitignore 路径 |
| `args` | `string`[] | 要忽略的目录文件 |

#### Returns

`void`

#### Defined in

[src/application.ts:294](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L294)

___

### log

▸ **log**(`stdout`): `void`

log stdout 输出

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `stdout` | `string` | 输出内容 |

#### Returns

`void`

#### Defined in

[src/application.ts:317](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L317)

___

### logReport

▸ **logReport**(`options`): `Promise`<`void`\>

上报到日志服务

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `Object` | Object 需要上报的内容 |
| `options.cid?` | `string` \| `number` | - |
| `options.company_id?` | `string` \| `number` | - |
| `options.content?` | `string` | - |
| `options.csk_commit?` | `string` \| `number` | - |
| `options.project_name?` | `string` | - |
| `options.res?` | ``null`` \| `string` | - |
| `options.type` | `string` | - |
| `options.user_id?` | `string` \| `number` | - |
| `options.version?` | `string` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

[src/application.ts:351](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L351)

___

### validateConfig

▸ **validateConfig**(): `Promise`<`boolean`\>

#### Returns

`Promise`<`boolean`\>

#### Defined in

[src/application.ts:182](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L182)
