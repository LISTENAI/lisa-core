[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / fs

# Namespace: fs

## Table of contents

### Namespaces

- [constants](fs.constants.md)
- [exists](fs.exists.md)
- [lchmod](fs.lchmod.md)
- [lutimes](fs.lutimes.md)
- [promises](fs.promises.md)
- [readv](fs.readv.md)
- [realpathSync](fs.realpathsync.md)
- [rm](fs.rm.md)

### Classes

- [BigIntStats](../classes/fs.bigintstats.md)
- [Dir](../classes/fs.dir.md)
- [Dirent](../classes/fs.dirent.md)
- [Project](../classes/fs.project.md)
- [ReadStream](../classes/fs.readstream.md)
- [Stats](../classes/fs.stats.md)
- [WriteStream](../classes/fs.writestream.md)

### Interfaces

- [BaseEncodingOptions](../interfaces/fs.baseencodingoptions.md)
- [BigIntOptions](../interfaces/fs.bigintoptions.md)
- [CopyOptions](../interfaces/fs.copyoptions.md)
- [CopyOptionsSync](../interfaces/fs.copyoptionssync.md)
- [EnsureOptions](../interfaces/fs.ensureoptions.md)
- [FSWatcher](../interfaces/fs.fswatcher.md)
- [MakeDirectoryOptions](../interfaces/fs.makedirectoryoptions.md)
- [MoveOptions](../interfaces/fs.moveoptions.md)
- [OpenDirOptions](../interfaces/fs.opendiroptions.md)
- [PathEntry](../interfaces/fs.pathentry.md)
- [PathEntryStream](../interfaces/fs.pathentrystream.md)
- [ReadOptions](../interfaces/fs.readoptions.md)
- [ReadSyncOptions](../interfaces/fs.readsyncoptions.md)
- [ReadVResult](../interfaces/fs.readvresult.md)
- [RmDirOptions](../interfaces/fs.rmdiroptions.md)
- [RmOptions](../interfaces/fs.rmoptions.md)
- [StatOptions](../interfaces/fs.statoptions.md)
- [StatsBase](../interfaces/fs.statsbase.md)
- [WriteFileOptions](../interfaces/fs.writefileoptions.md)
- [WriteOptions](../interfaces/fs.writeoptions.md)
- [WriteVResult](../interfaces/fs.writevresult.md)
- [WritevResult](../interfaces/fs.writevresult-1.md)

### Type aliases

- [ArrayBufferView](fs.md#arraybufferview)
- [BufferEncodingOption](fs.md#bufferencodingoption)
- [CopyFilterAsync](fs.md#copyfilterasync)
- [CopyFilterSync](fs.md#copyfiltersync)
- [Mode](fs.md#mode)
- [NoParamCallback](fs.md#noparamcallback)
- [OpenMode](fs.md#openmode)
- [PathLike](fs.md#pathlike)
- [SymlinkType](fs.md#symlinktype)

### Variables

- [project](fs.md#project)

### Functions

- [access](fs.md#access)
- [accessSync](fs.md#accesssync)
- [appendFile](fs.md#appendfile)
- [appendFileSync](fs.md#appendfilesync)
- [chmod](fs.md#chmod)
- [chmodSync](fs.md#chmodsync)
- [chown](fs.md#chown)
- [chownSync](fs.md#chownsync)
- [close](fs.md#close)
- [closeSync](fs.md#closesync)
- [copy](fs.md#copy)
- [copyFile](fs.md#copyfile)
- [copyFileSync](fs.md#copyfilesync)
- [copySync](fs.md#copysync)
- [createFile](fs.md#createfile)
- [createFileSync](fs.md#createfilesync)
- [createLink](fs.md#createlink)
- [createLinkSync](fs.md#createlinksync)
- [createReadStream](fs.md#createreadstream)
- [createSymlink](fs.md#createsymlink)
- [createSymlinkSync](fs.md#createsymlinksync)
- [createWriteStream](fs.md#createwritestream)
- [emptyDir](fs.md#emptydir)
- [emptyDirSync](fs.md#emptydirsync)
- [emptydir](fs.md#emptydir)
- [emptydirSync](fs.md#emptydirsync)
- [ensureDir](fs.md#ensuredir)
- [ensureDirSync](fs.md#ensuredirsync)
- [ensureFile](fs.md#ensurefile)
- [ensureFileSync](fs.md#ensurefilesync)
- [ensureLink](fs.md#ensurelink)
- [ensureLinkSync](fs.md#ensurelinksync)
- [ensureSymlink](fs.md#ensuresymlink)
- [ensureSymlinkSync](fs.md#ensuresymlinksync)
- [exists](fs.md#exists)
- [existsSync](fs.md#existssync)
- [fchmod](fs.md#fchmod)
- [fchmodSync](fs.md#fchmodsync)
- [fchown](fs.md#fchown)
- [fchownSync](fs.md#fchownsync)
- [fdatasync](fs.md#fdatasync)
- [fdatasyncSync](fs.md#fdatasyncsync)
- [fstat](fs.md#fstat)
- [fstatSync](fs.md#fstatsync)
- [fsync](fs.md#fsync)
- [fsyncSync](fs.md#fsyncsync)
- [ftruncate](fs.md#ftruncate)
- [ftruncateSync](fs.md#ftruncatesync)
- [futimes](fs.md#futimes)
- [futimesSync](fs.md#futimessync)
- [lchmod](fs.md#lchmod)
- [lchmodSync](fs.md#lchmodsync)
- [lchown](fs.md#lchown)
- [lchownSync](fs.md#lchownsync)
- [link](fs.md#link)
- [linkSync](fs.md#linksync)
- [lstat](fs.md#lstat)
- [lstatSync](fs.md#lstatsync)
- [lutimes](fs.md#lutimes)
- [lutimesSync](fs.md#lutimessync)
- [mkdir](fs.md#mkdir)
- [mkdirSync](fs.md#mkdirsync)
- [mkdirp](fs.md#mkdirp)
- [mkdirpSync](fs.md#mkdirpsync)
- [mkdirs](fs.md#mkdirs)
- [mkdirsSync](fs.md#mkdirssync)
- [mkdtemp](fs.md#mkdtemp)
- [mkdtempSync](fs.md#mkdtempsync)
- [move](fs.md#move)
- [moveSync](fs.md#movesync)
- [open](fs.md#open)
- [openSync](fs.md#opensync)
- [opendir](fs.md#opendir)
- [opendirSync](fs.md#opendirsync)
- [outputFile](fs.md#outputfile)
- [outputFileSync](fs.md#outputfilesync)
- [outputJSON](fs.md#outputjson)
- [outputJSONSync](fs.md#outputjsonsync)
- [outputJson](fs.md#outputjson)
- [outputJsonSync](fs.md#outputjsonsync)
- [pathExists](fs.md#pathexists)
- [pathExistsSync](fs.md#pathexistssync)
- [read](fs.md#read)
- [readFile](fs.md#readfile)
- [readFileSync](fs.md#readfilesync)
- [readJSON](fs.md#readjson)
- [readJSONSync](fs.md#readjsonsync)
- [readJson](fs.md#readjson)
- [readJsonSync](fs.md#readjsonsync)
- [readSync](fs.md#readsync)
- [readdir](fs.md#readdir)
- [readdirSync](fs.md#readdirsync)
- [readlink](fs.md#readlink)
- [readlinkSync](fs.md#readlinksync)
- [readv](fs.md#readv)
- [readvSync](fs.md#readvsync)
- [realpath](fs.md#realpath)
- [realpathSync](fs.md#realpathsync)
- [reloadProject](fs.md#reloadproject)
- [remove](fs.md#remove)
- [removeSync](fs.md#removesync)
- [rename](fs.md#rename)
- [renameSync](fs.md#renamesync)
- [rm](fs.md#rm)
- [rmSync](fs.md#rmsync)
- [rmdir](fs.md#rmdir)
- [rmdirSync](fs.md#rmdirsync)
- [stat](fs.md#stat)
- [statSync](fs.md#statsync)
- [symlink](fs.md#symlink)
- [symlinkSync](fs.md#symlinksync)
- [truncate](fs.md#truncate)
- [truncateSync](fs.md#truncatesync)
- [unlink](fs.md#unlink)
- [unlinkSync](fs.md#unlinksync)
- [unwatchFile](fs.md#unwatchfile)
- [utimes](fs.md#utimes)
- [utimesSync](fs.md#utimessync)
- [watch](fs.md#watch)
- [watchFile](fs.md#watchfile)
- [write](fs.md#write)
- [writeFile](fs.md#writefile)
- [writeFileSync](fs.md#writefilesync)
- [writeJSON](fs.md#writejson)
- [writeJSONSync](fs.md#writejsonsync)
- [writeJson](fs.md#writejson)
- [writeJsonSync](fs.md#writejsonsync)
- [writeSync](fs.md#writesync)
- [writev](fs.md#writev)
- [writevSync](fs.md#writevsync)

## Type aliases

### ArrayBufferView

Ƭ **ArrayBufferView**: `NodeJS.TypedArray` \| `DataView`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:310

___

### BufferEncodingOption

Ƭ **BufferEncodingOption**: ``"buffer"`` \| { `encoding`: ``"buffer"``  }

#### Defined in

node_modules/@types/node/fs.d.ts:19

___

### CopyFilterAsync

Ƭ **CopyFilterAsync**: (`src`: `string`, `dest`: `string`) => `Promise`<`boolean`\>

#### Type declaration

▸ (`src`, `dest`): `Promise`<`boolean`\>

##### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

##### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:304

___

### CopyFilterSync

Ƭ **CopyFilterSync**: (`src`: `string`, `dest`: `string`) => `boolean`

#### Type declaration

▸ (`src`, `dest`): `boolean`

##### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

##### Returns

`boolean`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:303

___

### Mode

Ƭ **Mode**: `string` \| `number`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:308

___

### NoParamCallback

Ƭ **NoParamCallback**: (`err`: `NodeJS.ErrnoException` \| ``null``) => `void`

#### Type declaration

▸ (`err`): `void`

##### Parameters

| Name | Type |
| :------ | :------ |
| `err` | `NodeJS.ErrnoException` \| ``null`` |

##### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:17

___

### OpenMode

Ƭ **OpenMode**: `number` \| `string`

#### Defined in

node_modules/@types/node/fs.d.ts:25

___

### PathLike

Ƭ **PathLike**: `string` \| `Buffer` \| `URL`

Valid types for path values in "fs".

#### Defined in

node_modules/@types/node/fs.d.ts:15

___

### SymlinkType

Ƭ **SymlinkType**: ``"dir"`` \| ``"file"`` \| ``"junction"``

#### Defined in

node_modules/@types/fs-extra/index.d.ts:306

## Variables

### project

• **project**: [`Project`](../classes/fs.project.md)

项目主路径，默认为命令行运行的当前的目录

#### Defined in

[src/fs/index.ts:22](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/index.ts#L22)

## Functions

### access

▸ **access**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:126

▸ **access**(`path`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `mode` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:127

▸ **access**(`path`, `mode?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `mode?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:128

___

### accessSync

▸ **accessSync**(`path`, `mode?`): `void`

Synchronously tests a user's permissions for the file specified by path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `mode?` | `number` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2056

___

### appendFile

▸ **appendFile**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `data` | `any` |
| `options` | `Object` |
| `options.encoding?` | `string` |
| `options.flag?` | `string` |
| `options.mode?` | `number` \| `string` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:130

▸ **appendFile**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `data` | `any` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:132

▸ **appendFile**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `data` | `any` |
| `options?` | `Object` |
| `options.encoding?` | `string` |
| `options.flag?` | `string` |
| `options.mode?` | `number` \| `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:133

___

### appendFileSync

▸ **appendFileSync**(`file`, `data`, `options?`): `void`

Synchronously append data to a file, creating the file if it does not exist.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `Uint8Array` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `options?` | `WriteFileOptions` | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'a'` is used. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1767

___

### chmod

▸ **chmod**(`path`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `mode` | [`Mode`](fs.md#mode) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:135

▸ **chmod**(`path`, `mode`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `mode` | [`Mode`](fs.md#mode) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:136

___

### chmodSync

▸ **chmodSync**(`path`, `mode`): `void`

Synchronous chmod(2) - Change permissions of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:489

___

### chown

▸ **chown**(`path`, `uid`, `gid`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:138

▸ **chown**(`path`, `uid`, `gid`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:139

___

### chownSync

▸ **chownSync**(`path`, `uid`, `gid`): `void`

Synchronous chown(2) - Change ownership of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:390

___

### close

▸ **close**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:141

▸ **close**(`fd`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:142

___

### closeSync

▸ **closeSync**(`fd`): `void`

Synchronous close(2) - close a file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1262

___

### copy

▸ **copy**(`src`, `dest`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | [`CopyOptions`](../interfaces/fs.copyoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:23

▸ **copy**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:24

▸ **copy**(`src`, `dest`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options` | [`CopyOptions`](../interfaces/fs.copyoptions.md) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:25

___

### copyFile

▸ **copyFile**(`src`, `dest`, `flags?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `flags?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:28

▸ **copyFile**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:29

▸ **copyFile**(`src`, `dest`, `flags`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `flags` | `number` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:30

___

### copyFileSync

▸ **copyFileSync**(`src`, `dest`, `flags?`): `void`

Synchronously copies src to dest. By default, dest is overwritten if it already exists.
Node.js makes no guarantees about the atomicity of the copy operation.
If an error occurs after the destination file has been opened for writing, Node.js will attempt
to remove the destination.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `src` | [`PathLike`](fs.md#pathlike) | A path to the source file. |
| `dest` | [`PathLike`](fs.md#pathlike) | A path to the destination file. |
| `flags?` | `number` | An optional integer that specifies the behavior of the copy operation. The only supported flag is fs.constants.COPYFILE_EXCL, which causes the copy operation to fail if dest already exists. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2164

___

### copySync

▸ **copySync**(`src`, `dest`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | [`CopyOptionsSync`](../interfaces/fs.copyoptionssync.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:26

___

### createFile

▸ **createFile**(`file`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:37

▸ **createFile**(`file`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:38

___

### createFileSync

▸ **createFileSync**(`file`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:39

___

### createLink

▸ `Const` **createLink**(`src`, `dest`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:102

▸ `Const` **createLink**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:102

___

### createLinkSync

▸ `Const` **createLinkSync**(`src`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:105

___

### createReadStream

▸ **createReadStream**(`path`, `options?`): [`ReadStream`](../classes/fs.readstream.md)

Returns a new `ReadStream` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `options?` | `string` \| { `autoClose?`: `boolean` ; `emitClose?`: `boolean` ; `encoding?`: `BufferEncoding` ; `end?`: `number` ; `fd?`: `number` ; `flags?`: `string` ; `highWaterMark?`: `number` ; `mode?`: `number` ; `start?`: `number`  } | - |

#### Returns

[`ReadStream`](../classes/fs.readstream.md)

#### Defined in

node_modules/@types/node/fs.d.ts:2063

___

### createSymlink

▸ **createSymlink**(`src`, `dest`, `type`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type` | [`SymlinkType`](fs.md#symlinktype) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:41

▸ **createSymlink**(`src`, `dest`, `type`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type` | [`SymlinkType`](fs.md#symlinktype) |
| `callback?` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:42

___

### createSymlinkSync

▸ **createSymlinkSync**(`src`, `dest`, `type`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type` | [`SymlinkType`](fs.md#symlinktype) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:43

___

### createWriteStream

▸ **createWriteStream**(`path`, `options?`): [`WriteStream`](../classes/fs.writestream.md)

Returns a new `WriteStream` object.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `options?` | `string` \| { `autoClose?`: `boolean` ; `emitClose?`: `boolean` ; `encoding?`: `BufferEncoding` ; `fd?`: `number` ; `flags?`: `string` ; `highWaterMark?`: `number` ; `mode?`: `number` ; `start?`: `number`  } | - |

#### Returns

[`WriteStream`](../classes/fs.writestream.md)

#### Defined in

node_modules/@types/node/fs.d.ts:2083

___

### emptyDir

▸ **emptyDir**(`path`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:112

▸ **emptyDir**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:113

___

### emptyDirSync

▸ **emptyDirSync**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:116

___

### emptydir

▸ `Const` **emptydir**(`path`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:114

▸ `Const` **emptydir**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:114

___

### emptydirSync

▸ `Const` **emptydirSync**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:117

___

### ensureDir

▸ **ensureDir**(`path`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`EnsureOptions`](../interfaces/fs.ensureoptions.md) \| `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:45

▸ **ensureDir**(`path`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback?` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:46

▸ **ensureDir**(`path`, `options?`, `callback?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`EnsureOptions`](../interfaces/fs.ensureoptions.md) \| `number` |
| `callback?` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:47

___

### ensureDirSync

▸ **ensureDirSync**(`path`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`EnsureOptions`](../interfaces/fs.ensureoptions.md) \| `number` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:48

___

### ensureFile

▸ **ensureFile**(`path`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:95

▸ **ensureFile**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:96

___

### ensureFileSync

▸ **ensureFileSync**(`path`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:97

___

### ensureLink

▸ **ensureLink**(`src`, `dest`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:99

▸ **ensureLink**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:100

___

### ensureLinkSync

▸ **ensureLinkSync**(`src`, `dest`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:103

___

### ensureSymlink

▸ **ensureSymlink**(`src`, `dest`, `type?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type?` | [`SymlinkType`](fs.md#symlinktype) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:107

▸ **ensureSymlink**(`src`, `dest`, `type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type` | [`SymlinkType`](fs.md#symlinktype) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:108

▸ **ensureSymlink**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:109

___

### ensureSymlinkSync

▸ **ensureSymlinkSync**(`src`, `dest`, `type?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `type?` | [`SymlinkType`](fs.md#symlinktype) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:110

___

### exists

▸ **exists**(`path`, `callback`): `void`

Asynchronously tests whether or not the given path exists by checking with the file system.

**`deprecated`** since v1.0.0 Use `fs.stat()` or `fs.access()` instead

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `callback` | (`exists`: `boolean`) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1846

___

### existsSync

▸ **existsSync**(`path`): `boolean`

Synchronously tests whether or not the given path exists by checking with the file system.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:1862

___

### fchmod

▸ **fchmod**(`fd`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `mode` | [`Mode`](fs.md#mode) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:144

▸ **fchmod**(`fd`, `mode`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `mode` | [`Mode`](fs.md#mode) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:145

___

### fchmodSync

▸ **fchmodSync**(`fd`, `mode`): `void`

Synchronous fchmod(2) - Change permissions of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:513

___

### fchown

▸ **fchown**(`fd`, `uid`, `gid`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:147

▸ **fchown**(`fd`, `uid`, `gid`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:148

___

### fchownSync

▸ **fchownSync**(`fd`, `uid`, `gid`): `void`

Synchronous fchown(2) - Change ownership of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:411

___

### fdatasync

▸ **fdatasync**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | () => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:150

▸ **fdatasync**(`fd`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:151

___

### fdatasyncSync

▸ **fdatasyncSync**(`fd`): `void`

Synchronous fdatasync(2) - synchronize a file's in-core state with storage device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2113

___

### fstat

▸ **fstat**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `stats`: [`Stats`](../classes/fs.stats.md)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:153

▸ **fstat**(`fd`): `Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:154

___

### fstatSync

▸ **fstatSync**(`fd`, `options?`): [`Stats`](../classes/fs.stats.md)

Synchronous fstat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `options?` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs.stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:591

▸ **fstatSync**(`fd`, `options`): [`BigIntStats`](../classes/fs.bigintstats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](../classes/fs.bigintstats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:592

▸ **fstatSync**(`fd`, `options?`): [`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `options?` | [`StatOptions`](../interfaces/fs.statoptions.md) |

#### Returns

[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:593

___

### fsync

▸ **fsync**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:156

▸ **fsync**(`fd`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:157

___

### fsyncSync

▸ **fsyncSync**(`fd`): `void`

Synchronous fsync(2) - synchronize a file's in-core state with the underlying storage device.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1367

___

### ftruncate

▸ **ftruncate**(`fd`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:159

▸ **ftruncate**(`fd`, `len`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `len` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:160

▸ **ftruncate**(`fd`, `len?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `len?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:161

___

### ftruncateSync

▸ **ftruncateSync**(`fd`, `len?`): `void`

Synchronous ftruncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `len?` | `number` \| ``null`` | If not specified, defaults to `0`. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:369

___

### futimes

▸ **futimes**(`fd`, `atime`, `mtime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | `number` |
| `mtime` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:163

▸ **futimes**(`fd`, `atime`, `mtime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | `Date` |
| `mtime` | `Date` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:164

▸ **futimes**(`fd`, `atime`, `mtime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | `number` |
| `mtime` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:165

▸ **futimes**(`fd`, `atime`, `mtime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `atime` | `Date` |
| `mtime` | `Date` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:166

___

### futimesSync

▸ **futimesSync**(`fd`, `atime`, `mtime`): `void`

Synchronously change file timestamps of the file referenced by the supplied file descriptor.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1346

___

### lchmod

▸ **lchmod**(`path`, `mode`, `callback`): `void`

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |
| `callback` | [`NoParamCallback`](fs.md#noparamcallback) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:520

___

### lchmodSync

▸ **lchmodSync**(`path`, `mode`): `void`

Synchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:537

___

### lchown

▸ **lchown**(`path`, `uid`, `gid`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:168

▸ **lchown**(`path`, `uid`, `gid`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `uid` | `number` |
| `gid` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:169

___

### lchownSync

▸ **lchownSync**(`path`, `uid`, `gid`): `void`

Synchronous lchown(2) - Change ownership of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `uid` | `number` | - |
| `gid` | `number` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:432

___

### link

▸ **link**(`existingPath`, `newPath`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](fs.md#pathlike) |
| `newPath` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:171

▸ **link**(`existingPath`, `newPath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `existingPath` | [`PathLike`](fs.md#pathlike) |
| `newPath` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:172

___

### linkSync

▸ **linkSync**(`existingPath`, `newPath`): `void`

Synchronous link(2) - Create a new link (also known as a hard link) to an existing file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `existingPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `newPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:645

___

### lstat

▸ **lstat**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`, `stats`: [`Stats`](../classes/fs.stats.md)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:174

▸ **lstat**(`path`): `Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:175

___

### lstatSync

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs.stats.md)

Synchronous lstat(2) - Get file status. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs.stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:619

▸ **lstatSync**(`path`, `options`): [`BigIntStats`](../classes/fs.bigintstats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](../classes/fs.bigintstats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:620

▸ **lstatSync**(`path`, `options?`): [`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | [`StatOptions`](../interfaces/fs.statoptions.md) |

#### Returns

[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:621

___

### lutimes

▸ **lutimes**(`path`, `atime`, `mtime`, `callback`): `void`

Changes the access and modification times of a file in the same way as `fs.utimes()`,
with the difference that if the path refers to a symbolic link, then the link is not
dereferenced: instead, the timestamps of the symbolic link itself are changed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |
| `callback` | [`NoParamCallback`](fs.md#noparamcallback) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:442

___

### lutimesSync

▸ **lutimesSync**(`path`, `atime`, `mtime`): `void`

Change the file system timestamps of the symbolic link referenced by `path`. Returns `undefined`,
or throws an exception when parameters are incorrect or the operation fails.
This is the synchronous version of `fs.lutimes()`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:465

___

### mkdir

▸ **mkdir**(`path`, `callback`): `void`

Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | - |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:182

▸ **mkdir**(`path`, `options`, `callback`): `void`

Asynchronous mkdir - creates the directory specified in {path}.  Parameter {mode} defaults to 0777.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | - |
| `options` | [`Mode`](fs.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs.makedirectoryoptions.md) \| ``null`` | - |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:188

▸ **mkdir**(`path`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | [`Mode`](fs.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs.makedirectoryoptions.md) \| ``null`` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:189

___

### mkdirSync

▸ **mkdirSync**(`path`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | [`Mode`](fs.md#mode) \| [`MakeDirectoryOptions`](../interfaces/fs.makedirectoryoptions.md) \| ``null`` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:190

___

### mkdirp

▸ **mkdirp**(`dir`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:52

▸ **mkdirp**(`dir`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:53

___

### mkdirpSync

▸ **mkdirpSync**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:55

___

### mkdirs

▸ **mkdirs**(`dir`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:50

▸ **mkdirs**(`dir`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:51

___

### mkdirsSync

▸ **mkdirsSync**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:54

___

### mkdtemp

▸ **mkdtemp**(`prefix`): `Promise`<`string`\>

Asynchronous mkdtemp - Creates a unique temporary directory. Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:291

▸ **mkdtemp**(`prefix`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `prefix` | `string` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `folder`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:292

___

### mkdtempSync

▸ **mkdtempSync**(`prefix`, `options?`): `string`

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`

#### Defined in

node_modules/@types/node/fs.d.ts:1126

▸ **mkdtempSync**(`prefix`, `options`): `Buffer`

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options` | [`BufferEncodingOption`](fs.md#bufferencodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1133

▸ **mkdtempSync**(`prefix`, `options?`): `string` \| `Buffer`

Synchronously creates a unique temporary directory.
Generates six random characters to be appended behind a required prefix to create a unique temporary directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `prefix` | `string` | - |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `string` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1140

___

### move

▸ **move**(`src`, `dest`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | [`MoveOptions`](../interfaces/fs.moveoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:32

▸ **move**(`src`, `dest`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:33

▸ **move**(`src`, `dest`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options` | [`MoveOptions`](../interfaces/fs.moveoptions.md) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:34

___

### moveSync

▸ **moveSync**(`src`, `dest`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `src` | `string` |
| `dest` | `string` |
| `options?` | [`MoveOptions`](../interfaces/fs.moveoptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:35

___

### open

▸ **open**(`path`, `flags`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `flags` | `string` \| `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `fd`: `number`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:192

▸ **open**(`path`, `flags`, `mode`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `flags` | `string` \| `number` |
| `mode` | [`Mode`](fs.md#mode) |
| `callback` | (`err`: `NodeJS.ErrnoException`, `fd`: `number`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:193

▸ **open**(`path`, `flags`, `mode?`): `Promise`<`number`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `flags` | `string` \| `number` |
| `mode?` | [`Mode`](fs.md#mode) \| ``null`` |

#### Returns

`Promise`<`number`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:194

___

### openSync

▸ **openSync**(`path`, `flags`, `mode?`): `number`

Synchronous open(2) - open and possibly create a file, returning a file descriptor..

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `flags` | [`OpenMode`](fs.md#openmode) | - |
| `mode?` | `Mode` \| ``null`` | A file mode. If a string is passed, it is parsed as an octal integer. If not supplied, defaults to `0o666`. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:1292

___

### opendir

▸ **opendir**(`path`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `cb` | (`err`: `NodeJS.ErrnoException` \| ``null``, `dir`: [`Dir`](../classes/fs.dir.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:196

▸ **opendir**(`path`, `options`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options` | [`OpenDirOptions`](../interfaces/fs.opendiroptions.md) |
| `cb` | (`err`: `NodeJS.ErrnoException` \| ``null``, `dir`: [`Dir`](../classes/fs.dir.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:197

▸ **opendir**(`path`, `options?`): `Promise`<[`Dir`](../classes/fs.dir.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`OpenDirOptions`](../interfaces/fs.opendiroptions.md) |

#### Returns

`Promise`<[`Dir`](../classes/fs.dir.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:202

___

### opendirSync

▸ **opendirSync**(`path`, `options?`): [`Dir`](../classes/fs.dir.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `options?` | [`OpenDirOptions`](../interfaces/fs.opendiroptions.md) |

#### Returns

[`Dir`](../classes/fs.dir.md)

#### Defined in

node_modules/@types/node/fs.d.ts:2236

___

### outputFile

▸ **outputFile**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`WriteFileOptions`](../interfaces/fs.writefileoptions.md) \| `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:57

▸ **outputFile**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:58

▸ **outputFile**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options` | [`WriteFileOptions`](../interfaces/fs.writefileoptions.md) \| `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:59

___

### outputFileSync

▸ **outputFileSync**(`file`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`WriteFileOptions`](../interfaces/fs.writefileoptions.md) \| `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:60

___

### outputJSON

▸ **outputJSON**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:76

▸ **outputJSON**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:77

▸ **outputJSON**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:78

___

### outputJSONSync

▸ **outputJSONSync**(`file`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:83

___

### outputJson

▸ **outputJson**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:79

▸ **outputJson**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:80

▸ **outputJson**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:81

___

### outputJsonSync

▸ **outputJsonSync**(`file`, `data`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `data` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:82

___

### pathExists

▸ **pathExists**(`path`): `Promise`<`boolean`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`Promise`<`boolean`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:119

▸ **pathExists**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |
| `callback` | (`err`: `Error`, `exists`: `boolean`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:120

___

### pathExistsSync

▸ **pathExistsSync**(`path`): `boolean`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | `string` |

#### Returns

`boolean`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:121

___

### read

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](fs.md#arraybufferview) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `position` | `number` \| ``null`` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `bytesRead`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:204

▸ **read**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`): `Promise`<`Object`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](fs.md#arraybufferview) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `position` | `number` \| ``null`` |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:206

___

### readFile

▸ **readFile**(`file`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `data`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:208

▸ **readFile**(`file`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `encoding` | `string` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `data`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:209

▸ **readFile**(`file`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `options` | { `flag?`: `string`  } \| { `encoding`: `string` ; `flag?`: `string`  } |
| `callback` | (`err`: `NodeJS.ErrnoException`, `data`: `Buffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:210

▸ **readFile**(`file`, `options`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `options` | { `flag?`: `string`  } \| { `encoding`: `string` ; `flag?`: `string`  } |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:211

▸ **readFile**(`file`, `encoding`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `encoding` | `string` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:213

▸ **readFile**(`file`): `Promise`<`Buffer`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |

#### Returns

`Promise`<`Buffer`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:214

___

### readFileSync

▸ **readFileSync**(`path`, `options?`): `Buffer`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| `number` | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | { `encoding?`: ``null`` ; `flag?`: `string`  } \| ``null`` | An object that may contain an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1637

▸ **readFileSync**(`path`, `options`): `string`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| `number` | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options` | { `encoding`: `BufferEncoding` ; `flag?`: `string`  } \| `BufferEncoding` | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string`

#### Defined in

node_modules/@types/node/fs.d.ts:1647

▸ **readFileSync**(`path`, `options?`): `string` \| `Buffer`

Synchronously reads the entire contents of a file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| `number` | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `flag?`: `string`  } \| `BufferEncoding` \| ``null`` | Either the encoding for the result, or an object that contains the encoding and an optional flag. If a flag is not provided, it defaults to `'r'`. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:1657

___

### readJSON

▸ **readJSON**(`file`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`ReadOptions`](../interfaces/fs.readoptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:65

▸ **readJSON**(`file`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `callback` | (`err`: `Error`, `jsonObject`: `any`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:66

▸ **readJSON**(`file`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ReadOptions`](../interfaces/fs.readoptions.md) |
| `callback` | (`err`: `Error`, `jsonObject`: `any`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:67

___

### readJSONSync

▸ **readJSONSync**(`file`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`ReadOptions`](../interfaces/fs.readoptions.md) |

#### Returns

`any`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:70

___

### readJson

▸ **readJson**(`file`, `options?`): `Promise`<`any`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`ReadOptions`](../interfaces/fs.readoptions.md) |

#### Returns

`Promise`<`any`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:62

▸ **readJson**(`file`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `callback` | (`err`: `Error`, `jsonObject`: `any`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:63

▸ **readJson**(`file`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options` | [`ReadOptions`](../interfaces/fs.readoptions.md) |
| `callback` | (`err`: `Error`, `jsonObject`: `any`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:64

___

### readJsonSync

▸ **readJsonSync**(`file`, `options?`): `any`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `options?` | [`ReadOptions`](../interfaces/fs.readoptions.md) |

#### Returns

`any`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:69

___

### readSync

▸ **readSync**(`fd`, `buffer`, `offset`, `length`, `position`): `number`

Synchronously reads data from the file referenced by the supplied file descriptor, returning the number of bytes read.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `NodeJS.ArrayBufferView` | The buffer that the data will be written to. |
| `offset` | `number` | The offset in the buffer at which to start writing. |
| `length` | `number` | The number of bytes to read. |
| `position` | `number` \| ``null`` | The offset from the beginning of the file from which data should be read. If `null`, data will be read from the current position. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:1550

▸ **readSync**(`fd`, `buffer`, `opts?`): `number`

Similar to the above `fs.readSync` function, this version takes an optional `options` object.
If no `options` object is specified, it will default with the above values.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `NodeJS.ArrayBufferView` |
| `opts?` | [`ReadSyncOptions`](../interfaces/fs.readsyncoptions.md) |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:1556

___

### readdir

▸ **readdir**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`, `files`: `string`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:216

▸ **readdir**(`path`, `options?`): `Promise`<`string`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | { `encoding`: `BufferEncoding` \| ``null`` ; `withFileTypes?`: ``false``  } \| `BufferEncoding` \| ``null`` |

#### Returns

`Promise`<`string`[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:217

▸ **readdir**(`path`, `options`): `Promise`<`Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options` | ``"buffer"`` \| { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } |

#### Returns

`Promise`<`Buffer`[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:218

▸ **readdir**(`path`, `options?`): `Promise`<`string`[] \| `Buffer`[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | `Object` |
| `options.encoding?` | `string` \| ``null`` |
| `options.withFileTypes?` | ``false`` |

#### Returns

`Promise`<`string`[] \| `Buffer`[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:219

▸ **readdir**(`path`, `options`): `Promise`<[`Dirent`](../classes/fs.dirent.md)[]\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options` | `Object` |
| `options.encoding?` | `string` \| ``null`` |
| `options.withFileTypes` | ``true`` |

#### Returns

`Promise`<[`Dirent`](../classes/fs.dirent.md)[]\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:220

___

### readdirSync

▸ **readdirSync**(`path`, `options?`): `string`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | { `encoding`: `BufferEncoding` \| ``null`` ; `withFileTypes?`: ``false``  } \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`[]

#### Defined in

node_modules/@types/node/fs.d.ts:1220

▸ **readdirSync**(`path`, `options`): `Buffer`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | { `encoding`: ``"buffer"`` ; `withFileTypes?`: ``false``  } \| ``"buffer"`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`[]

#### Defined in

node_modules/@types/node/fs.d.ts:1227

▸ **readdirSync**(`path`, `options?`): `string`[] \| `Buffer`[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `withFileTypes?`: ``false``  } \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`[] \| `Buffer`[]

#### Defined in

node_modules/@types/node/fs.d.ts:1234

▸ **readdirSync**(`path`, `options`): [`Dirent`](../classes/fs.dirent.md)[]

Synchronous readdir(3) - read a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) & { `withFileTypes`: ``true``  } | If called with `withFileTypes: true` the result data will be an array of Dirent. |

#### Returns

[`Dirent`](../classes/fs.dirent.md)[]

#### Defined in

node_modules/@types/node/fs.d.ts:1241

___

### readlink

▸ **readlink**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`, `linkString`: `string`) => `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:222

▸ **readlink**(`path`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:223

___

### readlinkSync

▸ **readlinkSync**(`path`, `options?`): `string`

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`

#### Defined in

node_modules/@types/node/fs.d.ts:746

▸ **readlinkSync**(`path`, `options`): `Buffer`

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](fs.md#bufferencodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:753

▸ **readlinkSync**(`path`, `options?`): `string` \| `Buffer`

Synchronous readlink(2) - read value of a symbolic link.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `string` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:760

___

### readv

▸ **readv**(`fd`, `buffers`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ReadonlyArray`<`NodeJS.ArrayBufferView`\> |
| `cb` | (`err`: `NodeJS.ErrnoException` \| ``null``, `bytesRead`: `number`, `buffers`: `NodeJS.ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2199

▸ **readv**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ReadonlyArray`<`NodeJS.ArrayBufferView`\> |
| `position` | `number` |
| `cb` | (`err`: `NodeJS.ErrnoException` \| ``null``, `bytesRead`: `number`, `buffers`: `NodeJS.ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:2204

___

### readvSync

▸ **readvSync**(`fd`, `buffers`, `position?`): `number`

See `readv`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ReadonlyArray`<`NodeJS.ArrayBufferView`\> |
| `position?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:2223

___

### realpath

▸ **realpath**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`, `resolvedPath`: `string`) => `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:225

▸ **realpath**(`path`, `cache`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `cache` | `Object` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `resolvedPath`: `string`) => `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:226

▸ **realpath**(`path`, `cache?`): `Promise`<`string`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `cache?` | `Object` |

#### Returns

`Promise`<`string`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:227

___

### realpathSync

▸ **realpathSync**(`path`, `options?`): `string`

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `BufferEncoding` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string`

#### Defined in

node_modules/@types/node/fs.d.ts:831

▸ **realpathSync**(`path`, `options`): `Buffer`

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options` | [`BufferEncodingOption`](fs.md#bufferencodingoption) | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:838

▸ **realpathSync**(`path`, `options?`): `string` \| `Buffer`

Synchronous realpath(3) - return the canonicalized absolute pathname.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`BaseEncodingOptions`](../interfaces/fs.baseencodingoptions.md) \| `string` \| ``null`` | The encoding (or an object specifying the encoding), used as the encoding of the result. If not provided, `'utf8'` is used. |

#### Returns

`string` \| `Buffer`

#### Defined in

node_modules/@types/node/fs.d.ts:845

___

### reloadProject

▸ **reloadProject**(): `void`

危险，本方法仅允许测试代码中使用

#### Returns

`void`

#### Defined in

[src/fs/index.ts:27](https://github.com/LISTENAI/lisa-core/blob/3afe78b/src/fs/index.ts#L27)

___

### remove

▸ **remove**(`dir`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:72

▸ **remove**(`dir`, `callback?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |
| `callback?` | (`err`: `Error`) => `void` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:73

___

### removeSync

▸ **removeSync**(`dir`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `dir` | `string` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:74

___

### rename

▸ **rename**(`oldPath`, `newPath`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | [`PathLike`](fs.md#pathlike) |
| `newPath` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:229

▸ **rename**(`oldPath`, `newPath`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `oldPath` | [`PathLike`](fs.md#pathlike) |
| `newPath` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:230

___

### renameSync

▸ **renameSync**(`oldPath`, `newPath`): `void`

Synchronous rename(2) - Change the name or location of a file or directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `oldPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `newPath` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:308

___

### rm

▸ **rm**(`path`, `callback`): `void`

Asynchronously removes files and directories (modeled on the standard POSIX `rm` utility).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | [`NoParamCallback`](fs.md#noparamcallback) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:959

▸ **rm**(`path`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options` | [`RmOptions`](../interfaces/fs.rmoptions.md) |
| `callback` | [`NoParamCallback`](fs.md#noparamcallback) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:960

___

### rmSync

▸ **rmSync**(`path`, `options?`): `void`

Synchronously removes files and directories (modeled on the standard POSIX `rm` utility).

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | [`RmOptions`](../interfaces/fs.rmoptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:973

___

### rmdir

▸ **rmdir**(`path`, `callback`): `void`

Asynchronous rmdir - removes the directory specified in {path}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | - |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:237

▸ **rmdir**(`path`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:238

___

### rmdirSync

▸ **rmdirSync**(`path`, `options?`): `void`

Synchronous rmdir(2) - delete a directory.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`RmDirOptions`](../interfaces/fs.rmdiroptions.md) | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:924

___

### stat

▸ **stat**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`, `stats`: [`Stats`](../classes/fs.stats.md)) => `any` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:240

▸ **stat**(`path`): `Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<[`Stats`](../classes/fs.stats.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:241

___

### statSync

▸ **statSync**(`path`, `options?`): [`Stats`](../classes/fs.stats.md)

Synchronous stat(2) - Get file status.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `options?` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint?`: ``false``  } | - |

#### Returns

[`Stats`](../classes/fs.stats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:563

▸ **statSync**(`path`, `options`): [`BigIntStats`](../classes/fs.bigintstats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options` | [`StatOptions`](../interfaces/fs.statoptions.md) & { `bigint`: ``true``  } |

#### Returns

[`BigIntStats`](../classes/fs.bigintstats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:564

▸ **statSync**(`path`, `options?`): [`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `options?` | [`StatOptions`](../interfaces/fs.statoptions.md) |

#### Returns

[`Stats`](../classes/fs.stats.md) \| [`BigIntStats`](../classes/fs.bigintstats.md)

#### Defined in

node_modules/@types/node/fs.d.ts:565

___

### symlink

▸ **symlink**(`target`, `path`, `type`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](fs.md#pathlike) |
| `path` | [`PathLike`](fs.md#pathlike) |
| `type` | [`SymlinkType`](fs.md#symlinktype) \| `undefined` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:243

▸ **symlink**(`target`, `path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](fs.md#pathlike) |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:244

▸ **symlink**(`target`, `path`, `type?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `target` | [`PathLike`](fs.md#pathlike) |
| `path` | [`PathLike`](fs.md#pathlike) |
| `type?` | [`SymlinkType`](fs.md#symlinktype) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:245

___

### symlinkSync

▸ **symlinkSync**(`target`, `path`, `type?`): `void`

Synchronous symlink(2) - Create a new symbolic link to an existing file.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `target` | [`PathLike`](fs.md#pathlike) | A path to an existing file. If a URL is provided, it must use the `file:` protocol. |
| `path` | [`PathLike`](fs.md#pathlike) | A path to the new symlink. If a URL is provided, it must use the `file:` protocol. |
| `type?` | `symlink.Type` \| ``null`` | May be set to `'dir'`, `'file'`, or `'junction'` (default is `'file'`) and is only available on Windows (ignored on other platforms). When using `'junction'`, the `target` argument will automatically be normalized to an absolute path. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:684

___

### truncate

▸ **truncate**(`path`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:247

▸ **truncate**(`path`, `len`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `len` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:248

▸ **truncate**(`path`, `len?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `len?` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:249

___

### truncateSync

▸ **truncateSync**(`path`, `len?`): `void`

Synchronous truncate(2) - Truncate a file to a specified length.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `len?` | `number` \| ``null`` | If not specified, defaults to `0`. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:339

___

### unlink

▸ **unlink**(`path`, `callback`): `void`

Asynchronous unlink - deletes the file specified in {path}

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | - |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` | No arguments other than a possible exception are given to the completion callback. |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:256

▸ **unlink**(`path`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:257

___

### unlinkSync

▸ **unlinkSync**(`path`): `void`

Synchronous unlink(2) - delete a name and possibly the file it refers to.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:872

___

### unwatchFile

▸ **unwatchFile**(`filename`, `listener?`): `void`

Stop watching for changes on `filename`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `listener?` | (`curr`: [`Stats`](../classes/fs.stats.md), `prev`: [`Stats`](../classes/fs.stats.md)) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1786

___

### utimes

▸ **utimes**(`path`, `atime`, `mtime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `atime` | `number` |
| `mtime` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:259

▸ **utimes**(`path`, `atime`, `mtime`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `atime` | `Date` |
| `mtime` | `Date` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:260

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `atime` | `number` |
| `mtime` | `number` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:261

▸ **utimes**(`path`, `atime`, `mtime`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) |
| `atime` | `Date` |
| `mtime` | `Date` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:262

___

### utimesSync

▸ **utimesSync**(`path`, `atime`, `mtime`): `void`

Synchronously change file timestamps of the file referenced by the supplied path.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `atime` | `string` \| `number` \| `Date` | The last access time. If a string is provided, it will be coerced to number. |
| `mtime` | `string` \| `number` \| `Date` | The last modified time. If a string is provided, it will be coerced to number. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1319

___

### watch

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `options` | { `encoding?`: `BufferEncoding` \| ``null`` ; `persistent?`: `boolean` ; `recursive?`: `boolean`  } \| `BufferEncoding` \| `undefined` \| ``null`` | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | (`event`: ``"rename"`` \| ``"change"``, `filename`: `string`) => `void` | - |

#### Returns

[`FSWatcher`](../interfaces/fs.fswatcher.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1797

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `options` | { `encoding`: ``"buffer"`` ; `persistent?`: `boolean` ; `recursive?`: `boolean`  } \| ``"buffer"`` | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | (`event`: ``"rename"`` \| ``"change"``, `filename`: `Buffer`) => `void` | - |

#### Returns

[`FSWatcher`](../interfaces/fs.fswatcher.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1812

▸ **watch**(`filename`, `options`, `listener?`): [`FSWatcher`](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `options` | { `encoding?`: `BufferEncoding` \| ``null`` ; `persistent?`: `boolean` ; `recursive?`: `boolean`  } \| `string` \| ``null`` | Either the encoding for the filename provided to the listener, or an object optionally specifying encoding, persistent, and recursive options. If `encoding` is not supplied, the default of `'utf8'` is used. If `persistent` is not supplied, the default of `true` is used. If `recursive` is not supplied, the default of `false` is used. |
| `listener?` | (`event`: ``"rename"`` \| ``"change"``, `filename`: `string` \| `Buffer`) => `void` | - |

#### Returns

[`FSWatcher`](../interfaces/fs.fswatcher.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1827

▸ **watch**(`filename`, `listener?`): [`FSWatcher`](../interfaces/fs.fswatcher.md)

Watch for changes on `filename`, where `filename` is either a file or a directory, returning an `FSWatcher`.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `listener?` | (`event`: ``"rename"`` \| ``"change"``, `filename`: `string`) => `any` | - |

#### Returns

[`FSWatcher`](../interfaces/fs.fswatcher.md)

#### Defined in

node_modules/@types/node/fs.d.ts:1838

___

### watchFile

▸ **watchFile**(`filename`, `options`, `listener`): `void`

Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.

#### Parameters

| Name | Type |
| :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) |
| `options` | { `interval?`: `number` ; `persistent?`: `boolean`  } \| `undefined` |
| `listener` | (`curr`: [`Stats`](../classes/fs.stats.md), `prev`: [`Stats`](../classes/fs.stats.md)) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1772

▸ **watchFile**(`filename`, `listener`): `void`

Watch for changes on `filename`. The callback `listener` will be called each time the file is accessed.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `filename` | [`PathLike`](fs.md#pathlike) | A path to a file or directory. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. |
| `listener` | (`curr`: [`Stats`](../classes/fs.stats.md), `prev`: [`Stats`](../classes/fs.stats.md)) => `void` | - |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1779

___

### write

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `position`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](fs.md#arraybufferview) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `position` | `number` \| ``null`` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:264

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset`, `length`, `callback`): `void`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](fs.md#arraybufferview) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset` | `number` |
| `length` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `written`: `number`, `buffer`: `TBuffer`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:268

▸ **write**(`fd`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `written`: `number`, `str`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:272

▸ **write**(`fd`, `data`, `offset`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `offset` | `number` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `written`: `number`, `str`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:273

▸ **write**(`fd`, `data`, `offset`, `encoding`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `offset` | `number` |
| `encoding` | `string` |
| `callback` | (`err`: `NodeJS.ErrnoException`, `written`: `number`, `str`: `string`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:274

▸ **write**<`TBuffer`\>(`fd`, `buffer`, `offset?`, `length?`, `position?`): `Promise`<`Object`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `TBuffer` | extends [`ArrayBufferView`](fs.md#arraybufferview) |

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffer` | `TBuffer` |
| `offset?` | `number` |
| `length?` | `number` |
| `position?` | `number` \| ``null`` |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:275

▸ **write**(`fd`, `data`, `offset?`, `encoding?`): `Promise`<`Object`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `data` | `any` |
| `offset?` | `number` |
| `encoding?` | `string` |

#### Returns

`Promise`<`Object`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:276

___

### writeFile

▸ **writeFile**(`file`, `data`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `data` | `any` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:278

▸ **writeFile**(`file`, `data`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `data` | `any` |
| `options?` | [`WriteFileOptions`](../interfaces/fs.writefileoptions.md) \| `string` |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:279

▸ **writeFile**(`file`, `data`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | [`PathLike`](fs.md#pathlike) \| `number` |
| `data` | `any` |
| `options` | [`WriteFileOptions`](../interfaces/fs.writefileoptions.md) \| `string` |
| `callback` | (`err`: `NodeJS.ErrnoException`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:280

___

### writeFileSync

▸ **writeFileSync**(`path`, `data`, `options?`): `void`

Synchronously writes data to a file, replacing the file if it already exists.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) \| `number` | A path to a file. If a URL is provided, it must use the `file:` protocol. URL support is _experimental_. If a file descriptor is provided, the underlying file will _not_ be closed automatically. |
| `data` | `string` \| `NodeJS.ArrayBufferView` | The data to write. If something other than a Buffer or Uint8Array is provided, the value is coerced to a string. |
| `options?` | `WriteFileOptions` | Either the encoding for the file, or an object optionally specifying the encoding, file mode, and flag. If `encoding` is not supplied, the default of `'utf8'` is used. If `mode` is not supplied, the default of `0o666` is used. If `mode` is a string, it is parsed as an octal integer. If `flag` is not supplied, the default of `'w'` is used. |

#### Returns

`void`

#### Defined in

node_modules/@types/node/fs.d.ts:1713

___

### writeJSON

▸ **writeJSON**(`file`, `object`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:85

▸ **writeJSON**(`file`, `object`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:86

▸ **writeJSON**(`file`, `object`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `options` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:87

___

### writeJSONSync

▸ **writeJSONSync**(`file`, `object`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:93

___

### writeJson

▸ **writeJson**(`file`, `object`, `options?`): `Promise`<`void`\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:88

▸ **writeJson**(`file`, `object`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:89

▸ **writeJson**(`file`, `object`, `options`, `callback`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `options` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |
| `callback` | (`err`: `Error`) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:90

___

### writeJsonSync

▸ **writeJsonSync**(`file`, `object`, `options?`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `file` | `string` |
| `object` | `any` |
| `options?` | [`WriteOptions`](../interfaces/fs.writeoptions.md) |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:92

___

### writeSync

▸ **writeSync**(`fd`, `buffer`, `offset?`, `length?`, `position?`): `number`

Synchronously writes `buffer` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `buffer` | `NodeJS.ArrayBufferView` | - |
| `offset?` | `number` \| ``null`` | The part of the buffer to be written. If not supplied, defaults to `0`. |
| `length?` | `number` \| ``null`` | The number of bytes to write. If not supplied, defaults to `buffer.length - offset`. |
| `position?` | `number` \| ``null`` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:1481

▸ **writeSync**(`fd`, `string`, `position?`, `encoding?`): `number`

Synchronously writes `string` to the file referenced by the supplied file descriptor, returning the number of bytes written.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `fd` | `number` | A file descriptor. |
| `string` | `string` | A string to write. |
| `position?` | `number` \| ``null`` | The offset from the beginning of the file where this data should be written. If not supplied, defaults to the current position. |
| `encoding?` | `BufferEncoding` \| ``null`` | The expected string encoding. |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:1490

___

### writev

▸ **writev**(`fd`, `buffers`, `position`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `NodeJS.ArrayBufferView`[] |
| `position` | `number` |
| `cb` | (`err`: `NodeJS.ErrnoException` \| ``null``, `bytesWritten`: `number`, `buffers`: `NodeJS.ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:282

▸ **writev**(`fd`, `buffers`, `cb`): `void`

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `NodeJS.ArrayBufferView`[] |
| `cb` | (`err`: `NodeJS.ErrnoException` \| ``null``, `bytesWritten`: `number`, `buffers`: `NodeJS.ArrayBufferView`[]) => `void` |

#### Returns

`void`

#### Defined in

node_modules/@types/fs-extra/index.d.ts:283

▸ **writev**(`fd`, `buffers`, `position?`): `Promise`<[`WritevResult`](../interfaces/fs.writevresult-1.md)\>

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `NodeJS.ArrayBufferView`[] |
| `position?` | `number` |

#### Returns

`Promise`<[`WritevResult`](../interfaces/fs.writevresult-1.md)\>

#### Defined in

node_modules/@types/fs-extra/index.d.ts:284

___

### writevSync

▸ **writevSync**(`fd`, `buffers`, `position?`): `number`

See `writev`.

#### Parameters

| Name | Type |
| :------ | :------ |
| `fd` | `number` |
| `buffers` | `ReadonlyArray`<`NodeJS.ArrayBufferView`\> |
| `position?` | `number` |

#### Returns

`number`

#### Defined in

node_modules/@types/node/fs.d.ts:2197
