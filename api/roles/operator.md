# Operator API Reference

Complete API reference for Paymaster operators.

## Overview

Operators are Paymaster service providers who stake GTokens and provide gas sponsorship services to communities. The Operator API enables you to:

- Stake GTokens to become an operator
- Deposit funds to Paymaster contracts
- Withdraw earnings
- Monitor performance and reputation

## Prerequisites

Before using the Operator API, ensure you have:

- GTokens for staking (minimum 100 GToken)
- ETH for transaction fees
- Operator private key

## Client Creation

### `createOperatorClient(config)`

Create a client with operator-specific actions.

**Signature:**
```typescript
function createOperatorClient(config: ClientConfig): OperatorClient
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| config.chain | `Chain` | Viem chain object (e.g., `sepolia`) |
| config.transport | `Transport` | Viem transport (e.g., `http()`) |
| config.account | `Account` | Operator account from `privateKeyToAccount()` |

**Returns:**

`OperatorClient` - Extended wallet client with operator actions

**Example:**
```typescript
import { createOperatorClient } from '@aastar/core';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

const operator = createOperatorClient({
  chain: sepolia,
  transport: http(process.env.RPC_URL),
  account: privateKeyToAccount(process.env.OPERATOR_KEY),
});
```

---

## Actions

### `stake(params)`

Stake GTokens to register as a Paymaster operator.

**Context:** Use this when you want to become a Paymaster operator and start providing gas sponsorship services.

**Prerequisites:**
- Must have GTokens in your wallet
- Must approve GTokenStaking contract first

**Signature:**
```typescript
stake(params: StakeParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.amount | `bigint` | Amount to stake in wei (minimum 100 GToken) |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
import { parseEther } from 'viem';
import { CONTRACTS } from '@aastar/core';

// 1. Approve GTokenStaking contract
await operator.writeContract({
  address: CONTRACTS.sepolia.gToken,
  abi: GTokenABI,
  functionName: 'approve',
  args: [CONTRACTS.sepolia.gTokenStaking, parseEther('100')],
});

// 2. Stake
const txHash = await operator.stake({
  amount: parseEther('100'),
});

console.log('Staked! TX:', txHash);
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `InsufficientBalance` | Not enough GTokens | Acquire more GTokens |
| `InsufficientAllowance` | Haven't approved staking contract | Call `approve()` first |
| `MinimumStakeNotMet` | Amount below minimum (100 GToken) | Increase stake amount |
| `AlreadyStaked` | Already an active operator | Use `increaseStake()` instead |

**Events Emitted:**
- `Staked(address indexed operator, uint256 amount)`

**See Also:**
- [deposit()](#deposit)
- [withdraw()](#withdraw)

---

### `deposit(params)`

Deposit funds to Paymaster contract for gas sponsorship.

**Context:** After staking, deposit funds that will be used to sponsor user transactions.

**Signature:**
```typescript
deposit(params: DepositParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.amount | `bigint` | Amount to deposit in wei |
| params.mode | `'push' \| 'pull'` | Deposit mode (optional, default: 'push') |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
// Push mode (immediate deposit)
await operator.deposit({
  amount: parseEther('10'),
  mode: 'push',
});

// Pull mode (notify deposit, actual transfer later)
await operator.deposit({
  amount: parseEther('10'),
  mode: 'pull',
});
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `InsufficientBalance` | Not enough ETH | Add more ETH to wallet |
| `NotStaked` | Haven't staked yet | Call `stake()` first |
| `DepositTooSmall` | Amount below minimum | Increase deposit amount |

**Events Emitted:**
- `Deposited(address indexed operator, uint256 amount, string mode)`

---

### `withdraw(params)`

Withdraw earnings from Paymaster contract.

**Context:** Withdraw your earnings after providing gas sponsorship services.

**Signature:**
```typescript
withdraw(params: WithdrawParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.amount | `bigint` | Amount to withdraw in wei |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
// Check available balance first
const balance = await operator.readContract({
  address: CONTRACTS.sepolia.superPaymaster,
  abi: SuperPaymasterABI,
  functionName: 'getOperatorBalance',
  args: [operator.account.address],
});

// Withdraw
await operator.withdraw({
  amount: balance,
});
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `InsufficientBalance` | Trying to withdraw more than available | Check balance first |
| `WithdrawalLocked` | Funds are locked (e.g., pending slashing) | Wait for lock period |

**Events Emitted:**
- `Withdrawn(address indexed operator, uint256 amount)`

---

## Complete Workflow Example

```typescript
import { createOperatorClient, CONTRACTS } from '@aastar/core';
import { http, parseEther } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

async function operatorWorkflow() {
  // 1. Create operator client
  const operator = createOperatorClient({
    chain: sepolia,
    transport: http(process.env.RPC_URL),
    account: privateKeyToAccount(process.env.OPERATOR_KEY),
  });

  // 2. Approve GToken spending
  await operator.writeContract({
    address: CONTRACTS.sepolia.gToken,
    abi: GTokenABI,
    functionName: 'approve',
    args: [CONTRACTS.sepolia.gTokenStaking, parseEther('100')],
  });

  // 3. Stake to become operator
  const stakeTx = await operator.stake({
    amount: parseEther('100'),
  });
  console.log('Staked:', stakeTx);

  // 4. Deposit funds for gas sponsorship
  const depositTx = await operator.deposit({
    amount: parseEther('10'),
  });
  console.log('Deposited:', depositTx);

  // 5. Monitor and withdraw earnings later
  // ... provide services ...
  
  // 6. Withdraw earnings
  const withdrawTx = await operator.withdraw({
    amount: parseEther('5'),
  });
  console.log('Withdrawn:', withdrawTx);
}
```

## Best Practices

1. **Start Small**: Begin with minimum stake (100 GToken) to test
2. **Monitor Balance**: Regularly check Paymaster balance to ensure sufficient funds
3. **Gradual Withdrawal**: Don't withdraw all funds at once, maintain buffer
4. **Track Performance**: Monitor your operator reputation score
5. **Handle Errors**: Always wrap calls in try-catch blocks

## Related APIs

- [Community API](/api/roles/community) - For communities using your services
- [Core Module](/api/modules/core) - Core utilities and constants
- [Tokens Module](/api/modules/tokens) - GToken utilities
