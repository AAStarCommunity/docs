```ts
function getSuperPaymasterMiddleware(config): object;
```

Defined in: [SuperPaymaster/index.ts:19](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/paymaster/src/SuperPaymaster/index.ts#L19)

Constructs the middleware for SuperPaymaster.
Returns the `paymasterAndData` hex string.

## Parameters

| Parameter | Type |
| ------ | ------ |
| `config` | [`PaymasterConfig`](../type-aliases/PaymasterConfig.md) |

## Returns

`object`

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `sponsorUserOperation()` | (`args`) => `Promise`\<\{ `paymasterAndData`: `` `0x${string}` ``; `preVerificationGas`: `any`; `verificationGasLimit`: `bigint`; \}\> | [SuperPaymaster/index.ts:21](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/paymaster/src/SuperPaymaster/index.ts#L21) |
