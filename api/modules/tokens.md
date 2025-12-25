# @aastar/tokens

Token utilities for GToken, xPNTs, and SBTs.

## Installation

```bash
pnpm add @aastar/tokens viem
```

## Overview

The Tokens module provides utilities for:
- GToken (Governance Token) operations
- xPNTs (Community Points) management
- SBT (Soul-Bound Token) operations
- Token approvals and transfers

---

## GToken Functions

### `mintGToken(client, to, amount)`

Mint GTokens (test/development only).

**Signature:**
```typescript
function mintGToken(
  client: WalletClient,
  to: Address,
  amount: bigint
): Promise<Hash>
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| client | `WalletClient` | Wallet client with minter role |
| to | `Address` | Recipient address |
| amount | `bigint` | Amount in wei |

**Returns:** `Promise<Hash>` - Transaction hash

**Example:**
```typescript
import { mintGToken } from '@aastar/tokens';
import { parseEther } from 'viem';

const txHash = await mintGToken(
  client,
  recipientAddress,
  parseEther('1000')
);
```

---

### `approveGToken(client, spender, amount)`

Approve GToken spending.

**Signature:**
```typescript
function approveGToken(
  client: WalletClient,
  spender: Address,
  amount: bigint
): Promise<Hash>
```

**Example:**
```typescript
import { approveGToken } from '@aastar/tokens';
import { CONTRACTS } from '@aastar/core';

await approveGToken(
  client,
  CONTRACTS.sepolia.gTokenStaking,
  parseEther('100')
);
```

---

### `getGTokenBalance(client, address)`

Get GToken balance.

**Signature:**
```typescript
function getGTokenBalance(
  client: PublicClient,
  address: Address
): Promise<bigint>
```

**Returns:** `Promise<bigint>` - Balance in wei

**Example:**
```typescript
import { getGTokenBalance } from '@aastar/tokens';

const balance = await getGTokenBalance(client, userAddress);
console.log('Balance:', formatEther(balance), 'GT');
```

---

## xPNTs Functions

### `mintXPNTs(client, to, amount)`

Mint xPNTs (community points).

**Example:**
```typescript
import { mintXPNTs } from '@aastar/tokens';

await mintXPNTs(client, memberAddress, parseEther('100'));
```

---

### `getXPNTsBalance(client, address)`

Get xPNTs balance.

**Example:**
```typescript
import { getXPNTsBalance } from '@aastar/tokens';

const balance = await getXPNTsBalance(client, userAddress);
```

---

## SBT Functions

### `getSBTBalance(client, user, tokenId)`

Get SBT balance (0 or 1).

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
import { getSBTBalance } from '@aastar/tokens';

const hasSBT = await getSBTBalance(client, userAddress, 1n);

if (hasSBT > 0n) {
  console.log('User has membership SBT');
}
```

---

## Complete Examples

### Operator Staking Flow

```typescript
import { mintGToken, approveGToken, getGTokenBalance } from '@aastar/tokens';
import { createOperatorClient, CONTRACTS } from '@aastar/core';

async function operatorStaking() {
  const operator = createOperatorClient({...});

  // 1. Mint GTokens (testnet only)
  await mintGToken(
    operator,
    operator.account.address,
    parseEther('1000')
  );

  // 2. Check balance
  const balance = await getGTokenBalance(
    operator,
    operator.account.address
  );
  console.log('GToken balance:', formatEther(balance));

  // 3. Approve staking contract
  await approveGToken(
    operator,
    CONTRACTS.sepolia.gTokenStaking,
    parseEther('100')
  );

  // 4. Stake
  await operator.stake({ amount: parseEther('100') });
}
```

---

### Community Points Distribution

```typescript
import { mintXPNTs, getXPNTsBalance } from '@aastar/tokens';

async function distributePoints(members: Address[]) {
  for (const member of members) {
    // Mint 100 xPNTs to each member
    await mintXPNTs(client, member, parseEther('100'));
  }

  // Verify distribution
  for (const member of members) {
    const balance = await getXPNTsBalance(client, member);
    console.log(`${member}: ${formatEther(balance)} xPNTs`);
  }
}
```

---

## Related APIs

- [Operator API](/api/roles/operator) - GToken staking
- [Community API](/api/roles/community) - SBT minting
- [Core Module](/api/modules/core) - Contract addresses
- [Identity Module](/api/modules/identity) - Reputation
