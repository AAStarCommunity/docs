# Quick Start

Get up and running with the AAStar SDK using the actual v0.13.0 API patterns in less than 5 minutes.

## 1. Environment Setup

Create a `.env` file with your private key and RPC provider:

```bash
PRIVATE_KEY_USER=0x...
SEPOLIA_RPC_URL=https://eth-sepolia.g.alchemy.com/v2/...
COMMUNITY_ADDRESS=0x...
SUPER_PAYMASTER=0x...
```

## 2. Initialize EndUserClient

Initialize the high-level `EndUserClient` and a `SimpleSmartAccount`.

```typescript
import { createEndUserClient, toSimpleSmartAccount, UserOpClient } from '@aastar/sdk';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

const account = privateKeyToAccount(process.env.PRIVATE_KEY_USER);

const client = createEndUserClient({
  chain: sepolia,
  transport: http(process.env.SEPOLIA_RPC_URL),
  account
});

// Initialize Smart Account (ERC-4337)
const smartAccount = await toSimpleSmartAccount({
  client,
  owner: account,
  factoryAddress: '0x...', // SimpleAccountFactory
  entryPoint: { address: '0x...', version: '0.7' }
});
```

## 3. Execute a Gasless Transaction (AOA+ Shared Mode)

Use the SuperPaymaster middleware to sponsor gas via community credit.

```typescript
import { getSuperPaymasterMiddleware } from '@aastar/sdk';

// 1. Prepare Middleware
const middleware = getSuperPaymasterMiddleware({
  paymasterAddress: process.env.SUPER_PAYMASTER,
  operator: '0x...', // Operator providing the sponsorship
});

// 2. Prepare UserOperation (This is the standard 4337 flow)
const userOp = {
  sender: smartAccount.address,
  nonce: await client.readContract({ ... }),
  callData: '0x...',
  // ... and other required fields
};

// 3. Sponsor with Middleware
const { paymasterAndData } = await middleware.sponsorUserOperation({ userOperation: userOp });
userOp.paymasterAndData = paymasterAndData;

// 4. Sign and Send
const signature = await smartAccount.signUserOperation(userOp);
userOp.signature = signature;

const hash = await UserOpClient.sendUserOp(client, userOp, smartAccount.entryPoint);
console.log(`Transaction submitted: ${hash}`);
```

## 4. Next Steps

- **AOA (Independent Mode)**: Use `getPaymasterV4Middleware` to pay with whitelisted gas tokens.
- **Manage Roles**: Use the [CommunityClient](../api/roles/community) to call `airdropMint` for new members.
- **Provider Flow**: Use the [OperatorClient](../api/roles/operator) to `depositETH` to the paymaster pool.
