[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](fs.md) / promises

# Namespace: promises

[fs](fs.md).promises

## Table of contents

### Interfaces

- [FileHandle](../interfaces/fs.promises.filehandle.md)

### Functions

- [access](fs.promises.md#access)
- [appendFile](fs.promises.md#appendfile)
- [chmod](fs.promises.md#chmod)
- [chown](fs.promises.md#chown)
- [copyFile](fs.promises.md#copyfile)
- [fchmod](fs.promises.md#fchmod)
- [fchown](fs.promises.md#fchown)
- [fdatasync](fs.promises.md#fdatasync)
- [fsync](fs.promises.md#fsync)
- [ftruncate](fs.promises.md#ftruncate)
- [futimes](fs.promises.md#futimes)
- [lchmod](fs.promises.md#lchmod)
- [lchown](fs.promises.md#lchown)
- [link](fs.promises.md#link)
- [lstat](fs.promises.md#lstat)
- [lutimes](fs.promises.md#lutimes)
- [mkdir](fs.promises.md#mkdir)
- [mkdtemp](fs.promises.md#mkdtemp)
- [open](fs.promises.md#open)
- [opendir](fs.promises.md#opendir)
- [read](fs.promises.md#read)
- [readFile](fs.promises.md#readfile)
- [readdir](fs.promises.md#readdir)
- [readlink](fs.promises.md#readlink)
- [realpath](fs.promises.md#realpath)
- [rename](fs.promises.md#rename)
- [rm](fs.promises.md#rm)
- [rmdir](fs.promises.md#rmdir)
- [stat](fs.promises.md#stat)
- [symlink](fs.promises.md#symlink)
- [truncate](fs.promises.md#truncate)
- [unlink](fs.promises.md#unlink)
- [utimes](fs.promises.md#utimes)
- [write](fs.promises.md#write)
- [writeFile](fs.promises.md#writefile)

## Functions

### access

▸ **access**(`path`, `mode?`): `Promise`<`void`\>

Asynchronously tests a user's permissions for the file specified by path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `mode?` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:173

___

### appendFile

▸ **appendFile**(`path`, `data`, `options?`): `Promise`<`void`\>

Asynchronously append data to a file, creating the file if it does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| [`FileHandle`](../interfaces/fs.promises.filehandle.md) | - |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `flag?`: [`OpenMode`](fs.md#openmode) ; `mode?`: `Mode`  } \| `BufferEncoding` \| ``null`` | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:531

___

### chmod

▸ **chmod**(`path`, `mode`): `Promise`<`void`\>

Asynchronous chmod(2) - Change permissions of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:409

___

### chown

▸ **chown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Asynchronous chown(2) - Change ownership of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:444

___

### copyFile

▸ **copyFile**(`src`, `dest`, `flags?`): `Promise`<`void`\>

Asynchronously copies `src` to `dest`. By default, `dest` is overwritten if it already exists.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](fs.md#pathlike) | A path to the source file. |
| `dest` | [`PathLike`](fs.md#pathlike) | A path to the destination file. |
| `flags?` | `number` | An optional integer that specifies the behavior of the copy operation. The only supported flag is `fs.constants.COPYFILE_EXCL`, which causes the copy operation to fail if `dest` already exists. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:186

___

### fchmod

▸ **fchmod**(`handle`, `mode`): `Promise`<`void`\>

Asynchronous fchmod(2) - Change permissions of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:402

___

### fchown

▸ **fchown**(`handle`, `uid`, `gid`): `Promise`<`void`\>

Asynchronous fchown(2) - Change ownership of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:438

___

### fdatasync

▸ **fdatasync**(`handle`): `Promise`<`void`\>

Asynchronous fdatasync(2) - synchronize a file's in-core state with storage device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:278

___

### fsync

▸ **fsync**(`handle`): `Promise`<`void`\>

Asynchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:284

___

### ftruncate

▸ **ftruncate**(`handle`, `len?`): `Promise`<`void`\>

Asynchronous ftruncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `len?` | `number` | If not specified, defaults to `0`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:261

___

### futimes

▸ **futimes**(`handle`, `atime`, `mtime`): `Promise`<`void`\>

Asynchronously change file timestamps of the file referenced by the supplied `FileHandle`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:460

___

### lchmod

▸ **lchmod**(`path`, `mode`): `Promise`<`void`\>

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:416

___

### lchown

▸ **lchown**(`path`, `uid`, `gid`): `Promise`<`void`\>

Asynchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:422

___

### link

▸ **link**(`existingPath`, `newPath`): `Promise`<`void`\>

Asynchronous link(2) - Create a new link (also known as a hard link) to an existing file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existingPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `newPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:389

___

### lstat

▸ **lstat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.stats.md)\>

Asynchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `opts?` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:372

▸ **lstat**(`path`, `opts`): `Promise`<[`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `opts` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:373

▸ **lstat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `opts?` | [`StatOptions`](../interfaces/fs.statoptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:374

___

### lutimes

▸ **lutimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Changes the access and modification times of a file in the same way as `fsPromises.utimes()`,
with the difference that if the path refers to a symbolic link, then the link is not
dereferenced: instead, the timestamps of the symbolic link itself are changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:432

___

### mkdir

▸ **mkdir**(`path`, `options`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`MakeDirectoryOptions`](../interfaces/fs.makedirectoryoptions.md) & { `recursive`: ``true``  } | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:292

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `Mode` \| [`MakeDirectoryOptions`](../interfaces/fs.makedirectoryoptions.md) & { `recursive?`: ``false``  } \| ``null`` | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:300

▸ **mkdir**(`path`, `options?`): `Promise`<`string` \| `undefined`\>

Asynchronous mkdir(2) - create a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | `Mode` \| [`MakeDirectoryOptions`](../interfaces/fs.makedirectoryoptions.md) \| ``null`` | Either the file mode, or an object optionally specifying the file mode and whether parent folders should be created. If a string is passed, it is parsed as an octal integer. If not specified, defaults to `0o777`. |

#### Returns

`Promise`<`string` \| `undefined`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:308

___

### mkdtemp

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:488

▸ **mkdtemp**(`prefix`, `options`): `Promise`<`Buffer`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](fs.md#bufferencodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:495

▸ **mkdtemp**(`prefix`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required `prefix` to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:502

___

### open

▸ **open**(`path`, `flags`, `mode?`): `Promise`<[`FileHandle`](../interfaces/fs.promises.filehandle.md)\>

Asynchronous open(2) - open and possibly create a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `flags` | `string` \| `number` | - |
| `mode?` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`. |

#### Returns

`Promise`<[`FileHandle`](../interfaces/fs.promises.filehandle.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:194

___

### opendir

▸ **opendir**(`path`, `options?`): `Promise`<[`Dir`](../classes/fs.dir.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`OpenDirOptions`](../interfaces/fs.opendiroptions.md) |

#### Returns

`Promise`<[`Dir`](../classes/fs.dir.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:560

___

### read

▸ **read**<`TBuffer`\>(`handle`, `buffer`, `offset?`, `length?`, `position?`): `Promise`<`Object`\>

Asynchronously reads data from the file referenced by the supplied `FileHandle`.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `Uint8Array`<`TBuffer`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset?` | `number` \| ``null`` | The offset in the buffer at which to start writing. |
| `length?` | `number` \| ``null`` | The number of bytes to read. |
| `position?` | `number` \| ``null`` | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position. |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:205

___

### readFile

▸ **readFile**(`path`, `options?`): `Promise`<`Buffer`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options?` | { `encoding?`: ``null`` ; `flag?`: [`OpenMode`](fs.md#openmode)  } \| ``null`` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:540

▸ **readFile**(`path`, `options`): `Promise`<`string`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options` | { `encoding`: `BufferEncoding` ; `flag?`: [`OpenMode`](fs.md#openmode)  } \| `BufferEncoding` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:549

▸ **readFile**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `flag?`: [`OpenMode`](fs.md#openmode)  } \| `BufferEncoding` \| ``null`` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:558

___

### readdir

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `withFileTypes?`: ``false``  } \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:315

▸ **readdir**(`path`, `options`): `Promise`<`Buffer`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } \| ``"buffer"`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:322

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| `Buffer`[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `withFileTypes?`: ``false``  } \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`[] \| `Buffer`[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:329

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](../classes/fs.dirent.md)[]\>

Asynchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

`Promise`<[`Dirent`](../classes/fs.dirent.md)[]\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:336

___

### readlink

▸ **readlink**(`path`, `options?`): `Promise`<`string`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:343

▸ **readlink**(`path`, `options`): `Promise`<`Buffer`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](fs.md#bufferencodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:350

▸ **readlink**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `string` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:357

___

### realpath

▸ **realpath**(`path`, `options?`): `Promise`<`string`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:467

▸ **realpath**(`path`, `options`): `Promise`<`Buffer`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](fs.md#bufferencodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:474

▸ **realpath**(`path`, `options?`): `Promise`<`string` \| `Buffer`\>

Asynchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Promise`<`string` \| `Buffer`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:481

___

### rename

▸ **rename**(`oldPath`, `newPath`): `Promise`<`void`\>

Asynchronous rename(2) - Change the name or location of a file or directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `newPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:247

___

### rm

▸ **rm**(`path`, `options?`): `Promise`<`void`\>

Asynchronously removes files and directories (modeled on the standard POSIX `rm` utility).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | [`RmOptions`](../interfaces/fs.rmoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:272

___

### rmdir

▸ **rmdir**(`path`, `options?`): `Promise`<`void`\>

Asynchronous rmdir(2) - delete a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`RmDirOptions`](../interfaces/fs.rmdiroptions.md) | - |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:267

___

### stat

▸ **stat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.stats.md)\>

Asynchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `opts?` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:380

▸ **stat**(`path`, `opts`): `Promise`<[`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `opts` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint`: ``true``  } |

#### Returns

`Promise`<[`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:381

▸ **stat**(`path`, `opts?`): `Promise`<[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `opts?` | [`StatOptions`](../interfaces/fs.statoptions.md) |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:382

___

### symlink

▸ **symlink**(`target`, `path`, `type?`): `Promise`<`void`\>

Asynchronous symlink(2) - Create a new symbolic link to an existing file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`PathLike`](fs.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
| `path` | [`PathLike`](fs.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
| `type?` | `string` \| ``null`` | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:366

___

### truncate

▸ **truncate**(`path`, `len?`): `Promise`<`void`\>

Asynchronous truncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `len?` | `number` | If not specified, defaults to `0`. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:254

___

### unlink

▸ **unlink**(`path`): `Promise`<`void`\>

Asynchronous unlink(2) - delete a name and possibly the file it refers to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:395

___

### utimes

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

Asynchronously change file timestamps of the file referenced by the supplied path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:452

___

### write

▸ **write**<`TBuffer`\>(`handle`, `buffer`, `offset?`, `length?`, `position?`): `Promise`<`Object`\>

Asynchronously writes `buffer` to the file referenced by the supplied `FileHandle`.
It is unsafe to call `fsPromises.write()` multiple times on the same file without waiting for the `Promise`
to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends `Uint8Array`<`TBuffer`\> |

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `buffer` | `TBuffer` | The buffer that the data will be written to. |
| `offset?` | `number` \| ``null`` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `length?` | `number` \| ``null`` | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
| `position?` | `number` \| ``null`` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:223

▸ **write**(`handle`, `string`, `position?`, `encoding?`): `Promise`<`Object`\>

Asynchronously writes `string` to the file referenced by the supplied `FileHandle`.
It is unsafe to call `fsPromises.write()` multiple times on the same file without waiting for the `Promise`
to be resolved (or rejected). For this scenario, `fs.createWriteStream` is strongly recommended.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `handle` | [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A `FileHandle`. |
| `string` | `string` | A string to write. |
| `position?` | `number` \| ``null`` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | `BufferEncoding` \| ``null`` | The expected string encoding. |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:238

___

### writeFile

▸ **writeFile**(`path`, `data`, `options?`): `Promise`<`void`\>

Asynchronously writes data to a file, replacing the file if it already exists.
It is unsafe to call `fsPromises.writeFile()` multiple times on the same file without waiting for the `Promise` to be resolved (or rejected).

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| [`FileHandle`](../interfaces/fs.promises.filehandle.md) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a `FileHandle` is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a `Buffer` or `Uint8Array` is provided, the value is coerced to a string. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `flag?`: [`OpenMode`](fs.md#openmode) ; `mode?`: `Mode`  } \| `BufferEncoding` \| ``null`` | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs/promises.d.ts:517
