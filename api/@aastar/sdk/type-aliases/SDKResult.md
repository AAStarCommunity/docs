```ts
type SDKResult<T> = 
  | {
  data: T;
  success: true;
}
  | {
  error: AAStarError;
  success: false;
};
```

Defined in: [packages/sdk/src/types/result.ts:3](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/sdk/src/types/result.ts#L3)

## Type Parameters

| Type Parameter |
| ------ |
| `T` |
