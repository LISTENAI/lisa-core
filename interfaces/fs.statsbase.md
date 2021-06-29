[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / StatsBase

# Interface: StatsBase<T\>

[fs](../modules/fs.md).StatsBase

## Type parameters

| Name |
| :------ |
| `T` |

## Hierarchy

- **`StatsBase`**

  ↳ [`Stats`](../classes/fs.stats.md)

  ↳ [`BigIntStats`](../classes/fs.bigintstats.md)

## Table of contents

### Properties

- [atime](fs.statsbase.md#atime)
- [atimeMs](fs.statsbase.md#atimems)
- [birthtime](fs.statsbase.md#birthtime)
- [birthtimeMs](fs.statsbase.md#birthtimems)
- [blksize](fs.statsbase.md#blksize)
- [blocks](fs.statsbase.md#blocks)
- [ctime](fs.statsbase.md#ctime)
- [ctimeMs](fs.statsbase.md#ctimems)
- [dev](fs.statsbase.md#dev)
- [gid](fs.statsbase.md#gid)
- [ino](fs.statsbase.md#ino)
- [mode](fs.statsbase.md#mode)
- [mtime](fs.statsbase.md#mtime)
- [mtimeMs](fs.statsbase.md#mtimems)
- [nlink](fs.statsbase.md#nlink)
- [rdev](fs.statsbase.md#rdev)
- [size](fs.statsbase.md#size)
- [uid](fs.statsbase.md#uid)

### Methods

- [isBlockDevice](fs.statsbase.md#isblockdevice)
- [isCharacterDevice](fs.statsbase.md#ischaracterdevice)
- [isDirectory](fs.statsbase.md#isdirectory)
- [isFIFO](fs.statsbase.md#isfifo)
- [isFile](fs.statsbase.md#isfile)
- [isSocket](fs.statsbase.md#issocket)
- [isSymbolicLink](fs.statsbase.md#issymboliclink)

## Properties

### atime

• **atime**: `Date`

#### Defined in

node_modules/@types/node/fs.d.ts:52

___

### atimeMs

• **atimeMs**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:48

___

### birthtime

• **birthtime**: `Date`

#### Defined in

node_modules/@types/node/fs.d.ts:55

___

### birthtimeMs

• **birthtimeMs**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:51

___

### blksize

• **blksize**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:46

___

### blocks

• **blocks**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:47

___

### ctime

• **ctime**: `Date`

#### Defined in

node_modules/@types/node/fs.d.ts:54

___

### ctimeMs

• **ctimeMs**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:50

___

### dev

• **dev**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:38

___

### gid

• **gid**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:43

___

### ino

• **ino**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:39

___

### mode

• **mode**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:40

___

### mtime

• **mtime**: `Date`

#### Defined in

node_modules/@types/node/fs.d.ts:53

___

### mtimeMs

• **mtimeMs**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:49

___

### nlink

• **nlink**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:41

___

### rdev

• **rdev**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:44

___

### size

• **size**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:45

___

### uid

• **uid**: `T`

#### Defined in

node_modules/@types/node/fs.d.ts:42

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:32

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:33

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:31

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:35

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:30

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:36

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Defined in

node_modules/@types/node/fs.d.ts:34
