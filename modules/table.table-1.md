[@listenai/lisa_core](../README.md) / [Exports](../modules.md) / [Table](table.md) / table

# Namespace: table

[Table](table.md).table

## Table of contents

### Interfaces

- [Column](../interfaces/table.table-1.column.md)
- [Options](../interfaces/table.table-1.options.md)

### Type aliases

- [Columns](table.table-1.md#columns)

### Variables

- [Flags](table.table-1.md#flags)

### Functions

- [flags](table.table-1.md#flags)

## Type aliases

### Columns

Ƭ **Columns**<`T`\>: `Object`

#### Type parameters

| Name | Type |
| :------ | :------ |
| `T` | extends `object` |

#### Index signature

▪ [key: `string`]: `Partial`<[`Column`](../interfaces/table.table-1.column.md)<`T`\>\>

#### Defined in

node_modules/cli-ux/lib/styled/table.d.ts:24

## Variables

### Flags

• `Const` **Flags**: `Object`

#### Type declaration

| Name | Type |
| :------ | :------ |
| `columns` | `F.IOptionFlag`<`string` \| `undefined`\> |
| `csv` | `F.IFlag`<`boolean`\> |
| `extended` | `F.IFlag`<`boolean`\> |
| `filter` | `F.IOptionFlag`<`string` \| `undefined`\> |
| `no-header` | `F.IFlag`<`boolean`\> |
| `no-truncate` | `F.IFlag`<`boolean`\> |
| `output` | `F.IOptionFlag`<`string` \| `undefined`\> |
| `sort` | `F.IOptionFlag`<`string` \| `undefined`\> |

#### Defined in

node_modules/cli-ux/lib/styled/table.d.ts:4

## Functions

### flags

▸ **flags**(): `IFlags`

#### Returns

`IFlags`

#### Defined in

node_modules/cli-ux/lib/styled/table.d.ts:17

▸ **flags**<`Z`\>(`opts`): `ExcludeFlags`<`IFlags`, `Z`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `Z` | extends ``"columns"`` \| ``"sort"`` \| ``"filter"`` \| ``"csv"`` \| ``"output"`` \| ``"extended"`` \| ``"no-truncate"`` \| ``"no-header"````"columns"`` \| ``"sort"`` \| ``"filter"`` \| ``"csv"`` \| ``"output"`` \| ``"extended"`` \| ``"no-truncate"`` \| ``"no-header"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.except` | `Z` \| `Z`[] |

#### Returns

`ExcludeFlags`<`IFlags`, `Z`\>

#### Defined in

node_modules/cli-ux/lib/styled/table.d.ts:18

▸ **flags**<`K`\>(`opts`): `IncludeFlags`<`IFlags`, `K`\>

#### Type parameters

| Name | Type |
| :------ | :------ |
| `K` | extends ``"columns"`` \| ``"sort"`` \| ``"filter"`` \| ``"csv"`` \| ``"output"`` \| ``"extended"`` \| ``"no-truncate"`` \| ``"no-header"````"columns"`` \| ``"sort"`` \| ``"filter"`` \| ``"csv"`` \| ``"output"`` \| ``"extended"`` \| ``"no-truncate"`` \| ``"no-header"`` |

#### Parameters

| Name | Type |
| :------ | :------ |
| `opts` | `Object` |
| `opts.only` | `K` \| `K`[] |

#### Returns

`IncludeFlags`<`IFlags`, `K`\>

#### Defined in

node_modules/cli-ux/lib/styled/table.d.ts:21
