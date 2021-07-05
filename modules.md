[@listenai/lisa_core](README.md) / Exports

# @listenai/lisa_core

## Table of contents

### Namespaces

- [Table](modules/table.md)
- [fs](modules/fs.md)

### Enumerations

- [LisaEnv](enums/lisaenv.md)

### Classes

- [ActionBase](classes/actionbase.md)
- [Application](classes/application.md)
- [Config](classes/config.md)
- [ExitError](classes/exiterror.md)
- [PipelineObject](classes/pipelineobject.md)

### Interfaces

- [IPromptOptions](interfaces/ipromptoptions.md)

### Type aliases

- [Pipeline](modules.md#pipeline)
- [TaskObject](modules.md#taskobject)
- [TaskOptions](modules.md#taskoptions)

### Variables

- [Tasks](modules.md#tasks)
- [application](modules.md#application)
- [cli](modules.md#cli)
- [cmd](modules.md#cmd)
- [config](modules.md#config)
- [got](modules.md#got)
- [project\_lang](modules.md#project_lang)
- [store](modules.md#store)
- [ux](modules.md#ux)

### Functions

- [argv](modules.md#argv)
- [flags](modules.md#flags)
- [job](modules.md#job)
- [load](modules.md#load)
- [loadConfig](modules.md#loadconfig)
- [loadDependencies](modules.md#loaddependencies)
- [loadDevDependencies](modules.md#loaddevdependencies)
- [loadFile](modules.md#loadfile)
- [loadPackageJSON](modules.md#loadpackagejson)
- [loadTask](modules.md#loadtask)
- [loadTypescript](modules.md#loadtypescript)
- [minimist](modules.md#minimist)
- [parsePackageJSON](modules.md#parsepackagejson)
- [reloadApplication](modules.md#reloadapplication)
- [runner](modules.md#runner)

## Type aliases

### Pipeline

Ƭ **Pipeline**: `Object`

pipeline定义

#### Index signature

▪ [key: `string`]: [`PipelineObject`](classes/pipelineobject.md)

#### Defined in

[src/application.ts:16](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L16)

___

### TaskObject

Ƭ **TaskObject**: `Listr.ListrTask`<`Listr.ListrContext`\>

#### Defined in

[src/application.ts:10](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L10)

___

### TaskOptions

Ƭ **TaskOptions**: `Listr.ListrOptions`

#### Defined in

[src/application.ts:11](https://github.com/LISTENAI/lisa-core/blob/956d078/src/application.ts#L11)

## Variables

### Tasks

• `Const` **Tasks**: typeof `Listr`

引用Listr来执行task指令

#### Defined in

[src/index.ts:15](https://github.com/LISTENAI/lisa-core/blob/956d078/src/index.ts#L15)

___

### application

• **application**: [`Application`](classes/application.md)

#### Defined in

[src/index.ts:26](https://github.com/LISTENAI/lisa-core/blob/956d078/src/index.ts#L26)

___

### cli

• `Const` **cli**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`ActionBase`](classes/actionbase.md) | - |
| `anykey` | `anykey` | "press anykey to continue" |
| `config` | [`Config`](classes/config.md) | - |
| `confirm` | `confirm` | - |
| `error` | typeof `Errors.error` | - |
| `exit` | typeof `Errors.exit` | - |
| `open` | `default` | - |
| `prideAction` | [`ActionBase`](classes/actionbase.md) | - |
| `progress` | `default` | - |
| `prompt` | `prompt` | - |
| `styledHeader` | `default` | - |
| `styledJSON` | `default` | - |
| `table` | typeof [`table`](modules/table.md#table) | - |
| `tree` | `default` | - |
| `wait` | (`ms?`: `number`) => `Promise`<`unknown`\> | - |
| `warn` | typeof `Errors.warn` | - |
| `annotation` | (`text`: `string`, `annotation`: `string`) => `void` | - |
| `debug` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `done` | () => `Promise`<`void`\> | - |
| `flush` | () => `Promise`<`void`\> | - |
| `info` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `log` | (`format?`: `string`, ...`args`: `string`[]) => `void` | - |
| `styledObject` | (`obj`: `any`, `keys?`: `string`[]) => `void` | - |
| `trace` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `url` | (`text`: `string`, `uri`: `string`, `params?`: {}) => `void` | - |

#### Defined in

node_modules/cli-ux/lib/index.d.ts:38

___

### cmd

• `Const` **cmd**: `Object`

#### Call signature

▸ (`file`, `arguments?`, `options?`): `ExecaChildProcess`<`string`\>

Execute a file.

Think of this as a mix of `child_process.execFile` and `child_process.spawn`.

**`example`**
```
import execa = require('execa');

(async () => {
const {stdout} = await execa('echo', ['unicorns']);
console.log(stdout);
//=> 'unicorns'

// Cancelling a spawned process

const subprocess = execa('node');

setTimeout(() => {
subprocess.cancel()
}, 1000);

try {
await subprocess;
} catch (error) {
console.log(subprocess.killed); // true
console.log(error.isCanceled); // true
}
})();

// Pipe the child process stdout to the current stdout
execa('echo', ['unicorns']).stdout.pipe(process.stdout);
```

##### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | The program/script to execute. |
| `arguments?` | readonly `string`[] | Arguments to pass to `file` on execution. |
| `options?` | `Options`<`string`\> | - |

##### Returns

`ExecaChildProcess`<`string`\>

A [`child_process` instance](https://nodejs.org/api/child_process.html#child_process_class_childprocess), which is enhanced to also be a `Promise` for a result `Object` with `stdout` and `stderr` properties.

▸ (`file`, `arguments?`, `options?`): `ExecaChildProcess`<`Buffer`\>

引用execa来执行shell命令，解决windows一些兼容性问题，具体请查看 [execa](https://www.npmjs.com/package/execa)

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `arguments?` | readonly `string`[] |
| `options?` | `Options`<``null``\> |

##### Returns

`ExecaChildProcess`<`Buffer`\>

▸ (`file`, `options?`): `ExecaChildProcess`<`string`\>

引用execa来执行shell命令，解决windows一些兼容性问题，具体请查看 [execa](https://www.npmjs.com/package/execa)

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | `Options`<`string`\> |

##### Returns

`ExecaChildProcess`<`string`\>

▸ (`file`, `options?`): `ExecaChildProcess`<`Buffer`\>

引用execa来执行shell命令，解决windows一些兼容性问题，具体请查看 [execa](https://www.npmjs.com/package/execa)

##### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | `Options`<``null``\> |

##### Returns

`ExecaChildProcess`<`Buffer`\>

#### Type declaration

| Name | Type |
| :------ | :------ |
| `command` | (`command`: `string`, `options?`: `Options`<`string`\>) => `ExecaChildProcess`<`string`\>(`command`: `string`, `options?`: `Options`<``null``\>) => `ExecaChildProcess`<`Buffer`\> |
| `commandSync` | (`command`: `string`, `options?`: `SyncOptions`<`string`\>) => `ExecaSyncReturnValue`<`string`\>(`command`: `string`, `options?`: `SyncOptions`<``null``\>) => `ExecaSyncReturnValue`<`Buffer`\> |
| `node` | (`scriptPath`: `string`, `arguments?`: readonly `string`[], `options?`: `NodeOptions`<`string`\>) => `ExecaChildProcess`<`string`\>(`scriptPath`: `string`, `arguments?`: readonly `string`[], `options?`: `Options`<``null``\>) => `ExecaChildProcess`<`Buffer`\>(`scriptPath`: `string`, `options?`: `Options`<`string`\>) => `ExecaChildProcess`<`string`\>(`scriptPath`: `string`, `options?`: `Options`<``null``\>) => `ExecaChildProcess`<`Buffer`\> |
| `sync` | (`file`: `string`, `arguments?`: readonly `string`[], `options?`: `SyncOptions`<`string`\>) => `ExecaSyncReturnValue`<`string`\>(`file`: `string`, `arguments?`: readonly `string`[], `options?`: `SyncOptions`<``null``\>) => `ExecaSyncReturnValue`<`Buffer`\>(`file`: `string`, `options?`: `SyncOptions`<`string`\>) => `ExecaSyncReturnValue`<`string`\>(`file`: `string`, `options?`: `SyncOptions`<``null``\>) => `ExecaSyncReturnValue`<`Buffer`\> |

#### Defined in

[src/index.ts:47](https://github.com/LISTENAI/lisa-core/blob/956d078/src/index.ts#L47)

___

### config

• `Const` **config**: [`Config`](classes/config.md)

#### Defined in

node_modules/cli-ux/lib/config.d.ts:19

___

### got

• `Const` **got**: `Got`

使用 Got 来处理 HTTP 请求，具体请查看 [GOT](https://www.npmjs.com/package/got)

#### Defined in

[src/index.ts:20](https://github.com/LISTENAI/lisa-core/blob/956d078/src/index.ts#L20)

___

### project\_lang

• **project\_lang**: `string`

项目引导能力，用于命令行引导程序

#### Defined in

[src/load.ts:9](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L9)

___

### store

• `Const` **store**: `Configstore`

#### Defined in

[src/index.ts:21](https://github.com/LISTENAI/lisa-core/blob/956d078/src/index.ts#L21)

___

### ux

• `Const` **ux**: `Object`

#### Type declaration

| Name | Type | Description |
| :------ | :------ | :------ |
| `action` | [`ActionBase`](classes/actionbase.md) | - |
| `anykey` | `anykey` | "press anykey to continue" |
| `config` | [`Config`](classes/config.md) | - |
| `confirm` | `confirm` | - |
| `error` | typeof `Errors.error` | - |
| `exit` | typeof `Errors.exit` | - |
| `open` | `default` | - |
| `prideAction` | [`ActionBase`](classes/actionbase.md) | - |
| `progress` | `default` | - |
| `prompt` | `prompt` | - |
| `styledHeader` | `default` | - |
| `styledJSON` | `default` | - |
| `table` | typeof [`table`](modules/table.md#table) | - |
| `tree` | `default` | - |
| `wait` | (`ms?`: `number`) => `Promise`<`unknown`\> | - |
| `warn` | typeof `Errors.warn` | - |
| `annotation` | (`text`: `string`, `annotation`: `string`) => `void` | - |
| `debug` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `done` | () => `Promise`<`void`\> | - |
| `flush` | () => `Promise`<`void`\> | - |
| `info` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `log` | (`format?`: `string`, ...`args`: `string`[]) => `void` | - |
| `styledObject` | (`obj`: `any`, `keys?`: `string`[]) => `void` | - |
| `trace` | (`format`: `string`, ...`args`: `string`[]) => `void` | - |
| `url` | (`text`: `string`, `uri`: `string`, `params?`: {}) => `void` | - |

#### Defined in

node_modules/cli-ux/lib/index.d.ts:7

## Functions

### argv

▸ **argv**(`argv?`, `opts?`): `ParsedArgs`

获取环境变量

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `argv` | `string`[] | - |
| `opts?` | `_minimist.Opts` | 设置解析参数 |

#### Returns

`ParsedArgs`

#### Defined in

[src/argv.ts:10](https://github.com/LISTENAI/lisa-core/blob/956d078/src/argv.ts#L10)

___

### flags

▸ **flags**(`key`): (`target`: `any`, `propertyKey`: `string`, `descriptor`: `TypedPropertyDescriptor`<`fn`\>) => `void`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `key` | `string` | 方法字段 |

#### Returns

`fn`

▸ (`target`, `propertyKey`, `descriptor`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `target` | `any` |
| `propertyKey` | `string` |
| `descriptor` | `TypedPropertyDescriptor`<`fn`\> |

##### Returns

`void`

#### Defined in

[src/argv.ts:42](https://github.com/LISTENAI/lisa-core/blob/956d078/src/argv.ts#L42)

___

### job

▸ **job**(`cmdName`, `task`): `void`

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

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `cmdName` | `string` | 任务名称，必须是类似 `build:pre` 的名称；请注意，如果任务名称相同，不可知道任务是否会被替换，推荐使用 `{包名}:{任务名}`的命名规范 |
| `task` | [`TaskObject`](modules.md#taskobject) | 任务对象 |

#### Returns

`void`

#### Defined in

[src/task/index.ts:21](https://github.com/LISTENAI/lisa-core/blob/956d078/src/task/index.ts#L21)

___

### load

▸ **load**(): [`@listenai/lisa_core`](modules.md)

#### Returns

[`@listenai/lisa_core`](modules.md)

#### Defined in

[src/load.ts:169](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L169)

___

### loadConfig

▸ **loadConfig**(`configPath?`): `void`

加载 config.[js|ts]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `configPath?` | `string` | config地址，默认为packge.json中配置的地址，如果没有配置，读取项目中config.js |

#### Returns

`void`

#### Defined in

[src/load.ts:39](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L39)

___

### loadDependencies

▸ **loadDependencies**(): `void`

#### Returns

`void`

#### Defined in

[src/load.ts:105](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L105)

___

### loadDevDependencies

▸ **loadDevDependencies**(): `void`

#### Returns

`void`

#### Defined in

[src/load.ts:145](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L145)

___

### loadFile

▸ **loadFile**(`file`): `void`

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | `string` | 加载路径 |

#### Returns

`void`

#### Defined in

[src/load.ts:15](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L15)

___

### loadPackageJSON

▸ **loadPackageJSON**(`packagePath?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packagePath?` | `string` |

#### Returns

`void`

#### Defined in

[src/load.ts:95](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L95)

___

### loadTask

▸ **loadTask**(`taskPath?`): `void`

加载 task.[js|ts]

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `taskPath?` | `string` | task地址，默认为packge.json中配置的地址，如果没有配置，读取项目中 task.js |

#### Returns

`void`

#### Defined in

[src/load.ts:65](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L65)

___

### loadTypescript

▸ **loadTypescript**(): `void`

#### Returns

`void`

#### Defined in

[src/load.ts:99](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L99)

___

### minimist

▸ `Const` **minimist**(`args?`, `opts?`): `minimist.ParsedArgs`

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `string`[] |
| `opts?` | `minimist.Opts` |

#### Returns

`minimist.ParsedArgs`

#### Defined in

[src/argv.ts:4](https://github.com/LISTENAI/lisa-core/blob/956d078/src/argv.ts#L4)

▸ `Const` **minimist**<`T`\>(`args?`, `opts?`): `T` & `minimist.ParsedArgs`

#### Type parameters

| Name |
| :------ |
| `T` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `string`[] |
| `opts?` | `minimist.Opts` |

#### Returns

`T` & `minimist.ParsedArgs`

#### Defined in

[src/argv.ts:4](https://github.com/LISTENAI/lisa-core/blob/956d078/src/argv.ts#L4)

▸ `Const` **minimist**<`T`\>(`args?`, `opts?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `ParsedArgs` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `args?` | `string`[] |
| `opts?` | `minimist.Opts` |

#### Returns

`T`

#### Defined in

[src/argv.ts:4](https://github.com/LISTENAI/lisa-core/blob/956d078/src/argv.ts#L4)

___

### parsePackageJSON

▸ **parsePackageJSON**(`packagePath?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `packagePath?` | `string` |

#### Returns

`any`

#### Defined in

[src/load.ts:85](https://github.com/LISTENAI/lisa-core/blob/956d078/src/load.ts#L85)

___

### reloadApplication

▸ **reloadApplication**(): `void`

危险：仅供测试使用

#### Returns

`void`

#### Defined in

[src/index.ts:52](https://github.com/LISTENAI/lisa-core/blob/956d078/src/index.ts#L52)

___

### runner

▸ **runner**(`job_list?`, `ctx?`, `verbose?`): `Promise`<`unknown`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `job_list?` | `string` |
| `ctx?` | `Object` |
| `verbose?` | `boolean` |

#### Returns

`Promise`<`unknown`\>

#### Defined in

[src/task/index.ts:25](https://github.com/LISTENAI/lisa-core/blob/956d078/src/task/index.ts#L25)
