```ts
type EOAWalletClient = WalletClient & object;
```

Defined in: [packages/account/src/eoa.ts:4](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/account/src/eoa.ts#L4)

## Type Declaration

| Name | Type | Defined in |
| ------ | ------ | ------ |
| `getAddress()` | () => `Address` | [packages/account/src/eoa.ts:6](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/account/src/eoa.ts#L6) |
| `sendTransaction()` | (`args`) => `Promise`\<`Hash`\> | [packages/account/src/eoa.ts:5](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/account/src/eoa.ts#L5) |
