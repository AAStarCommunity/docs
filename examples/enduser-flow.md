# End User Flow Example

This example demonstrates how to create a Smart Account and send gasless transactions using either the AOA or AOA+ paymaster model.

## Steps

1. **Initialization**: Create a Public Client and an EOA account.
2. **Middleware Selection**: Choose between SuperPaymaster (Pool-based) or PaymasterV4 (Token/SBT based).
3. **Execution**: Send the user operation using the selected middleware.

## Code Preview

```typescript
import { createEndUserClient, getSuperPaymasterMiddleware, getPaymasterV4Middleware } from '@aastar/sdk';
import { http, parseEther } from 'viem';
import { foundry } from 'viem/chains';

const user = createEndUserClient({
  chain: foundry,
  transport: http(),
  account: eoaAccount,
});

// --- OPTION A: AOA (SuperPaymaster) ---
// Uses community credit for gas sponsorship
const aoaMiddleware = getSuperPaymasterMiddleware({
  paymasterUrl: 'https://paymaster.aastar.io',
  communityAddress: '0x...', 
});

// --- OPTION B: AOA+ (PaymasterV4) ---
// Uses specific gas tokens or SBT identity
const aoaPlusMiddleware = getPaymasterV4Middleware({
  paymasterAddress: '0x...',
  gasToken: '0x...', // Optional: Pay with tokens
});

// Send gasless transaction
await user.sendGaslessTransaction({
  to: '0x...',
  data: '0x...',
  middleware: aoaPlusMiddleware // Choose your strategy
});
```

## Middleware Choice
- Use **AOA** for community-sponsored flows where users don't need to hold any tokens.
- Use **AOA+** for specific dApp requirements like "Hold X Token to get free gas" or "SBT holders only".
