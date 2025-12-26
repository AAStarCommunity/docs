# End User Flow Example

This example demonstrates how an end user uses the AAStar SDK to send gasless transactions using Smart Accounts and Paymaster sponsorship.

## 1. Setup Smart Account

Convert your EOA to a counterfactual Smart Account using the `toSimpleSmartAccount` helper.

```typescript
import { createEndUserClient, toSimpleSmartAccount } from '@aastar/sdk';
import { http } from 'viem';
import { sepolia } from 'viem/chains';

const client = createEndUserClient({
  chain: sepolia,
  transport: http(),
  account: eoaAccount,
});

const smartAccount = await toSimpleSmartAccount({
  client,
  owner: eoaAccount,
  factoryAddress: '0x_FACTORY_ADDR',
  entryPoint: { address: '0x_ENTRYPOINT_ADDR', version: '0.7' }
});
console.log('Smart Account Address:', smartAccount.address);
```

## 2. Prepare Sponsored Transaction

Choose your sponsorship model (AOA or AOA+).

### Option A: AOA Mode (Independent Token Paymaster)

Requires the user to hold specific tokens (e.g., USDT) which the Paymaster deducts for gas.

```typescript
import { getPaymasterV4Middleware } from '@aastar/sdk';

const aoaMiddleware = getPaymasterV4Middleware({
  paymasterAddress: '0x_PAYMASTER_V4_ADDR',
  gasToken: '0x_RESERVE_TOKEN_ADDR'
});
```

### Option B: AOA+ Mode (Shared Pool Paymaster)

Sponsorship based on community credit or reputation.

```typescript
import { getSuperPaymasterMiddleware } from '@aastar/sdk';

const aoaPlusMiddleware = getSuperPaymasterMiddleware({
  paymasterAddress: '0x_SUPER_PAYMASTER_ADDR',
  operator: '0x_OPERATOR_ADDR'
});
```

## 3. Execute UserOperation

The final step is to sign and send the UserOperation to a Bundler.

```typescript
import { UserOpClient } from '@aastar/sdk';

// 1. Construct UserOp
const userOp = {
  sender: smartAccount.address,
  nonce: await client.getTransactionCount({ address: smartAccount.address }),
  callData: '0x...', 
  // ... estimation logic
};

// 2. Get Paymaster Data from Middleware
const { paymasterAndData } = await aoaPlusMiddleware.sponsorUserOperation({
  userOperation: userOp
});
userOp.paymasterAndData = paymasterAndData;

// 3. Sign the UserOp
const signature = await smartAccount.signUserOperation(userOp);
userOp.signature = signature;

// 4. Send via UserOpClient
const userOpHash = await UserOpClient.sendUserOp(client, userOp, smartAccount.entryPoint);
console.log('UserOp Hash:', userOpHash);
```
