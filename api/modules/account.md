# @aastar/account

Account Abstraction utilities for creating and managing smart accounts (ERC-4337).

## Installation

```bash
pnpm add @aastar/account viem
```

## Overview

The Account module provides utilities for:
- Creating smart contract accounts
- Predicting account addresses
- Managing account ownership
- Account factory integration

## Key Concepts

**Smart Account**: A contract wallet that enables advanced features like:
- Gasless transactions
- Social recovery
- Session keys
- Batch operations
- Custom validation logic

**Account Factory**: Contract that deploys new smart accounts deterministically.

---

## Functions

### `createSmartAccount(config)`

Create a new smart account (ERC-4337).

**Signature:**
```typescript
function createSmartAccount(config: SmartAccountConfig): Promise<SmartAccount>
```

**Parameters:**
```typescript
interface SmartAccountConfig {
  owner: Address;           // EOA owner address
  salt: bigint;            // Salt for deterministic address
  factoryAddress: Address; // Account factory contract
}
```

**Returns:**
```typescript
interface SmartAccount {
  address: Address;        // Predicted smart account address
  owner: Address;          // Owner EOA
  factory: Address;        // Factory contract
  isDeployed: boolean;     // Whether account is deployed
}
```

**Example:**
```typescript
import { createSmartAccount } from '@aastar/account';
import { CONTRACTS } from '@aastar/core';

const account = await createSmartAccount({
  owner: '0x742d35Cc6634C0532925a3b844Bc9e7595f0bEb',
  salt: 0n,
  factoryAddress: CONTRACTS.sepolia.simpleAccountFactory,
});

console.log('Smart account address:', account.address);
console.log('Is deployed:', account.isDeployed);
```

---

### `getAccountAddress(config)`

Get the deterministic address for a smart account without deploying.

**Signature:**
```typescript
function getAccountAddress(config: SmartAccountConfig): Promise<Address>
```

**Parameters:** Same as `createSmartAccount`

**Returns:** `Promise<Address>` - Predicted smart account address

**Example:**
```typescript
import { getAccountAddress } from '@aastar/account';

const address = await getAccountAddress({
  owner: ownerAddress,
  salt: 0n,
  factoryAddress: factoryAddress,
});

console.log('Account will be deployed at:', address);
```

**Use Case:** Check if account exists before deployment.

---

### `isAccountDeployed(address, client)`

Check if a smart account is already deployed.

**Signature:**
```typescript
function isAccountDeployed(
  address: Address,
  client: PublicClient
): Promise<boolean>
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| address | `Address` | Smart account address |
| client | `PublicClient` | Viem public client |

**Returns:** `Promise<boolean>` - `true` if deployed

**Example:**
```typescript
import { isAccountDeployed } from '@aastar/account';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';

const client = createPublicClient({
  chain: sepolia,
  transport: http(),
});

const deployed = await isAccountDeployed(accountAddress, client);

if (!deployed) {
  console.log('Account needs to be deployed first');
}
```

---

## Complete Workflow Example

### Creating and Using a Smart Account

```typescript
import { createSmartAccount, getAccountAddress } from '@aastar/account';
import { createPublicClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';
import { CONTRACTS } from '@aastar/core';

async function setupSmartAccount() {
  // 1. Get owner EOA
  const owner = privateKeyToAccount(process.env.OWNER_KEY);
  
  // 2. Predict account address
  const accountAddress = await getAccountAddress({
    owner: owner.address,
    salt: 0n,
    factoryAddress: CONTRACTS.sepolia.simpleAccountFactory,
  });
  
  console.log('Smart account will be at:', accountAddress);
  
  // 3. Check if already deployed
  const client = createPublicClient({
    chain: sepolia,
    transport: http(),
  });
  
  const deployed = await isAccountDeployed(accountAddress, client);
  
  if (!deployed) {
    // 4. Create account (deploys on first transaction)
    const account = await createSmartAccount({
      owner: owner.address,
      salt: 0n,
      factoryAddress: CONTRACTS.sepolia.simpleAccountFactory,
    });
    
    console.log('Account created:', account.address);
  }
  
  return accountAddress;
}
```

---

## Advanced Usage

### Multiple Accounts with Different Salts

```typescript
// Create multiple accounts for the same owner
const accounts = await Promise.all([
  getAccountAddress({ owner: ownerAddress, salt: 0n, factoryAddress }),
  getAccountAddress({ owner: ownerAddress, salt: 1n, factoryAddress }),
  getAccountAddress({ owner: ownerAddress, salt: 2n, factoryAddress }),
]);

console.log('Account 0:', accounts[0]);
console.log('Account 1:', accounts[1]);
console.log('Account 2:', accounts[2]);
```

### Batch Account Creation

```typescript
async function createAccountsForUsers(users: Address[]) {
  const accounts = [];
  
  for (const [index, user] of users.entries()) {
    const address = await getAccountAddress({
      owner: user,
      salt: BigInt(index),
      factoryAddress: CONTRACTS.sepolia.simpleAccountFactory,
    });
    
    accounts.push({ user, account: address });
  }
  
  return accounts;
}
```

---

## Integration with Paymaster

Smart accounts work seamlessly with SuperPaymaster for gasless transactions:

```typescript
import { createSmartAccount } from '@aastar/account';
import { createEndUserClient } from '@aastar/core';

// 1. Create smart account
const smartAccount = await createSmartAccount({
  owner: ownerAddress,
  salt: 0n,
  factoryAddress: CONTRACTS.sepolia.simpleAccountFactory,
});

// 2. Use with end user client for gasless transactions
const user = createEndUserClient({
  chain: sepolia,
  transport: http(),
  account: smartAccount, // Use smart account instead of EOA
});

// 3. Check eligibility for gasless transactions
const eligible = await user.checkEligibility(communityAddress);

if (eligible) {
  // Send gasless transaction
  await sendGaslessTransaction();
}
```

---

## Type Definitions

### `SmartAccountConfig`

```typescript
interface SmartAccountConfig {
  owner: Address;           // EOA that owns the smart account
  salt: bigint;            // Unique salt for address generation
  factoryAddress: Address; // Account factory contract address
}
```

### `SmartAccount`

```typescript
interface SmartAccount {
  address: Address;        // Smart account contract address
  owner: Address;          // Owner EOA address
  factory: Address;        // Factory contract address
  isDeployed: boolean;     // Deployment status
}
```

---

## Best Practices

1. **Use Salt Wisely**: Different salts create different addresses for the same owner
2. **Check Deployment**: Always verify if account is deployed before use
3. **Predict First**: Use `getAccountAddress()` to predict address before deployment
4. **Secure Owner Key**: The owner EOA controls the smart account
5. **Test on Testnet**: Always test account creation on testnet first

---

## Common Patterns

### Lazy Deployment

Smart accounts are deployed on first use:

```typescript
// Predict address
const address = await getAccountAddress(config);

// Account doesn't exist yet, but has a deterministic address
// It will be deployed automatically on first transaction
```

### Account Recovery

```typescript
// If you know the owner and salt, you can always recover the address
const recoveredAddress = await getAccountAddress({
  owner: knownOwner,
  salt: knownSalt,
  factoryAddress: CONTRACTS.sepolia.simpleAccountFactory,
});
```

---

## Error Handling

```typescript
try {
  const account = await createSmartAccount(config);
} catch (error) {
  if (error.message.includes('invalid owner')) {
    console.error('Owner address is invalid');
  } else if (error.message.includes('factory not found')) {
    console.error('Factory contract not deployed');
  } else {
    console.error('Account creation failed:', error);
  }
}
```

---

## Related APIs

- [End User API](/api/roles/enduser) - Using smart accounts
- [Core Module](/api/modules/core) - Contract addresses
- [Paymaster Module](/api/modules/paymaster) - Gasless transactions
- [Account Abstraction Concept](/guide/concepts/account-abstraction)
