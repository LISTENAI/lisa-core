[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](fs.md) / lchmod

# Namespace: lchmod

[fs](fs.md).lchmod

## Table of contents

### Functions

- [\_\_promisify\_\_](fs.lchmod.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`path`, `mode`): `Promise`<`void`\>

Asynchronous lchmod(2) - Change permissions of a file. Does not dereference symbolic links.

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `path` | [`PathLike`](fs.md#pathlike) | A path to a file. If a URL is provided, it must use the `file:` protocol. |
| `mode` | `Mode` | A file mode. If a string is passed, it is parsed as an octal integer. |

#### Returns

`Promise`<`void`\>

#### Defined in

node_modules/@types/node/fs.d.ts:529
