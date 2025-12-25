# Getting Started

Welcome to AAStar SDK! This guide will help you get started with building Your Own Protocol (YOP) using Account Abstraction.

## What is AAStar SDK?

AAStar SDK is a comprehensive TypeScript SDK for building Web3 applications with Account Abstraction (ERC-4337). It provides:

- **SuperPaymaster (AOA+)**: Enable gasless transactions for your users
- **EOA Rainbow Bridge**: Seamlessly connect traditional wallets to smart accounts
- **Community Management**: Built-in tools for DAOs and communities
- **Reputation System**: On-chain reputation with customizable rules

## Prerequisites

Before you begin, make sure you have:

- Node.js 18+ installed
- Basic knowledge of TypeScript and Ethereum
- A wallet with some testnet ETH (for Sepolia)

## Installation

Install the SDK using pnpm (recommended):

```bash
pnpm add @aastar/sdk
```

Or install individual packages:

```bash
pnpm add @aastar/core @aastar/account @aastar/paymaster
```

## Your First Transaction

Let's create a simple example that demonstrates the core functionality:

```typescript
import { createEndUserClient } from '@aastar/core';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

// 1. Create a client
const client = createEndUserClient({
  chain: sepolia,
  transport: http('https://rpc.sepolia.org'),
  account: privateKeyToAccount(process.env.PRIVATE_KEY),
});

// 2. Check your credit limit
const creditLimit = await client.getCreditLimit();
console.log('Credit limit:', creditLimit);

// 3. Send a gasless transaction (if eligible)
// ... transaction code
```

## Next Steps

Now that you have the SDK installed, you can:

- [Learn core concepts](/guide/concepts/account-abstraction)
- [Explore use cases](/guide/use-cases/community-management)
- [Read the API reference](/api/)
- [Try complete examples](/examples/)

## Need Help?

- [GitHub Issues](https://github.com/AAStarCommunity/aastar-sdk/issues)
- [Discord Community](https://discord.gg/aastar)
- [Documentation](https://docs.aastar.io)
