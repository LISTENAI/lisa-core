[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](../modules/fs.md) / RmOptions

# Interface: RmOptions

[fs](../modules/fs.md).RmOptions

## Table of contents

### Properties

- [force](fs.rmoptions.md#force)
- [maxRetries](fs.rmoptions.md#maxretries)
- [recursive](fs.rmoptions.md#recursive)
- [retryDelay](fs.rmoptions.md#retrydelay)

## Properties

### force

• `Optional` **force**: `boolean`

When `true`, exceptions will be ignored if `path` does not exist.

**`default`** false

#### Defined in

node_modules/@types/node/fs.d.ts:931

___

### maxRetries

• `Optional` **maxRetries**: `number`

If an `EBUSY`, `EMFILE`, `ENFILE`, `ENOTEMPTY`, or
`EPERM` error is encountered, Node.js will retry the operation with a linear
backoff wait of `retryDelay` ms longer on each try. This option represents the
number of retries. This option is ignored if the `recursive` option is not
`true`.

**`default`** 0

#### Defined in

node_modules/@types/node/fs.d.ts:940

___

### recursive

• `Optional` **recursive**: `boolean`

If `true`, perform a recursive directory removal. In
recursive mode, errors are not reported if `path` does not exist, and
operations are retried on failure.

**`default`** false

#### Defined in

node_modules/@types/node/fs.d.ts:947

___

### retryDelay

• `Optional` **retryDelay**: `number`

The amount of time in milliseconds to wait between retries.
This option is ignored if the `recursive` option is not `true`.

**`default`** 100

#### Defined in

node_modules/@types/node/fs.d.ts:953
