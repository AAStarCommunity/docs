# Operator Flow Example

This example demonstrates how to set up and manage a SuperPaymaster as an Operator.

## Steps

1. **Staking**: Deposit GTokens into the staking contract to become an authorized operator.
2. **Paymaster Deposit**: Add ETH or other tokens to the SuperPaymaster's deposit pool for gas sponsorship.
3. **Monitoring**: Track gas usage and reputation metrics.

## Code Preview

```typescript
import { createOperatorClient } from '@aastar/sdk';
import { parseEther, http } from 'viem';
import { foundry } from 'viem/chains';

const operator = createOperatorClient({
  chain: foundry,
  transport: http(),
  account: operatorAccount,
});

// 1. Stake GTokens for SuperPaymaster (AOA)
await operator.stake({
  amount: parseEther('100'),
});

// 2. Deposit Gas Funds to SuperPaymaster (AOA)
await operator.deposit({
  amount: parseEther('10'),
});

// 3. Manage PaymasterV4 (AOA+) Gas Tokens
await operator.addGasToken({
  paymasterAddress: '0x...',
  tokenAddress: '0x...',
  exchangeRate: parseEther('1'),
});

// 4. Query supported tokens
const tokens = await operator.getSupportedGasTokens({
  paymasterAddress: '0x...'
});
```
