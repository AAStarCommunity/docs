# Community Flow Example

This example demonstrates how to manage a community, issue SBTs, and update member reputation.

## 1. Setup Community Roles

Register and configure roles for your community in the Registry.

```typescript
import { createCommunityClient } from '@aastar/sdk';
import { parseEther } from 'viem';

const community = createCommunityClient({ ... });

// 1. Configure a new role for your members
await community.configureRole({
  roleId: '0x_MEMBER_ROLE_ID',
  config: { 
    minStake: parseEther('10'),
    entryBurn: parseEther('1'),
    slashThreshold: 50n,
    slashBase: parseEther('1'),
    slashIncrement: parseEther('0.1'),
    slashMax: parseEther('5'),
    exitFeePercent: 2n,
    minExitFee: parseEther('0.5'),
    isActive: true,
    description: "Alpha DAO Member"
  }
});

// 2. Map a user to a community role
await community.registerRole({
  roleId: '0x_MEMBER_ROLE_ID',
  user: '0x_USER_ADDRESS',
  data: '0x' // Optional metadata
});
```

## 2. SBT Issuance (Airdrop)

Airdrop soul-bound tokens to users to define their participation level.

```typescript
// Issuing a Soul-bound Token via Airdrop
await community.airdropMint({
  user: '0x_USER_ADDRESS',
  roleId: '0x_MEMBER_ROLE_ID',
  roleData: '0x'
});
```

## 3. Reputation & Credit Updates

Update member reputation scores in batches (e.g., from an off-chain scoring engine).

```typescript
// Batch update with BLS proof
// Note: Proof should be generated using BLSSigner from @aastar/sdk
await community.batchUpdateGlobalReputation({
  users: ['0x_USER_1', '0x_USER_2'],
  scores: [100n, 200n],
  epoch: 1n,
  proof: '0x_BLS_AGGREGATED_PROOF'
});
```
