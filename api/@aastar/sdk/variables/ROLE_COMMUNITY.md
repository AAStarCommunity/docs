```ts
const ROLE_COMMUNITY: Hash;
```

Defined in: [packages/core/src/roles.ts:31](https://github.com/AAStarCommunity/aastar-sdk/blob/6f545c3bc3e9627fe8caae45eaa241648f3aa4b8/packages/core/src/roles.ts#L31)

Community Role

## Remarks

- **Description**: Community administrator, can issue xPNTs, configure SBT rules
- **Permission**: Community-level governance
- **Requirement**: minStake: 30 GT, entryBurn: 3 GT (line 99)
- **Exit Fee**: 5% (500 basis points), min 1 GT
- **Lock Duration**: 30 days
- **Source**: Registry.sol line 32: ROLE_COMMUNITY = keccak256("COMMUNITY")
