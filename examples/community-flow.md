# Community Flow Example

This example demonstrates how to manage a community, issue SBTs, and configure reputation.

## Steps

1. **Registration**: Register your community registry role on-chain.
2. **SBT Issuance**: Airdrop Soul-Bound Tokens to members to define their roles.
3. **Reputation Setup**: Define rules that calculate member reputation based on activity.

## Code Preview

```typescript
import { createCommunityClient } from '@aastar/sdk';
import { parseEther, http } from 'viem';

const community = createCommunityClient({ ... });

// 1. Register Community Registry Role
await community.registerRole({
  roleId: '0x...',
  config: { 
    minStake: parseEther('10'),
    isActive: true,
    description: "Alpha DAO Member"
  }
});

// 2. Airdrop Soul-bound Tokens (SBT)
await community.airdropSBT({
  to: memberAddress,
  roleId: '0x...',
  roleData: '0x...'
});

// 3. Update Global Reputation (Batch)
// Requires BLS proof generated via SDK BLSSigner
await community.batchUpdateGlobalReputation({
  updates: [{ user: memberAddress, score: 100n }],
  proof: blsProof // Generated from BLSSigner
});
```
