[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / RmDirOptions

# Interface: RmDirOptions

[fs](../modules/fs.md).RmDirOptions

## Table of contents

### Properties

- [maxRetries](fs.rmdiroptions.md#maxretries)
- [recursive](fs.rmdiroptions.md#recursive)
- [retryDelay](fs.rmdiroptions.md#retrydelay)

## Properties

### maxRetries

• `Optional` **maxRetries**: `number`

If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
`EPERM` error is encountered, Node.js will retry the operation with a linear
backoff wait of `retryDelay` ms longer on each try. This option represents the
number of retries. This option is ignored if the `recursive` option is not
`true`.

**`default`** 0

#### Defined in

node_modules/@types/node/fs.d.ts:883

___

### recursive

• `Optional` **recursive**: `boolean`

**`deprecated`** since v14.14.0 In future versions of Node.js,
`fs.rmdir(path, { recursive: true })` will throw on nonexistent
paths, or when given a file as a target.
Use `fs.rm(path, { recursive: true, force: true })` instead.

If `true`, perform a recursive directory removal. In
recursive mode, errors are not reported if `path` does not exist, and
operations are retried on failure.

**`default`** false

#### Defined in

node_modules/@types/node/fs.d.ts:895

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`default`** 100

#### Defined in

node_modules/@types/node/fs.d.ts:901
