[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / WriteStream

# Class: WriteStream

[fs](../modules/fs.md).WriteStream

## Hierarchy

- `Writable`

  ↳ **`WriteStream`**

## Table of contents

### Constructors

- [constructor](fs.writestream.md#constructor)

### Properties

- [bytesWritten](fs.writestream.md#byteswritten)
- [destroyed](fs.writestream.md#destroyed)
- [path](fs.writestream.md#path)
- [pending](fs.writestream.md#pending)
- [writable](fs.writestream.md#writable)
- [writableCorked](fs.writestream.md#writablecorked)
- [writableEnded](fs.writestream.md#writableended)
- [writableFinished](fs.writestream.md#writablefinished)
- [writableHighWaterMark](fs.writestream.md#writablehighwatermark)
- [writableLength](fs.writestream.md#writablelength)
- [writableObjectMode](fs.writestream.md#writableobjectmode)
- [captureRejectionSymbol](fs.writestream.md#capturerejectionsymbol)
- [captureRejections](fs.writestream.md#capturerejections)
- [defaultMaxListeners](fs.writestream.md#defaultmaxlisteners)
- [errorMonitor](fs.writestream.md#errormonitor)

### Methods

- [\_destroy](fs.writestream.md#_destroy)
- [\_final](fs.writestream.md#_final)
- [\_write](fs.writestream.md#_write)
- [\_writev](fs.writestream.md#_writev)
- [addListener](fs.writestream.md#addlistener)
- [close](fs.writestream.md#close)
- [cork](fs.writestream.md#cork)
- [destroy](fs.writestream.md#destroy)
- [emit](fs.writestream.md#emit)
- [end](fs.writestream.md#end)
- [eventNames](fs.writestream.md#eventnames)
- [getMaxListeners](fs.writestream.md#getmaxlisteners)
- [listenerCount](fs.writestream.md#listenercount)
- [listeners](fs.writestream.md#listeners)
- [off](fs.writestream.md#off)
- [on](fs.writestream.md#on)
- [once](fs.writestream.md#once)
- [pipe](fs.writestream.md#pipe)
- [prependListener](fs.writestream.md#prependlistener)
- [prependOnceListener](fs.writestream.md#prependoncelistener)
- [rawListeners](fs.writestream.md#rawlisteners)
- [removeAllListeners](fs.writestream.md#removealllisteners)
- [removeListener](fs.writestream.md#removelistener)
- [setDefaultEncoding](fs.writestream.md#setdefaultencoding)
- [setMaxListeners](fs.writestream.md#setmaxlisteners)
- [uncork](fs.writestream.md#uncork)
- [write](fs.writestream.md#write)
- [listenerCount](fs.writestream.md#listenercount)
- [on](fs.writestream.md#on)
- [once](fs.writestream.md#once)

## Constructors

### constructor

• **new WriteStream**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `WritableOptions` |

#### Inherited from

stream.Writable.constructor

#### Defined in

node_modules/@types/node/stream.d.ts:153

## Properties

### bytesWritten

• **bytesWritten**: `number`

#### Defined in

node_modules/@types/node/fs.d.ts:219

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

stream.Writable.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:153

___

### path

• **path**: `string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:220

___

### pending

• **pending**: `boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:221

___

### writable

• `Readonly` **writable**: `boolean`

#### Inherited from

stream.Writable.writable

#### Defined in

node_modules/@types/node/stream.d.ts:146

___

### writableCorked

• `Readonly` **writableCorked**: `number`

#### Inherited from

stream.Writable.writableCorked

#### Defined in

node_modules/@types/node/stream.d.ts:152

___

### writableEnded

• `Readonly` **writableEnded**: `boolean`

#### Inherited from

stream.Writable.writableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:147

___

### writableFinished

• `Readonly` **writableFinished**: `boolean`

#### Inherited from

stream.Writable.writableFinished

#### Defined in

node_modules/@types/node/stream.d.ts:148

___

### writableHighWaterMark

• `Readonly` **writableHighWaterMark**: `number`

#### Inherited from

stream.Writable.writableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:149

___

### writableLength

• `Readonly` **writableLength**: `number`

#### Inherited from

stream.Writable.writableLength

#### Defined in

node_modules/@types/node/stream.d.ts:150

___

### writableObjectMode

• `Readonly` **writableObjectMode**: `boolean`

#### Inherited from

stream.Writable.writableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:151

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](fs.readstream.md#capturerejectionsymbol)

#### Inherited from

stream.Writable.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

stream.Writable.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

stream.Writable.defaultMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:50

___

### errorMonitor

▪ `Static` `Readonly` **errorMonitor**: typeof [`errorMonitor`](fs.readstream.md#errormonitor)

This symbol shall be used to install a listener for only monitoring `'error'`
events. Listeners installed using this symbol are called before the regular
`'error'` listeners are called.

Installing a listener using this symbol does not change the behavior once an
`'error'` event is emitted, therefore the process will still crash if no
regular `'error'` listener is installed.

#### Inherited from

stream.Writable.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:42

## Methods

### \_destroy

▸ **_destroy**(`error`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error` | ``null`` \| `Error` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:157

___

### \_final

▸ **_final**(`callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.\_final

#### Defined in

node_modules/@types/node/stream.d.ts:158

___

### \_write

▸ **_write**(`chunk`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.\_write

#### Defined in

node_modules/@types/node/stream.d.ts:155

___

### \_writev

▸ `Optional` **_writev**(`chunks`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunks` | { `chunk`: `any` ; `encoding`: `BufferEncoding`  }[] |
| `callback` | (`error?`: ``null`` \| `Error`) => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.\_writev

#### Defined in

node_modules/@types/node/stream.d.ts:156

___

### addListener

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

events.EventEmitter
  1. open
  2. close
  3. ready

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:229

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:230

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:231

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:232

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:233

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:234

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:235

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:236

▸ **addListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:237

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:218

___

### cork

▸ **cork**(): `void`

#### Returns

`void`

#### Inherited from

stream.Writable.cork

#### Defined in

node_modules/@types/node/stream.d.ts:165

___

### destroy

▸ **destroy**(`error?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `error?` | `Error` |

#### Returns

`void`

#### Inherited from

stream.Writable.destroy

#### Defined in

node_modules/@types/node/stream.d.ts:167

___

### emit

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:187

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:188

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:189

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:190

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:191

▸ **emit**(`event`, `src`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `src` | `Readable` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:192

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

stream.Writable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:193

___

### end

▸ **end**(`cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.end

#### Defined in

node_modules/@types/node/stream.d.ts:162

▸ **end**(`chunk`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.end

#### Defined in

node_modules/@types/node/stream.d.ts:163

▸ **end**(`chunk`, `encoding`, `cb?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | () => `void` |

#### Returns

`void`

#### Inherited from

stream.Writable.end

#### Defined in

node_modules/@types/node/stream.d.ts:164

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

stream.Writable.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

stream.Writable.getMaxListeners

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

stream.Writable.listenerCount

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

stream.Writable.listeners

#### Defined in

node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.off

#### Defined in

node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:239

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:240

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:241

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:242

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:243

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:244

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:245

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:246

▸ **on**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.on

#### Defined in

node_modules/@types/node/fs.d.ts:247

___

### once

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:249

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:250

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:251

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:252

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:253

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:254

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:255

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:256

▸ **once**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.once

#### Defined in

node_modules/@types/node/fs.d.ts:257

___

### pipe

▸ **pipe**<`T`\>(`destination`, `options?`): `T`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `WritableStream`<`T`\> |

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination` | `T` |
| `options?` | `Object` |
| `options.end?` | `boolean` |

#### Returns

`T`

#### Inherited from

stream.Writable.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:10

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:259

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:260

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:261

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:262

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:263

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:264

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:265

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:266

▸ **prependListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:267

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:269

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:270

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:271

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:272

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:273

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:274

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:275

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:276

▸ **prependOnceListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Overrides

stream.Writable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:277

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

stream.Writable.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:71

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:227

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"drain"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:228

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:229

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"finish"`` |
| `listener` | () => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:230

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:231

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"unpipe"`` |
| `listener` | (`src`: `Readable`) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:232

▸ **removeListener**(`event`, `listener`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:233

___

### setDefaultEncoding

▸ **setDefaultEncoding**(`encoding`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.setDefaultEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:161

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`WriteStream`](fs.writestream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`WriteStream`](fs.writestream.md)

#### Inherited from

stream.Writable.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:68

___

### uncork

▸ **uncork**(): `void`

#### Returns

`void`

#### Inherited from

stream.Writable.uncork

#### Defined in

node_modules/@types/node/stream.d.ts:166

___

### write

▸ **write**(`chunk`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `cb?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.write

#### Defined in

node_modules/@types/node/stream.d.ts:159

▸ **write**(`chunk`, `encoding`, `cb?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding` | `BufferEncoding` |
| `cb?` | (`error`: `undefined` \| ``null`` \| `Error`) => `void` |

#### Returns

`boolean`

#### Inherited from

stream.Writable.write

#### Defined in

node_modules/@types/node/stream.d.ts:160

___

### listenerCount

▸ `Static` **listenerCount**(`emitter`, `event`): `number`

**`deprecated`** since v4.0.0

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` \| `symbol` |

#### Returns

`number`

#### Inherited from

stream.Writable.listenerCount

#### Defined in

node_modules/@types/node/events.d.ts:31

___

### on

▸ `Static` **on**(`emitter`, `event`): `AsyncIterableIterator`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `EventEmitter` |
| `event` | `string` |

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

stream.Writable.on

#### Defined in

node_modules/@types/node/events.d.ts:28

___

### once

▸ `Static` **once**(`emitter`, `event`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `NodeEventTarget` |
| `event` | `string` \| `symbol` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

stream.Writable.once

#### Defined in

node_modules/@types/node/events.d.ts:26

▸ `Static` **once**(`emitter`, `event`): `Promise`<`any`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `emitter` | `DOMEventTarget` |
| `event` | `string` |

#### Returns

`Promise`<`any`[]\>

#### Inherited from

stream.Writable.once

#### Defined in

node_modules/@types/node/events.d.ts:27
