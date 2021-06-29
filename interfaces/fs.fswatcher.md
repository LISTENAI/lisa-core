[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / FSWatcher

# Interface: FSWatcher

[fs](../modules/fs.md).FSWatcher

## Hierarchy

- `EventEmitter`

  ↳ **`FSWatcher`**

## Table of contents

### Methods

- [addListener](fs.fswatcher.md#addlistener)
- [close](fs.fswatcher.md#close)
- [emit](fs.fswatcher.md#emit)
- [eventNames](fs.fswatcher.md#eventnames)
- [getMaxListeners](fs.fswatcher.md#getmaxlisteners)
- [listenerCount](fs.fswatcher.md#listenercount)
- [listeners](fs.fswatcher.md#listeners)
- [off](fs.fswatcher.md#off)
- [on](fs.fswatcher.md#on)
- [once](fs.fswatcher.md#once)
- [prependListener](fs.fswatcher.md#prependlistener)
- [prependOnceListener](fs.fswatcher.md#prependoncelistener)
- [rawListeners](fs.fswatcher.md#rawlisteners)
- [removeAllListeners](fs.fswatcher.md#removealllisteners)
- [removeListener](fs.fswatcher.md#removelistener)
- [setMaxListeners](fs.fswatcher.md#setmaxlisteners)

## Methods

### addListener

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

events.EventEmitter
  1. change
  2. error

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:123

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:124

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:125

▸ **addListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:126

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:116

___

### emit

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

EventEmitter.emit

#### Defined in

node_modules/@types/node/events.d.ts:72

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

EventEmitter.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

EventEmitter.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:69

___

### listenerCount

▸ **listenerCount**(`event`): `number`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

EventEmitter.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:73

___

### listeners

▸ **listeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.listeners

#### Defined in

node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Inherited from

EventEmitter.off

#### Defined in

node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

node_modules/@types/node/fs.d.ts:128

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

node_modules/@types/node/fs.d.ts:129

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

node_modules/@types/node/fs.d.ts:130

▸ **on**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.on

#### Defined in

node_modules/@types/node/fs.d.ts:131

___

### once

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

node_modules/@types/node/fs.d.ts:133

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

node_modules/@types/node/fs.d.ts:134

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

node_modules/@types/node/fs.d.ts:135

▸ **once**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.once

#### Defined in

node_modules/@types/node/fs.d.ts:136

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:138

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:139

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:140

▸ **prependListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:141

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:143

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"change"`` |
| `listener` | (`eventType`: `string`, `filename`: `string` \| `Buffer`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:144

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`error`: `Error`) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:145

▸ **prependOnceListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Overrides

EventEmitter.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:146

___

### rawListeners

▸ **rawListeners**(`event`): `Function`[]

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |

#### Returns

`Function`[]

#### Inherited from

EventEmitter.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Inherited from

EventEmitter.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Inherited from

EventEmitter.removeListener

#### Defined in

node_modules/@types/node/events.d.ts:65

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`FSWatcher`](fs.fswatcher.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`FSWatcher`](fs.fswatcher.md)

#### Inherited from

EventEmitter.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:68
