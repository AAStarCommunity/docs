# End User API Reference

Complete API reference for end users and DApp developers.

## Overview

End users are individuals who use DApps built on AAStar infrastructure. The End User API enables you to:

- Check credit limits for gasless transactions
- Query debt status
- Repay debts
- Manage smart accounts
- Send gasless transactions

## Prerequisites

- User private key or smart account
- (Optional) SBT membership in a community

## Client Creation

### `createEndUserClient(config)`

Create a client with end-user-specific actions.

**Signature:**
```typescript
function createEndUserClient(config: ClientConfig): EndUserClient
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| config.chain | `Chain` | Viem chain object |
| config.transport | `Transport` | Viem transport |
| config.account | `Account` | User account |

**Returns:**

`EndUserClient` - Extended wallet client with end-user actions

**Example:**
```typescript
import { createEndUserClient } from '@aastar/core';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

const user = createEndUserClient({
  chain: sepolia,
  transport: http(process.env.RPC_URL),
  account: privateKeyToAccount(process.env.USER_KEY),
});
```

---

## Actions

### `getCreditLimit()`

Get the user's current credit limit for gasless transactions.

**Context:** Check how much gas credit is available before sending transactions.

**Signature:**
```typescript
getCreditLimit(): Promise<bigint>
```

**Returns:**

`Promise<bigint>` - Credit limit in wei

**Example:**
```typescript
const creditLimit = await user.getCreditLimit();
console.log('Available credit:', formatEther(creditLimit), 'ETH');

if (creditLimit > parseEther('0.01')) {
  // Sufficient credit for transaction
  await sendGaslessTransaction();
}
```

**Factors Affecting Credit:**
- SBT ownership
- Reputation score
- Community membership
- Historical behavior

---

### `getDebtStatus()`

Query current debt status.

**Context:** Check if you have outstanding debt from previous gasless transactions.

**Signature:**
```typescript
getDebtStatus(): Promise<DebtStatus>
```

**Type Definitions:**
```typescript
interface DebtStatus {
  amount: bigint;      // Total debt in wei
  dueDate: bigint;     // Unix timestamp
  isPastDue: boolean;  // Whether debt is overdue
}
```

**Returns:**

`Promise<DebtStatus>` - Debt status object

**Example:**
```typescript
const debt = await user.getDebtStatus();

if (debt.amount > 0n) {
  console.log('Outstanding debt:', formatEther(debt.amount), 'ETH');
  console.log('Due date:', new Date(Number(debt.dueDate) * 1000));
  
  if (debt.isPastDue) {
    console.warn('⚠️ Debt is overdue!');
  }
}
```

---

### `repayDebt(params)`

Repay outstanding debt.

**Context:** Pay back gas costs from previous gasless transactions.

**Signature:**
```typescript
repayDebt(params: RepayDebtParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.amount | `bigint` | Amount to repay in wei |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
import { parseEther } from 'viem';

// Get current debt
const debt = await user.getDebtStatus();

// Repay full amount
if (debt.amount > 0n) {
  const txHash = await user.repayDebt({
    amount: debt.amount,
  });
  
  console.log('Debt repaid:', txHash);
}

// Or repay partial amount
await user.repayDebt({
  amount: parseEther('0.01'),
});
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `InsufficientBalance` | Not enough ETH | Add funds to wallet |
| `NoDebt` | No outstanding debt | Check debt status first |
| `AmountTooLarge` | Trying to repay more than owed | Use exact debt amount |

**Events Emitted:**
- `DebtRepaid(address indexed user, uint256 amount)`

---

### `checkEligibility(community)`

Check if eligible for gasless transactions in a community.

**Context:** Verify eligibility before attempting gasless transaction.

**Signature:**
```typescript
checkEligibility(community: Address): Promise<boolean>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| community | `Address` | Community contract address |

**Returns:**

`Promise<boolean>` - `true` if eligible, `false` otherwise

**Example:**
```typescript
const isEligible = await user.checkEligibility(communityAddress);

if (isEligible) {
  console.log('✅ Eligible for gasless transactions');
  // Proceed with gasless transaction
} else {
  console.log('❌ Not eligible');
  // Either acquire SBT or pay gas normally
}
```

**Eligibility Criteria:**
- Must have community SBT
- Reputation score above threshold
- No overdue debt
- Within credit limit

---

## Gasless Transaction Example

```typescript
import { createEndUserClient } from '@aastar/core';
import { encodeFunctionData } from 'viem';

async function sendGaslessTransaction() {
  const user = createEndUserClient({
    chain: sepolia,
    transport: http(process.env.RPC_URL),
    account: userAccount,
  });

  // 1. Check eligibility
  const isEligible = await user.checkEligibility(communityAddress);
  if (!isEligible) {
    throw new Error('Not eligible for gasless transactions');
  }

  // 2. Check credit limit
  const creditLimit = await user.getCreditLimit();
  console.log('Credit limit:', formatEther(creditLimit));

  // 3. Create UserOperation
  const userOp = {
    sender: user.account.address,
    nonce: 0n,
    callData: encodeFunctionData({
      abi: targetABI,
      functionName: 'transfer',
      args: [recipientAddress, parseEther('1')],
    }),
    // ... other fields
  };

  // 4. Get paymaster data
  const paymasterAndData = await getPaymasterAndData(userOp, {
    paymasterAddress: CONTRACTS.sepolia.superPaymaster,
    communityAddress,
    // ... config
  });

  // 5. Submit to bundler
  const txHash = await submitUserOperation({
    ...userOp,
    paymasterAndData,
  });

  console.log('Gasless transaction sent:', txHash);
}
```

## Complete Workflow Example

```typescript
async function endUserWorkflow() {
  const user = createEndUserClient({
    chain: sepolia,
    transport: http(process.env.RPC_URL),
    account: privateKeyToAccount(process.env.USER_KEY),
  });

  // 1. Check credit status
  const credit = await user.getCreditLimit();
  console.log('Available credit:', formatEther(credit));

  // 2. Check debt status
  const debt = await user.getDebtStatus();
  if (debt.amount > 0n) {
    console.log('Outstanding debt:', formatEther(debt.amount));
    
    // 3. Repay if needed
    if (debt.isPastDue) {
      await user.repayDebt({ amount: debt.amount });
      console.log('Debt repaid!');
    }
  }

  // 4. Check eligibility for gasless tx
  const eligible = await user.checkEligibility(communityAddress);
  
  if (eligible && credit > parseEther('0.01')) {
    // 5. Send gasless transaction
    await sendGaslessTransaction();
  }
}
```

## Best Practices

1. **Always Check Eligibility**: Verify before attempting gasless transactions
2. **Monitor Credit**: Keep track of available credit limit
3. **Timely Repayment**: Repay debts before due date to maintain good standing
4. **Error Handling**: Always wrap calls in try-catch blocks
5. **Gas Estimation**: Estimate gas before sending to ensure within credit limit

## Related APIs

- [Community API](/api/roles/community) - For community managers
- [Paymaster Module](/api/modules/paymaster) - Paymaster utilities
- [Account Module](/api/modules/account) - Smart account management
