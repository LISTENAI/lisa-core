[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / Dir

# Class: Dir

[fs](../modules/fs.md).Dir

A class representing a directory stream.

## Table of contents

### Constructors

- [constructor](fs.dir.md#constructor)

### Properties

- [path](fs.dir.md#path)

### Methods

- [[Symbol.asyncIterator]](fs.dir.md#[symbol.asynciterator])
- [close](fs.dir.md#close)
- [closeSync](fs.dir.md#closesync)
- [read](fs.dir.md#read)
- [readSync](fs.dir.md#readsync)

## Constructors

### constructor

• **new Dir**()

## Properties

### path

• `Readonly` **path**: `string`

#### Defined in

node_modules/@types/node/fs.d.ts:79

## Methods

### [Symbol.asyncIterator]

▸ **[Symbol.asyncIterator]**(): `AsyncIterableIterator`<[`Dirent`](fs.dirent.md)\>

Asynchronously iterates over the directory via `readdir(3)` until all entries have been read.

#### Returns

`AsyncIterableIterator`<[`Dirent`](fs.dirent.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:84

___

### close

▸ **close**(): `Promise`<`void`\>

Asynchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:90

▸ **close**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | [`NoParamCallback`](../modules/fs.md#noparamcallback) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:91

___

### closeSync

▸ **closeSync**(): `void`

Synchronously close the directory's underlying resource handle.
Subsequent reads will result in errors.

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:97

___

### read

▸ **read**(): `Promise`<``null`` \| [`Dirent`](fs.dirent.md)\>

Asynchronously read the next directory entry via `readdir(3)` as an `Dirent`.
After the read is completed, a value is returned that will be resolved with an `Dirent`, or `null` if there are no more directory entries to read.
Directory entries returned by this function are in no particular order as provided by the operating system's underlying directory mechanisms.

#### Returns

`Promise`<``null`` \| [`Dirent`](fs.dirent.md)\>

#### Defined in

node_modules/@types/node/fs.d.ts:104

▸ **read**(`cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `cb` | (`err`: ``null`` \| `ErrnoException`, `dirEnt`: ``null`` \| [`Dirent`](fs.dirent.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:105

___

### readSync

▸ **readSync**(): ``null`` \| [`Dirent`](fs.dirent.md)

Synchronously read the next directory entry via `readdir(3)` as a `Dirent`.
If there are no more directory entries to read, null will be returned.
Directory entries returned by this function are in no particular order as provided by the operating system's underlying directory mechanisms.

#### Returns

``null`` \| [`Dirent`](fs.dirent.md)

#### Defined in

node_modules/@types/node/fs.d.ts:112
