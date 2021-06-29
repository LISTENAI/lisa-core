[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / Stats

# Class: Stats

[fs](../modules/fs.md).Stats

## Hierarchy

- [`StatsBase`](../interfaces/fs.statsbase.md)<`number`\>

  ↳ **`Stats`**

## Table of contents

### Constructors

- [constructor](fs.stats.md#constructor)

### Properties

- [atime](fs.stats.md#atime)
- [atimeMs](fs.stats.md#atimems)
- [birthtime](fs.stats.md#birthtime)
- [birthtimeMs](fs.stats.md#birthtimems)
- [blksize](fs.stats.md#blksize)
- [blocks](fs.stats.md#blocks)
- [ctime](fs.stats.md#ctime)
- [ctimeMs](fs.stats.md#ctimems)
- [dev](fs.stats.md#dev)
- [gid](fs.stats.md#gid)
- [ino](fs.stats.md#ino)
- [mode](fs.stats.md#mode)
- [mtime](fs.stats.md#mtime)
- [mtimeMs](fs.stats.md#mtimems)
- [nlink](fs.stats.md#nlink)
- [rdev](fs.stats.md#rdev)
- [size](fs.stats.md#size)
- [uid](fs.stats.md#uid)

### Methods

- [isBlockDevice](fs.stats.md#isblockdevice)
- [isCharacterDevice](fs.stats.md#ischaracterdevice)
- [isDirectory](fs.stats.md#isdirectory)
- [isFIFO](fs.stats.md#isfifo)
- [isFile](fs.stats.md#isfile)
- [isSocket](fs.stats.md#issocket)
- [isSymbolicLink](fs.stats.md#issymboliclink)

## Constructors

### constructor

• **new Stats**()

#### Inherited from

StatsBase<number\>.constructor

## Properties

### atime

• **atime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[atime](../interfaces/fs.statsbase.md#atime)

#### Defined in

node_modules/@types/node/fs.d.ts:52

___

### atimeMs

• **atimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[atimeMs](../interfaces/fs.statsbase.md#atimems)

#### Defined in

node_modules/@types/node/fs.d.ts:48

___

### birthtime

• **birthtime**: `Date`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[birthtime](../interfaces/fs.statsbase.md#birthtime)

#### Defined in

node_modules/@types/node/fs.d.ts:55

___

### birthtimeMs

• **birthtimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[birthtimeMs](../interfaces/fs.statsbase.md#birthtimems)

#### Defined in

node_modules/@types/node/fs.d.ts:51

___

### blksize

• **blksize**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[blksize](../interfaces/fs.statsbase.md#blksize)

#### Defined in

node_modules/@types/node/fs.d.ts:46

___

### blocks

• **blocks**: `number`

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

• **ctimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[ctimeMs](../interfaces/fs.statsbase.md#ctimems)

#### Defined in

node_modules/@types/node/fs.d.ts:50

___

### dev

• **dev**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[dev](../interfaces/fs.statsbase.md#dev)

#### Defined in

node_modules/@types/node/fs.d.ts:38

___

### gid

• **gid**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[gid](../interfaces/fs.statsbase.md#gid)

#### Defined in

node_modules/@types/node/fs.d.ts:43

___

### ino

• **ino**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[ino](../interfaces/fs.statsbase.md#ino)

#### Defined in

node_modules/@types/node/fs.d.ts:39

___

### mode

• **mode**: `number`

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

• **mtimeMs**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[mtimeMs](../interfaces/fs.statsbase.md#mtimems)

#### Defined in

node_modules/@types/node/fs.d.ts:49

___

### nlink

• **nlink**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[nlink](../interfaces/fs.statsbase.md#nlink)

#### Defined in

node_modules/@types/node/fs.d.ts:41

___

### rdev

• **rdev**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[rdev](../interfaces/fs.statsbase.md#rdev)

#### Defined in

node_modules/@types/node/fs.d.ts:44

___

### size

• **size**: `number`

#### Inherited from

[StatsBase](../interfaces/fs.statsbase.md).[size](../interfaces/fs.statsbase.md#size)

#### Defined in

node_modules/@types/node/fs.d.ts:45

___

### uid

• **uid**: `number`

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
