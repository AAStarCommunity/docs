# @aastar/identity

Identity and reputation management utilities.

## Installation

```bash
pnpm add @aastar/identity viem
```

## Overview

The Identity module provides utilities for:
- SBT (Soul-Bound Token) management
- Reputation score tracking
- Identity verification
- Community membership

---

## Functions

### `getSBTBalance(client, user, tokenId)`

Get SBT balance for a user.

**Signature:**
```typescript
function getSBTBalance(
  client: PublicClient,
  user: Address,
  tokenId: bigint
): Promise<bigint>
```

**Returns:** `Promise<bigint>` - 0 or 1

**Example:**
```typescript
import { getSBTBalance } from '@aastar/identity';

const hasSBT = await getSBTBalance(client, userAddress, 1n);

if (hasSBT > 0n) {
  console.log('✅ User has membership badge');
}
```

---

### `getReputationScore(client, user, community)`

Get user's reputation score in a community.

**Signature:**
```typescript
function getReputationScore(
  client: PublicClient,
  user: Address,
  community: Address
): Promise<bigint>
```

**Returns:** `Promise<bigint>` - Reputation score

**Example:**
```typescript
import { getReputationScore } from '@aastar/identity';

const score = await getReputationScore(
  client,
  userAddress,
  communityAddress
);

console.log('Reputation:', score.toString());
```

---

## Complete Examples

### Check User Eligibility

```typescript
import { getSBTBalance, getReputationScore } from '@aastar/identity';

async function checkUserEligibility(user: Address, community: Address) {
  // 1. Check SBT
  const hasSBT = await getSBTBalance(client, user, 1n);
  
  if (hasSBT === 0n) {
    return { eligible: false, reason: 'No membership SBT' };
  }

  // 2. Check reputation
  const reputation = await getReputationScore(client, user, community);
  
  if (reputation < 100n) {
    return { eligible: false, reason: 'Low reputation' };
  }

  return { eligible: true };
}
```

---

## Related APIs

- [Community API](/api/roles/community) - Minting SBTs
- [Tokens Module](/api/modules/tokens) - Token utilities
- [End User API](/api/roles/enduser) - User operations
