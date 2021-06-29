[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / ExitError

# Class: ExitError

## Hierarchy

- `Error`

  ↳ **`ExitError`**

## Table of contents

### Constructors

- [constructor](exiterror.md#constructor)

### Properties

- [cli-ux](exiterror.md#cli-ux)
- [code](exiterror.md#code)
- [error](exiterror.md#error)
- [message](exiterror.md#message)
- [name](exiterror.md#name)
- [stack](exiterror.md#stack)
- [prepareStackTrace](exiterror.md#preparestacktrace)
- [stackTraceLimit](exiterror.md#stacktracelimit)

### Methods

- [captureStackTrace](exiterror.md#capturestacktrace)

## Constructors

### constructor

• **new ExitError**(`status`, `error?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `status` | `number` |
| `error?` | `Error` |

#### Overrides

Error.constructor

#### Defined in

node_modules/cli-ux/lib/exit.d.ts:6

## Properties

### cli-ux

• **cli-ux**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `exit` | `number` |

#### Defined in

node_modules/cli-ux/lib/exit.d.ts:1

___

### code

• **code**: ``"EEXIT"``

#### Defined in

node_modules/cli-ux/lib/exit.d.ts:5

___

### error

• `Optional` **error**: `Error`

#### Defined in

node_modules/cli-ux/lib/exit.d.ts:6

___

### message

• **message**: `string`

#### Inherited from

Error.message

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:974

___

### name

• **name**: `string`

#### Inherited from

Error.name

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:973

___

### stack

• `Optional` **stack**: `string`

#### Inherited from

Error.stack

#### Defined in

node_modules/typescript/lib/lib.es5.d.ts:975

___

### prepareStackTrace

▪ `Static` `Optional` **prepareStackTrace**: (`err`: `Error`, `stackTraces`: `CallSite`[]) => `any`

#### Type declaration

▸ (`err`, `stackTraces`): `any`

Optional override for formatting stack traces

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `Error` |
| `stackTraces` | `CallSite`[] |

##### Returns

`any`

#### Inherited from

Error.prepareStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:11

___

### stackTraceLimit

▪ `Static` **stackTraceLimit**: `number`

#### Inherited from

Error.stackTraceLimit

#### Defined in

node_modules/@types/node/globals.d.ts:13

## Methods

### captureStackTrace

▸ `Static` **captureStackTrace**(`targetObject`, `constructorOpt?`): `void`

Create .stack property on a target object

#### Parameters

| Name | Type |
| :------ | :------ |
| `targetObject` | `object` |
| `constructorOpt?` | `Function` |

#### Returns

`void`

#### Inherited from

Error.captureStackTrace

#### Defined in

node_modules/@types/node/globals.d.ts:4
