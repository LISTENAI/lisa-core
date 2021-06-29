[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / ReadStream

# Class: ReadStream

[fs](../modules/fs.md).ReadStream

## Hierarchy

- `Readable`

  ↳ **`ReadStream`**

## Table of contents

### Constructors

- [constructor](fs.readstream.md#constructor)

### Properties

- [bytesRead](fs.readstream.md#bytesread)
- [destroyed](fs.readstream.md#destroyed)
- [path](fs.readstream.md#path)
- [pending](fs.readstream.md#pending)
- [readable](fs.readstream.md#readable)
- [readableEncoding](fs.readstream.md#readableencoding)
- [readableEnded](fs.readstream.md#readableended)
- [readableFlowing](fs.readstream.md#readableflowing)
- [readableHighWaterMark](fs.readstream.md#readablehighwatermark)
- [readableLength](fs.readstream.md#readablelength)
- [readableObjectMode](fs.readstream.md#readableobjectmode)
- [captureRejectionSymbol](fs.readstream.md#capturerejectionsymbol)
- [captureRejections](fs.readstream.md#capturerejections)
- [defaultMaxListeners](fs.readstream.md#defaultmaxlisteners)
- [errorMonitor](fs.readstream.md#errormonitor)

### Methods

- [[Symbol.asyncIterator]](fs.readstream.md#[symbol.asynciterator])
- [\_destroy](fs.readstream.md#_destroy)
- [\_read](fs.readstream.md#_read)
- [addListener](fs.readstream.md#addlistener)
- [close](fs.readstream.md#close)
- [destroy](fs.readstream.md#destroy)
- [emit](fs.readstream.md#emit)
- [eventNames](fs.readstream.md#eventnames)
- [getMaxListeners](fs.readstream.md#getmaxlisteners)
- [isPaused](fs.readstream.md#ispaused)
- [listenerCount](fs.readstream.md#listenercount)
- [listeners](fs.readstream.md#listeners)
- [off](fs.readstream.md#off)
- [on](fs.readstream.md#on)
- [once](fs.readstream.md#once)
- [pause](fs.readstream.md#pause)
- [pipe](fs.readstream.md#pipe)
- [prependListener](fs.readstream.md#prependlistener)
- [prependOnceListener](fs.readstream.md#prependoncelistener)
- [push](fs.readstream.md#push)
- [rawListeners](fs.readstream.md#rawlisteners)
- [read](fs.readstream.md#read)
- [removeAllListeners](fs.readstream.md#removealllisteners)
- [removeListener](fs.readstream.md#removelistener)
- [resume](fs.readstream.md#resume)
- [setEncoding](fs.readstream.md#setencoding)
- [setMaxListeners](fs.readstream.md#setmaxlisteners)
- [unpipe](fs.readstream.md#unpipe)
- [unshift](fs.readstream.md#unshift)
- [wrap](fs.readstream.md#wrap)
- [from](fs.readstream.md#from)
- [listenerCount](fs.readstream.md#listenercount)
- [on](fs.readstream.md#on)
- [once](fs.readstream.md#once)

## Constructors

### constructor

• **new ReadStream**(`opts?`)

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | `ReadableOptions` |

#### Inherited from

stream.Readable.constructor

#### Defined in

node_modules/@types/node/stream.d.ts:40

## Properties

### bytesRead

• **bytesRead**: `number`

#### Defined in

node_modules/@types/node/fs.d.ts:151

___

### destroyed

• **destroyed**: `boolean`

#### Inherited from

stream.Readable.destroyed

#### Defined in

node_modules/@types/node/stream.d.ts:40

___

### path

• **path**: `string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:152

___

### pending

• **pending**: `boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:153

___

### readable

• **readable**: `boolean`

#### Inherited from

stream.Readable.readable

#### Defined in

node_modules/@types/node/stream.d.ts:33

___

### readableEncoding

• `Readonly` **readableEncoding**: ``null`` \| `BufferEncoding`

#### Inherited from

stream.Readable.readableEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:34

___

### readableEnded

• `Readonly` **readableEnded**: `boolean`

#### Inherited from

stream.Readable.readableEnded

#### Defined in

node_modules/@types/node/stream.d.ts:35

___

### readableFlowing

• `Readonly` **readableFlowing**: ``null`` \| `boolean`

#### Inherited from

stream.Readable.readableFlowing

#### Defined in

node_modules/@types/node/stream.d.ts:36

___

### readableHighWaterMark

• `Readonly` **readableHighWaterMark**: `number`

#### Inherited from

stream.Readable.readableHighWaterMark

#### Defined in

node_modules/@types/node/stream.d.ts:37

___

### readableLength

• `Readonly` **readableLength**: `number`

#### Inherited from

stream.Readable.readableLength

#### Defined in

node_modules/@types/node/stream.d.ts:38

___

### readableObjectMode

• `Readonly` **readableObjectMode**: `boolean`

#### Inherited from

stream.Readable.readableObjectMode

#### Defined in

node_modules/@types/node/stream.d.ts:39

___

### captureRejectionSymbol

▪ `Static` `Readonly` **captureRejectionSymbol**: typeof [`captureRejectionSymbol`](fs.readstream.md#capturerejectionsymbol)

#### Inherited from

stream.Readable.captureRejectionSymbol

#### Defined in

node_modules/@types/node/events.d.ts:43

___

### captureRejections

▪ `Static` **captureRejections**: `boolean`

Sets or gets the default captureRejection value for all emitters.

#### Inherited from

stream.Readable.captureRejections

#### Defined in

node_modules/@types/node/events.d.ts:49

___

### defaultMaxListeners

▪ `Static` **defaultMaxListeners**: `number`

#### Inherited from

stream.Readable.defaultMaxListeners

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

stream.Readable.errorMonitor

#### Defined in

node_modules/@types/node/events.d.ts:42

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): `AsyncIterableIterator`<`any`\>

#### Returns

`AsyncIterableIterator`<`any`\>

#### Inherited from

stream.Readable.\_\_@asyncIterator

#### Defined in

node_modules/@types/node/stream.d.ts:129

___

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

stream.Readable.\_destroy

#### Defined in

node_modules/@types/node/stream.d.ts:52

___

### \_read

▸ **_read**(`size`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size` | `number` |

#### Returns

`void`

#### Inherited from

stream.Readable.\_read

#### Defined in

node_modules/@types/node/stream.d.ts:42

___

### addListener

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

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

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:161

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `string` \| `Buffer`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:162

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:163

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:164

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:165

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:166

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:167

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:168

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:169

▸ **addListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.addListener

#### Defined in

node_modules/@types/node/fs.d.ts:170

___

### close

▸ **close**(): `void`

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:150

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

stream.Readable.destroy

#### Defined in

node_modules/@types/node/stream.d.ts:53

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

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:75

▸ **emit**(`event`, `chunk`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `chunk` | `any` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:76

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:77

▸ **emit**(`event`, `err`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `err` | `Error` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:78

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:79

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:80

▸ **emit**(`event`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:81

▸ **emit**(`event`, ...`args`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `...args` | `any`[] |

#### Returns

`boolean`

#### Inherited from

stream.Readable.emit

#### Defined in

node_modules/@types/node/stream.d.ts:82

___

### eventNames

▸ **eventNames**(): (`string` \| `symbol`)[]

#### Returns

(`string` \| `symbol`)[]

#### Inherited from

stream.Readable.eventNames

#### Defined in

node_modules/@types/node/events.d.ts:77

___

### getMaxListeners

▸ **getMaxListeners**(): `number`

#### Returns

`number`

#### Inherited from

stream.Readable.getMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:69

___

### isPaused

▸ **isPaused**(): `boolean`

#### Returns

`boolean`

#### Inherited from

stream.Readable.isPaused

#### Defined in

node_modules/@types/node/stream.d.ts:47

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

stream.Readable.listenerCount

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

stream.Readable.listeners

#### Defined in

node_modules/@types/node/events.d.ts:70

___

### off

▸ **off**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.off

#### Defined in

node_modules/@types/node/events.d.ts:66

___

### on

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:172

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `string` \| `Buffer`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:173

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:174

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:175

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:176

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:177

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:178

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:179

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:180

▸ **on**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.on

#### Defined in

node_modules/@types/node/fs.d.ts:181

___

### once

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:183

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `string` \| `Buffer`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:184

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:185

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:186

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:187

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:188

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:189

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:190

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:191

▸ **once**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.once

#### Defined in

node_modules/@types/node/fs.d.ts:192

___

### pause

▸ **pause**(): [`ReadStream`](fs.readstream.md)

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.pause

#### Defined in

node_modules/@types/node/stream.d.ts:45

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

stream.Readable.pipe

#### Defined in

node_modules/@types/node/stream.d.ts:10

___

### prependListener

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:194

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `string` \| `Buffer`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:195

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:196

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:197

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:198

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:199

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:200

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:201

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:202

▸ **prependListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependListener

#### Defined in

node_modules/@types/node/fs.d.ts:203

___

### prependOnceListener

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:205

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `string` \| `Buffer`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:206

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:207

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:208

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"open"`` |
| `listener` | (`fd`: `number`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:209

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:210

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:211

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"ready"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:212

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:213

▸ **prependOnceListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Overrides

stream.Readable.prependOnceListener

#### Defined in

node_modules/@types/node/fs.d.ts:214

___

### push

▸ **push**(`chunk`, `encoding?`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`boolean`

#### Inherited from

stream.Readable.push

#### Defined in

node_modules/@types/node/stream.d.ts:51

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

stream.Readable.rawListeners

#### Defined in

node_modules/@types/node/events.d.ts:71

___

### read

▸ **read**(`size?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `size?` | `number` |

#### Returns

`any`

#### Inherited from

stream.Readable.read

#### Defined in

node_modules/@types/node/stream.d.ts:43

___

### removeAllListeners

▸ **removeAllListeners**(`event?`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event?` | `string` \| `symbol` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeAllListeners

#### Defined in

node_modules/@types/node/events.d.ts:67

___

### removeListener

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"close"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:120

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"data"`` |
| `listener` | (`chunk`: `any`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:121

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"end"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:122

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"error"`` |
| `listener` | (`err`: `Error`) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:123

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"pause"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:124

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"readable"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:125

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | ``"resume"`` |
| `listener` | () => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:126

▸ **removeListener**(`event`, `listener`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `event` | `string` \| `symbol` |
| `listener` | (...`args`: `any`[]) => `void` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.removeListener

#### Defined in

node_modules/@types/node/stream.d.ts:127

___

### resume

▸ **resume**(): [`ReadStream`](fs.readstream.md)

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.resume

#### Defined in

node_modules/@types/node/stream.d.ts:46

___

### setEncoding

▸ **setEncoding**(`encoding`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `encoding` | `BufferEncoding` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.setEncoding

#### Defined in

node_modules/@types/node/stream.d.ts:44

___

### setMaxListeners

▸ **setMaxListeners**(`n`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `n` | `number` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.setMaxListeners

#### Defined in

node_modules/@types/node/events.d.ts:68

___

### unpipe

▸ **unpipe**(`destination?`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `destination?` | `WritableStream` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.unpipe

#### Defined in

node_modules/@types/node/stream.d.ts:48

___

### unshift

▸ **unshift**(`chunk`, `encoding?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `chunk` | `any` |
| `encoding?` | `BufferEncoding` |

#### Returns

`void`

#### Inherited from

stream.Readable.unshift

#### Defined in

node_modules/@types/node/stream.d.ts:49

___

### wrap

▸ **wrap**(`oldStream`): [`ReadStream`](fs.readstream.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldStream` | `ReadableStream` |

#### Returns

[`ReadStream`](fs.readstream.md)

#### Inherited from

stream.Readable.wrap

#### Defined in

node_modules/@types/node/stream.d.ts:50

___

### from

▸ `Static` **from**(`iterable`, `options?`): `Readable`

A utility method for creating Readable Streams out of iterators.

#### Parameters

| Name | Type |
| :------ | :------ |
| `iterable` | `Iterable`<`any`\> \| `AsyncIterable`<`any`\> |
| `options?` | `ReadableOptions` |

#### Returns

`Readable`

#### Inherited from

stream.Readable.from

#### Defined in

node_modules/@types/node/stream.d.ts:31

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

stream.Readable.listenerCount

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

stream.Readable.on

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

stream.Readable.once

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

stream.Readable.once

#### Defined in

node_modules/@types/node/events.d.ts:27
