```ts
function getSimpleAccountFactory(network): string;
```

Defined in: [packages/core/src/contracts.ts:263](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/contracts.ts#L263)

Get SimpleAccountFactory address

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"sepolia"` | Network name |

## Returns

`string`

SimpleAccountFactory address

## Example

```ts
const factory = getSimpleAccountFactory('sepolia');
```
