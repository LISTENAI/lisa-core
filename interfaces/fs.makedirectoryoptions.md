[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / MakeDirectoryOptions

# Interface: MakeDirectoryOptions

[fs](../modules/fs.md).MakeDirectoryOptions

## Table of contents

### Properties

- [mode](fs.makedirectoryoptions.md#mode)
- [recursive](fs.makedirectoryoptions.md#recursive)

## Properties

### mode

• `Optional` **mode**: `Mode`

A file mode. If a string is passed, it is parsed as an octal integer. If not specified

**`default`** 0o777

#### Defined in

node_modules/@types/node/fs.d.ts:986

___

### recursive

• `Optional` **recursive**: `boolean`

Indicates whether parent folders should be created.
If a folder was created, the path to the first created folder will be returned.

**`default`** false

#### Defined in

node_modules/@types/node/fs.d.ts:981
