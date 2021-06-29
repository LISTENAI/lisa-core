[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / ActionBase

# Class: ActionBase

## Table of contents

### Constructors

- [constructor](actionbase.md#constructor)

### Properties

- [std](actionbase.md#std)
- [stdmockOrigs](actionbase.md#stdmockorigs)
- [stdmocks](actionbase.md#stdmocks)
- [type](actionbase.md#type)

### Accessors

- [globals](actionbase.md#globals)
- [output](actionbase.md#output)
- [running](actionbase.md#running)
- [status](actionbase.md#status)
- [task](actionbase.md#task)

### Methods

- [\_flushStdout](actionbase.md#_flushstdout)
- [\_pause](actionbase.md#_pause)
- [\_resume](actionbase.md#_resume)
- [\_start](actionbase.md#_start)
- [\_stdout](actionbase.md#_stdout)
- [\_stop](actionbase.md#_stop)
- [\_updateStatus](actionbase.md#_updatestatus)
- [\_write](actionbase.md#_write)
- [pause](actionbase.md#pause)
- [pauseAsync](actionbase.md#pauseasync)
- [start](actionbase.md#start)
- [stop](actionbase.md#stop)

## Constructors

### constructor

• **new ActionBase**()

## Properties

### std

• **std**: ``"stdout"`` \| ``"stderr"``

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:12

___

### stdmockOrigs

• `Private` **stdmockOrigs**: `any`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:14

___

### stdmocks

• `Protected` `Optional` **stdmocks**: [``"stdout"`` \| ``"stderr"``, `string`[]][]

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:13

___

### type

• **type**: `ActionType`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:11

## Accessors

### globals

• `Private` `get` **globals**(): `any`

#### Returns

`any`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:17

___

### output

• `Protected` `get` **output**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:20

• `Protected` `set` **output**(`output`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `output` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:21

___

### running

• `get` **running**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:22

___

### status

• `get` **status**(): `undefined` \| `string`

#### Returns

`undefined` \| `string`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:23

• `set` **status**(`status`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `undefined` \| `string` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:24

___

### task

• `get` **task**(): `undefined` \| `ITask`

#### Returns

`undefined` \| `ITask`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:18

• `set` **task**(`task`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `task` | `undefined` \| `ITask` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:19

## Methods

### \_flushStdout

▸ `Protected` **_flushStdout**(): `void`

flush mocked stdout/stderr

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:39

___

### \_pause

▸ `Protected` **_pause**(`_?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:30

___

### \_resume

▸ `Protected` **_resume**(): `void`

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:29

___

### \_start

▸ `Protected` **_start**(): `void`

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:27

___

### \_stdout

▸ `Protected` **_stdout**(`toggle`): `void`

mock out stdout/stderr so it doesn't screw up the rendering

#### Parameters

| Name | Type |
| :------ | :------ |
| `toggle` | `boolean` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:35

___

### \_stop

▸ `Protected` **_stop**(`_`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `string` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:28

___

### \_updateStatus

▸ `Protected` **_updateStatus**(`_`, `__?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `_` | `undefined` \| `string` |
| `__?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:31

___

### \_write

▸ `Protected` **_write**(`std`, `s`): `void`

write to the real stdout/stderr

#### Parameters

| Name | Type |
| :------ | :------ |
| `std` | ``"stdout"`` \| ``"stderr"`` |
| `s` | `string` \| `string`[] |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:43

___

### pause

▸ **pause**(`fn`, `icon?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `any` |
| `icon?` | `string` |

#### Returns

`any`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:26

___

### pauseAsync

▸ **pauseAsync**(`fn`, `icon?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fn` | () => `Promise`<`any`\> |
| `icon?` | `string` |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:25

___

### start

▸ **start**(`action`, `status?`, `opts?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `action` | `string` |
| `status?` | `string` |
| `opts?` | `Options` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:15

___

### stop

▸ **stop**(`msg?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `msg?` | `string` |

#### Returns

`void`

#### Defined in

node_modules/cli-ux/lib/action/base.d.ts:16
