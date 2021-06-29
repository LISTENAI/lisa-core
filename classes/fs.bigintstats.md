[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / BigIntStats

# Class: BigIntStats

[fs](../modules/fs.md).BigIntStats

## Hierarchy

- [`StatsBase`](../interfaces/fs.statsbase.md)<`bigint`\>

  ↳ **`BigIntStats`**

## Table of contents

### Constructors

- [constructor](fs.bigintstats.md#constructor)

### Properties

- [atime](fs.bigintstats.md#atime)
- [atimeMs](fs.bigintstats.md#atimems)
- [atimeNs](fs.bigintstats.md#atimens)
- [birthtime](fs.bigintstats.md#birthtime)
- [birthtimeMs](fs.bigintstats.md#birthtimems)
- [birthtimeNs](fs.bigintstats.md#birthtimens)
- [blksize](fs.bigintstats.md#blksize)
- [blocks](fs.bigintstats.md#blocks)
- [ctime](fs.bigintstats.md#ctime)
- [ctimeMs](fs.bigintstats.md#ctimems)
- [ctimeNs](fs.bigintstats.md#ctimens)
- [dev](fs.bigintstats.md#dev)
- [gid](fs.bigintstats.md#gid)
- [ino](fs.bigintstats.md#ino)
- [mode](fs.bigintstats.md#mode)
- [mtime](fs.bigintstats.md#mtime)
- [mtimeMs](fs.bigintstats.md#mtimems)
- [mtimeNs](fs.bigintstats.md#mtimens)
- [nlink](fs.bigintstats.md#nlink)
- [rdev](fs.bigintstats.md#rdev)
- [size](fs.bigintstats.md#size)
- [uid](fs.bigintstats.md#uid)

### Methods

- [isBlockDevice](fs.bigintstats.md#isblockdevice)
- [isCharacterDevice](fs.bigintstats.md#ischaracterdevice)
- [isDirectory](fs.bigintstats.md#isdirectory)
- [isFIFO](fs.bigintstats.md#isfifo)
- [isFile](fs.bigintstats.md#isfile)
- [isSocket](fs.bigintstats.md#issocket)
- [isSymbolicLink](fs.bigintstats.md#issymboliclink)

## Constructors

### constructor

• **new BigIntStats**()

#### Inherited from

StatsBase<bigint\>.constructor

## Properties

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[atime](../interfaces/fs.statsbase.md#atime)

#### Defined in

node_modules/@types/node/fs.d.ts:52

___

### atimeMs

• **atimeMs**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[atimeMs](../interfaces/fs.statsbase.md#atimems)

#### Defined in

node_modules/@types/node/fs.d.ts:48

___

### atimeNs

• **atimeNs**: `bigint`

#### Defined in

node_modules/@types/node/fs.d.ts:2249

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[birthtime](../interfaces/fs.statsbase.md#birthtime)

#### Defined in

node_modules/@types/node/fs.d.ts:55

___

### birthtimeMs

• **birthtimeMs**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[birthtimeMs](../interfaces/fs.statsbase.md#birthtimems)

#### Defined in

node_modules/@types/node/fs.d.ts:51

___

### birthtimeNs

• **birthtimeNs**: `bigint`

#### Defined in

node_modules/@types/node/fs.d.ts:2252

___

### blksize

• **blksize**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[blksize](../interfaces/fs.statsbase.md#blksize)

#### Defined in

node_modules/@types/node/fs.d.ts:46

___

### blocks

• **blocks**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[blocks](../interfaces/fs.statsbase.md#blocks)

#### Defined in

node_modules/@types/node/fs.d.ts:47

___

### ctime

• **ctime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[ctime](../interfaces/fs.statsbase.md#ctime)

#### Defined in

node_modules/@types/node/fs.d.ts:54

___

### ctimeMs

• **ctimeMs**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[ctimeMs](../interfaces/fs.statsbase.md#ctimems)

#### Defined in

node_modules/@types/node/fs.d.ts:50

___

### ctimeNs

• **ctimeNs**: `bigint`

#### Defined in

node_modules/@types/node/fs.d.ts:2251

___

### dev

• **dev**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[dev](../interfaces/fs.statsbase.md#dev)

#### Defined in

node_modules/@types/node/fs.d.ts:38

___

### gid

• **gid**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[gid](../interfaces/fs.statsbase.md#gid)

#### Defined in

node_modules/@types/node/fs.d.ts:43

___

### ino

• **ino**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[ino](../interfaces/fs.statsbase.md#ino)

#### Defined in

node_modules/@types/node/fs.d.ts:39

___

### mode

• **mode**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[mode](../interfaces/fs.statsbase.md#mode)

#### Defined in

node_modules/@types/node/fs.d.ts:40

___

### mtime

• **mtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[mtime](../interfaces/fs.statsbase.md#mtime)

#### Defined in

node_modules/@types/node/fs.d.ts:53

___

### mtimeMs

• **mtimeMs**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[mtimeMs](../interfaces/fs.statsbase.md#mtimems)

#### Defined in

node_modules/@types/node/fs.d.ts:49

___

### mtimeNs

• **mtimeNs**: `bigint`

#### Defined in

node_modules/@types/node/fs.d.ts:2250

___

### nlink

• **nlink**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[nlink](../interfaces/fs.statsbase.md#nlink)

#### Defined in

node_modules/@types/node/fs.d.ts:41

___

### rdev

• **rdev**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[rdev](../interfaces/fs.statsbase.md#rdev)

#### Defined in

node_modules/@types/node/fs.d.ts:44

___

### size

• **size**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[size](../interfaces/fs.statsbase.md#size)

#### Defined in

node_modules/@types/node/fs.d.ts:45

___

### uid

• **uid**: `bigint`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[uid](../interfaces/fs.statsbase.md#uid)

#### Defined in

node_modules/@types/node/fs.d.ts:42

## Methods

### isBlockDevice

▸ **isBlockDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isBlockDevice](../interfaces/fs.statsbase.md#isblockdevice)

#### Defined in

node_modules/@types/node/fs.d.ts:32

___

### isCharacterDevice

▸ **isCharacterDevice**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isCharacterDevice](../interfaces/fs.statsbase.md#ischaracterdevice)

#### Defined in

node_modules/@types/node/fs.d.ts:33

___

### isDirectory

▸ **isDirectory**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isDirectory](../interfaces/fs.statsbase.md#isdirectory)

#### Defined in

node_modules/@types/node/fs.d.ts:31

___

### isFIFO

▸ **isFIFO**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isFIFO](../interfaces/fs.statsbase.md#isfifo)

#### Defined in

node_modules/@types/node/fs.d.ts:35

___

### isFile

▸ **isFile**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isFile](../interfaces/fs.statsbase.md#isfile)

#### Defined in

node_modules/@types/node/fs.d.ts:30

___

### isSocket

▸ **isSocket**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isSocket](../interfaces/fs.statsbase.md#issocket)

#### Defined in

node_modules/@types/node/fs.d.ts:36

___

### isSymbolicLink

▸ **isSymbolicLink**(): `boolean`

#### Returns

`boolean`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[isSymbolicLink](../interfaces/fs.statsbase.md#issymboliclink)

#### Defined in

node_modules/@types/node/fs.d.ts:34
