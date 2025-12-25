# @aastar/paymaster

Paymaster utilities for gas sponsorship and gasless transactions.

## Installation

```bash
pnpm add @aastar/paymaster viem
```

## Overview

The Paymaster module provides utilities for:
- Generating paymaster data for UserOperations
- Checking user eligibility for gas sponsorship
- Managing gas sponsorship rules
- Integration with SuperPaymaster (AOA+)

---

## Functions

### `getPaymasterAndData(userOp, config)`

Generate paymaster data for a UserOperation.

**Signature:**
```typescript
function getPaymasterAndData(
  userOp: UserOperation,
  config: PaymasterConfig
): Hex
```

**Parameters:**
```typescript
interface PaymasterConfig {
  paymasterAddress: Address;
  communityAddress: Address;
  xPNTsAddress: Address;
  verificationGasLimit: bigint;
  postOpGasLimit: bigint;
}

interface UserOperation {
  sender: Address;
  nonce: bigint;
  callData: Hex;
  // ... other fields
}
```

**Returns:** `Hex` - Encoded paymaster and data

**Example:**
```typescript
import { getPaymasterAndData } from '@aastar/paymaster';
import { CONTRACTS } from '@aastar/core';

const paymasterAndData = getPaymasterAndData(userOp, {
  paymasterAddress: CONTRACTS.sepolia.superPaymaster,
  communityAddress: '0x...',
  xPNTsAddress: CONTRACTS.sepolia.xPNTsToken,
  verificationGasLimit: 100000n,
  postOpGasLimit: 50000n,
});

// Use in UserOperation
const userOpWithPaymaster = {
  ...userOp,
  paymasterAndData,
};
```

---

### `checkEligibility(user, community, rpcUrl)`

Check if a user is eligible for gas sponsorship.

**Signature:**
```typescript
function checkEligibility(
  user: Address,
  community: Address,
  rpcUrl: string
): Promise<boolean>
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| user | `Address` | User address |
| community | `Address` | Community address |
| rpcUrl | `string` | RPC endpoint |

**Returns:** `Promise<boolean>` - Eligibility status

**Example:**
```typescript
import { checkEligibility } from '@aastar/paymaster';

const isEligible = await checkEligibility(
  userAddress,
  communityAddress,
  'https://rpc.sepolia.org'
);

if (isEligible) {
  console.log('✅ User eligible for gasless transactions');
} else {
  console.log('❌ User not eligible');
}
```

**Eligibility Criteria:**
- Must have community SBT
- Reputation score above threshold
- No overdue debt
- Within credit limit

---

## Complete Gasless Transaction Example

```typescript
import { getPaymasterAndData, checkEligibility } from '@aastar/paymaster';
import { createEndUserClient, CONTRACTS } from '@aastar/core';
import { encodeFunctionData } from 'viem';

async function sendGaslessTransaction() {
  // 1. Create end user client
  const user = createEndUserClient({
    chain: sepolia,
    transport: http(),
    account: userAccount,
  });

  // 2. Check eligibility
  const eligible = await checkEligibility(
    user.account.address,
    communityAddress,
    'https://rpc.sepolia.org'
  );

  if (!eligible) {
    throw new Error('Not eligible for gasless transactions');
  }

  // 3. Check credit limit
  const creditLimit = await user.getCreditLimit();
  console.log('Available credit:', formatEther(creditLimit));

  // 4. Create UserOperation
  const userOp = {
    sender: user.account.address,
    nonce: 0n,
    callData: encodeFunctionData({
      abi: targetABI,
      functionName: 'transfer',
      args: [recipientAddress, parseEther('1')],
    }),
    callGasLimit: 100000n,
    verificationGasLimit: 100000n,
    preVerificationGas: 50000n,
    maxFeePerGas: parseGwei('20'),
    maxPriorityFeePerGas: parseGwei('2'),
    signature: '0x',
    paymasterAndData: '0x',
  };

  // 5. Get paymaster data
  const paymasterAndData = getPaymasterAndData(userOp, {
    paymasterAddress: CONTRACTS.sepolia.superPaymaster,
    communityAddress,
    xPNTsAddress: CONTRACTS.sepolia.xPNTsToken,
    verificationGasLimit: 100000n,
    postOpGasLimit: 50000n,
  });

  // 6. Add paymaster data to UserOperation
  userOp.paymasterAndData = paymasterAndData;

  // 7. Sign UserOperation
  const signature = await signUserOperation(userOp, user.account);
  userOp.signature = signature;

  // 8. Submit to bundler
  const txHash = await submitUserOperation(userOp);

  console.log('Gasless transaction sent:', txHash);
  return txHash;
}
```

---

## Advanced Usage

### Custom Gas Limits

```typescript
// Low gas operation
const paymasterData = getPaymasterAndData(userOp, {
  paymasterAddress: CONTRACTS.sepolia.superPaymaster,
  communityAddress,
  xPNTsAddress: CONTRACTS.sepolia.xPNTsToken,
  verificationGasLimit: 50000n,  // Lower for simple ops
  postOpGasLimit: 30000n,
});

// High gas operation
const paymasterDataHigh = getPaymasterAndData(userOp, {
  paymasterAddress: CONTRACTS.sepolia.superPaymaster,
  communityAddress,
  xPNTsAddress: CONTRACTS.sepolia.xPNTsToken,
  verificationGasLimit: 200000n, // Higher for complex ops
  postOpGasLimit: 100000n,
});
```

### Batch Eligibility Check

```typescript
async function checkBatchEligibility(
  users: Address[],
  community: Address
) {
  const results = await Promise.all(
    users.map(user =>
      checkEligibility(user, community, process.env.RPC_URL)
    )
  );

  const eligible = users.filter((_, i) => results[i]);
  const notEligible = users.filter((_, i) => !results[i]);

  return { eligible, notEligible };
}
```

---

## Integration with SuperPaymaster

SuperPaymaster (AOA+) provides advanced gas sponsorship:

```typescript
import { getPaymasterAndData } from '@aastar/paymaster';
import { CONTRACTS } from '@aastar/core';

// SuperPaymaster automatically:
// - Checks user eligibility
// - Manages credit limits
// - Tracks debt
// - Handles repayment

const paymasterData = getPaymasterAndData(userOp, {
  paymasterAddress: CONTRACTS.sepolia.superPaymaster,
  communityAddress: communityAddress,
  xPNTsAddress: CONTRACTS.sepolia.xPNTsToken,
  verificationGasLimit: 100000n,
  postOpGasLimit: 50000n,
});
```

**Features:**
- Credit-based system
- Automatic debt tracking
- Community-specific rules
- Reputation-based limits

---

## Type Definitions

### `PaymasterConfig`

```typescript
interface PaymasterConfig {
  paymasterAddress: Address;      // SuperPaymaster contract
  communityAddress: Address;       // Community contract
  xPNTsAddress: Address;          // xPNTs token address
  verificationGasLimit: bigint;   // Gas for verification
  postOpGasLimit: bigint;         // Gas for post-op
}
```

### `UserOperation`

```typescript
interface UserOperation {
  sender: Address;
  nonce: bigint;
  callData: Hex;
  callGasLimit: bigint;
  verificationGasLimit: bigint;
  preVerificationGas: bigint;
  maxFeePerGas: bigint;
  maxPriorityFeePerGas: bigint;
  signature: Hex;
  paymasterAndData: Hex;
}
```

---

## Best Practices

1. **Always Check Eligibility**: Verify before creating UserOperation
2. **Estimate Gas**: Use appropriate gas limits for your operation
3. **Handle Errors**: Wrap in try-catch for eligibility failures
4. **Monitor Credit**: Check credit limit before transactions
5. **Test on Testnet**: Always test gasless flows on testnet first

---

## Error Handling

```typescript
try {
  const eligible = await checkEligibility(user, community, rpcUrl);
  
  if (!eligible) {
    // User not eligible
    console.log('Reasons:');
    console.log('- No SBT');
    console.log('- Low reputation');
    console.log('- Overdue debt');
    return;
  }

  const paymasterData = getPaymasterAndData(userOp, config);
} catch (error) {
  if (error.message.includes('insufficient credit')) {
    console.error('Credit limit exceeded');
  } else if (error.message.includes('invalid community')) {
    console.error('Community not registered');
  } else {
    console.error('Paymaster error:', error);
  }
}
```

---

## Related APIs

- [End User API](/api/roles/enduser) - Using gasless transactions
- [Community API](/api/roles/community) - Setting up gas sponsorship
- [Operator API](/api/roles/operator) - Providing gas sponsorship
- [SuperPaymaster Concept](/guide/concepts/superpaymaster)
- [Account Module](/api/modules/account) - Smart accounts
