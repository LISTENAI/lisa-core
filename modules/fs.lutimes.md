[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [fs](fs.md) / lutimes

# Namespace: lutimes

[fs](fs.md).lutimes

## Table of contents

### Functions

- [\_\_promisify\_\_](fs.lutimes.md#__promisify__)

## Functions

### \_\_promisify\_\_

▸ **__promisify__**(`path`, `atime`, `mtime`): `Promise`<`void`\>

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

node_modules/@types/node/fs.d.ts:454
