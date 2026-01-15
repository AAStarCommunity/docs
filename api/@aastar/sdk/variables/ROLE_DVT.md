```ts
const ROLE_DVT: Hash;
```

Defined in: [packages/core/src/roles.ts:81](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/roles.ts#L81)

DVT Role (Distributed Validator Technology)

## Remarks

- **Description**: DVT node operator for consensus validation
- **Permission**: Infrastructure operator
- **Requirement**: minStake: 30 GT, entryBurn: 3 GT (line 94)
- **Exit Fee**: 10% (1000 basis points), min 1 GT
- **Lock Duration**: 30 days
- **Source**: Registry.sol line 36: ROLE_DVT = keccak256("DVT")
