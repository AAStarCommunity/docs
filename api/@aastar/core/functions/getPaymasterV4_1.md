```ts
function getPaymasterV4_1(network): string;
```

Defined in: [packages/core/src/contracts.ts:232](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/contracts.ts#L232)

Get PaymasterV4_1 address (AOA mode)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"sepolia"` | Network name |

## Returns

`string`

PaymasterV4_1 address

## Example

```ts
const paymaster = getPaymasterV4_1('sepolia');
```
