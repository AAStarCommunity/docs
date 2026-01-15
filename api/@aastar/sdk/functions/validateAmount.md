```ts
function validateAmount(
   amount, 
   fieldName, 
   min, 
   max?): bigint;
```

Defined in: [packages/core/src/utils/validation.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/utils/validation.ts#L31)

Validates a BigInt amount.

## Parameters

| Parameter | Type | Default value | Description |
| ------ | ------ | ------ | ------ |
| `amount` | `bigint` | `undefined` | The value to check |
| `fieldName` | `string` | `'Amount'` | Name for error messages |
| `min` | `bigint` | `0n` | Minimum value (default 0n) |
| `max?` | `bigint` | `undefined` | Maximum value (optional) |

## Returns

`bigint`
