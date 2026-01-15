```ts
function getEntryPoint(network): string;
```

Defined in: [packages/core/src/contracts.ts:293](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/contracts.ts#L293)

Get EntryPoint v0.7 address

## Parameters

| Parameter | Type | Description |
| ------ | ------ | ------ |
| `network` | `"sepolia"` | Network name |

## Returns

`string`

EntryPoint address

## Example

```ts
const entryPoint = getEntryPoint('sepolia');
```
