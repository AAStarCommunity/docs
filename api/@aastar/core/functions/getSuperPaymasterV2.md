```ts
function getSuperPaymasterV2(network): string;
```

Defined in: [packages/core/src/contracts.ts:278](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/contracts.ts#L278)

Get SuperPaymaster V2 address (AOA+ mode)

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"sepolia"` | Network name |

## Returns

`string`

SuperPaymaster V2 address

## Example

```ts
const superPaymaster = getSuperPaymasterV2('sepolia');
```
