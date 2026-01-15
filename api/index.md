# API Reference

Welcome to the AAstar SDK API Reference. Our SDK is designed with a **"Pre-check first, Action second"** philosophy, providing tools for different ecosystem roles.

## 📦 Packages Overview

| Package | Purpose |
|---------|---------|
| [`@aastar/sdk`](./@aastar/sdk/) | **Meta Package** - The most intuitive entry point for all developers. |
| [`@aastar/core`](./@aastar/core/) | **Shared Logic** - Essential roles, contract addresses, and requirement checkers. |
| [`@aastar/account`](./@aastar/account/) | **Smart Accounts** - ERC-4337 account utilities and factories. |
| [`@aastar/paymaster`](./@aastar/paymaster/) | **Gas Sponsoring** - Client and middleware for Paymaster operations. |
| [`@aastar/tokens`](./@aastar/tokens/) | **Finance** - Tools for GT staking and XPNTs management. |
| [`@aastar/identity`](./@aastar/identity/) | **Reputation** - Community reputation scoring and SBT management. |
| [`@aastar/analytics`](./@aastar/analytics/) | **Metrics** - Real-time ecosystem monitoring and data retrieval. |
| [`@aastar/dapp`](./@aastar/dapp/) | **React Hooks** - Ready-to-use hooks for frontend integration. |

---

## 🚀 Installation & Quick Start

```bash
pnpm add @aastar/sdk viem
```

### 1. Initialize Client
```typescript
import { createPublicClient, createWalletClient, http } from 'viem';
import { sepolia } from 'viem/chains';
import { createCommunityClient, createOperatorClient } from '@aastar/sdk';

const publicClient = createPublicClient({ chain: sepolia, transport: http() });
const walletClient = createWalletClient({ chain: sepolia, transport: http() });

const community = createCommunityClient({ publicClient, walletClient });
```

### 2. "Pre-check" Pattern
Avoid reverts and save gas by checking requirements off-chain first.
```typescript
const check = await community.checkLaunchRequirements(myAddress, parseEther("33"));
if (check.success) {
    await community.launchCommunity({ name: "My DAO" });
}
```

---

## 🏗️ Core Scenarios

### 🏛️ For Community Owners
Manage your community registry, configure SBT rules, and handle user onboarding.
- [Registry Actions](./@aastar/sdk/type-aliases/RegistryActions.md)
- [SBT Actions](./@aastar/sdk/type-aliases/SBTActions.md)

### ⚙️ For Operators
Onboard as a Paymaster operator, stake GToken, and manage your collateral.
- [Operator Client](./@aastar/sdk/classes/OperatorClient.md)
- [Staking Actions](./@aastar/sdk/type-aliases/StakingActions.md)

### 📊 For Finance & Analytics
Monitor tokenomics, handle GToken staking, and track ecosystem metrics.
- [Finance Client](./@aastar/tokens/classes/FinanceClient.md)
- [Analytics Client](./@aastar/analytics/classes/AnalyticsClient.md)

---

## 📚 Complete Examples

Practical implementations for common scenarios:
- [Operator Flow](../examples/operator-flow)
- [Community Flow](../examples/community-flow)
- [End User Flow](../examples/enduser-flow)

---

## 🔧 TypeScript Support

All packages are written in TypeScript with full type definitions.
```typescript
import type { 
  SupportedNetwork, 
  ClientConfig, 
  RoleRequirement
} from '@aastar/core';
```

---

## 🛡️ Error Handling

```typescript
import { AAStarError } from '@aastar/sdk';

try {
  // ... SDK call
} catch (error) {
  if (error instanceof AAStarError) {
    console.error(error.code, error.message);
  }
}
```
