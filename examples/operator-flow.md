# Operator Flow Example

This example demonstrates how to set up and manage Paymasters as an Operator under both AOA and AOA+ models.

## 1. AOA Mode: Independent Paymaster (PaymasterV4)

In AOA mode, the operator owns and manages a specific PaymasterV4 instance.

```typescript
import { createOperatorClient } from '@aastar/sdk';
import { parseEther } from 'viem';

const operator = createOperatorClient({ ... });

// 1. Configure the PaymasterV4 (Independent Mode)
await operator.addGasToken({
  address: '0x_PAYMASTER_V4_ADDRESS',
  token: '0x_GAS_TOKEN_ADDRESS',
});

// 2. Set service fee rate (e.g., 5%)
await operator.setServiceFeeRate({
  address: '0x_PAYMASTER_V4_ADDRESS',
  rate: 5n
});

// 3. Query supported tokens
const tokens = await operator.getSupportedGasTokens({
  address: '0x_PAYMASTER_V4_ADDRESS'
});
```

## 2. AOA+ Mode: Shared Paymaster (SuperPaymaster)

In AOA+ mode, operators pool their resources into a shared SuperPaymaster contract.

```typescript
import { createOperatorClient } from '@aastar/sdk';
import { parseEther, encodePacked } from 'viem';

const operator = createOperatorClient({ ... });

// Use the high-level onboarding helper
// 1. Stake GTokens, 2. Register Role, 3. Deposit APNTs
const txHashes = await operator.onboardToSuperPaymaster({
  stakeAmount: parseEther('100'),
  depositAmount: parseEther('50'),
  roleId: '0x_OPERATOR_ROLE_ID'
});

// Or manage deposit manually
await operator.depositAPNTs({
  amount: parseEther('10')
});
```
