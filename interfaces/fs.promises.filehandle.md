[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / [promises](../modules/fs.promises.md) / FileHandle

# Interface: FileHandle

[fs](../modules/fs.md).[promises](../modules/fs.promises.md).FileHandle

## Table of contents

### Properties

- [fd](fs.promises.filehandle.md#fd)

### Methods

- [appendFile](fs.promises.filehandle.md#appendfile)
- [chmod](fs.promises.filehandle.md#chmod)
- [chown](fs.promises.filehandle.md#chown)
- [close](fs.promises.filehandle.md#close)
- [datasync](fs.promises.filehandle.md#datasync)
- [read](fs.promises.filehandle.md#read)
- [readFile](fs.promises.filehandle.md#readfile)
- [readv](fs.promises.filehandle.md#readv)
- [stat](fs.promises.filehandle.md#stat)
- [sync](fs.promises.filehandle.md#sync)
- [truncate](fs.promises.filehandle.md#truncate)
- [utimes](fs.promises.filehandle.md#utimes)
- [write](fs.promises.filehandle.md#write)
- [writeFile](fs.promises.filehandle.md#writefile)
- [writev](fs.promises.filehandle.md#writev)

## Properties

### fd

• `Readonly` **fd**: `number`

Gets the file descriptor for this file handle.

#### Defined in

node_modules/@types/node/fs/promises.d.ts:29

## Methods

### appendFile

▸ **appendFile**(`data`, `options?`): `Promise`<`void`\>

Asynchronously append data to a file, creating the file if it does not exist. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for appending.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
| `options?` | ``null`` \| `BufferEncoding` \| [`BaseEncodingOptions`](fs.baseencodingoptions.md) & { `flag?`: [`OpenMode`](../modules/fs.md#openmode) ; `mode?`: `Mode`  } | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:41

___

### chmod

▸ **chmod**(`mode`): `Promise`<`void`\>

Asynchronous fchmod(2) - Change permissions of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:52

___

### chown

▸ **chown**(`uid`, `gid`): `Promise`<`void`\>

Asynchronous fchown(2) - Change ownership of a file.

#### Parameters

| Name | Type |
| :------ | :------ |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:46

___

### close

▸ **close**(): `Promise`<`void`\>

Asynchronous close(2) - close a `FileHandle`.

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:165

___

### datasync

▸ **datasync**(): `Promise`<`void`\>

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:57

___

### read

▸ **read**<`TBuffer`\>(`buffer`, `offset?`, `length?`, `position?`): `Promise`<`Object`\>

Asynchronously reads data from the file.
The `FileHandle` must have been opened for reading.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `Uint8Array`<`TBuffer`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset?` | ``null`` \| `number` | The offset in the buffer at which to start writing. |
| `length?` | ``null`` \| `number` | The number of bytes to read. |
| `position?` | ``null`` \| `number` | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position. |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:72

___

### readFile

▸ **readFile**(`options?`): `Promise`<`Buffer`\>

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | ``null`` \| { `encoding?`: ``null`` ; `flag?`: [`OpenMode`](../modules/fs.md#openmode)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:80

▸ **readFile**(`options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options` | `BufferEncoding` \| { `encoding`: `BufferEncoding` ; `flag?`: [`OpenMode`](../modules/fs.md#openmode)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:88

▸ **readFile**(`options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously reads the entire contents of a file. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for reading.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `options?` | ``null`` \| `BufferEncoding` \| [`BaseEncodingOptions`](fs.baseencodingoptions.md) & { `flag?`: [`OpenMode`](../modules/fs.md#openmode)  } | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:96

___

### readv

▸ **readv**(`buffers`, `position?`): `Promise`<[`ReadVResult`](fs.readvresult.md)\>

See `fs.readv` promisified version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`Promise`<[`ReadVResult`](fs.readvresult.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:160

___

### stat

▸ **stat**(`opts?`): `Promise`<[`Stats`](../classes/fs.stats.md)\>

Asynchronous fstat(2) - Get file status.

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StatOptions`](fs.statoptions.md) & { `bigint?`: ``false``  } |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:101

▸ **stat**(`opts`): `Promise`<[`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | [`StatOptions`](fs.statoptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:102

▸ **stat**(`opts?`): `Promise`<[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts?` | [`StatOptions`](fs.statoptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:103

___

### sync

▸ **sync**(): `Promise`<`void`\>

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:62

___

### truncate

▸ **truncate**(`len?`): `Promise`<`void`\>

Asynchronous ftruncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `len?` | `number` | If not specified, defaults to `0`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:109

___

### utimes

▸ **utimes**(`atime`, `mtime`): `Promise`<`void`\>

Asynchronously change file timestamps of the file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:116

___

### write

▸ **write**<`TBuffer`\>(`buffer`, `offset?`, `length?`, `position?`): `Promise`<`Object`\>

Asynchronously writes `buffer` to the file.
The `FileHandle` must have been opened for writing.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `Uint8Array`<`TBuffer`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset?` | ``null`` \| `number` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `length?` | ``null`` \| `number` | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
| `position?` | ``null`` \| `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:126

▸ **write**(`data`, `position?`, `encoding?`): `Promise`<`Object`\>

Asynchronously writes `string` to the file.
The `FileHandle` must have been opened for writing.
It is unsafe to call `write()` multiple times on the same file without waiting for the `Promise`
to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Uint8Array` | - |
| `position?` | ``null`` \| `number` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | ``null`` \| `BufferEncoding` | The expected string encoding. |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:137

___

### writeFile

▸ **writeFile**(`data`, `options?`): `Promise`<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists. The underlying file will _not_ be closed automatically.
The `FileHandle` must have been opened for writing.
It is unsafe to call `writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
| `options?` | ``null`` \| `BufferEncoding` \| [`BaseEncodingOptions`](fs.baseencodingoptions.md) & { `flag?`: [`OpenMode`](../modules/fs.md#openmode) ; `mode?`: `Mode`  } | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:150

___

### writev

▸ **writev**(`buffers`, `position?`): `Promise`<[`WriteVResult`](fs.writevresult.md)\>

See `fs.writev` promisified version.

#### Parameters

| Name | Type |
| :------ | :------ |
| `buffers` | readonly `ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`Promise`<[`WriteVResult`](fs.writevresult.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:155
