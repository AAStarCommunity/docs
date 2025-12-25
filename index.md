---
layout: home

hero:
  name: AAStar SDK
  text: Build Your Own Protocol
  tagline: Account Abstraction infrastructure with SuperPaymaster, EOA Rainbow Bridge, and Community Management
  image:
    src: /aastar-logo.png
    alt: AAStar SDK
  actions:
    - theme: brand
      text: Get Started
      link: /guide/getting-started
    - theme: alt
      text: View on GitHub
      link: https://github.com/AAStarCommunity/aastar-sdk

features:
  - icon: 🚀
    title: Gasless Transactions
    details: SuperPaymaster (AOA+) enables users to send transactions without holding native tokens for gas fees.
  
  - icon: 🌈
    title: EOA Rainbow Bridge
    details: Seamlessly bridge between traditional EOA wallets and smart contract accounts.
  
  - icon: 🏛️
    title: Community Management
    details: Built-in tools for managing DAOs, communities, and reputation systems.
  
  - icon: 🎯
    title: Reputation System
    details: On-chain reputation tracking with customizable rules and scoring mechanisms.
  
  - icon: 🔐
    title: Account Abstraction
    details: Full ERC-4337 support with advanced features like session keys and social recovery.
  
  - icon: ⚡
    title: Multi-Chain Ready
    details: Deploy on Ethereum, Optimism, and other EVM-compatible chains.
---

<p align="center">
  <img src="https://img.shields.io/badge/License-MIT-yellow.svg" alt="License: MIT" style="display:inline-block; margin-right: 10px;" />
  <img src="https://img.shields.io/badge/TypeScript-5.0-blue" alt="TypeScript" style="display:inline-block; margin-right: 10px;" />
  <img src="https://img.shields.io/badge/Status-0.14.0-green" alt="Status" style="display:inline-block;" />
</p>

<BigFeatures />

## Quick Example

```typescript
import { createOperatorClient, CONTRACTS } from '@aastar/core';
import { parseEther } from 'viem';
import { sepolia } from 'viem/chains';

// Create operator client
const operator = createOperatorClient({
  chain: sepolia,
  transport: http(process.env.RPC_URL),
  account: privateKeyToAccount(process.env.OPERATOR_KEY),
});

// Stake GTokens
await operator.stake({
  amount: parseEther('100'),
});

// Deposit to Paymaster
await operator.deposit({
  amount: parseEther('10'),
});
```

## Why AAStar SDK?

AAStar SDK provides a complete infrastructure for building **Your Own Protocol (YOP)** with Account Abstraction. Whether you're building a DAO, a DeFi protocol, or a consumer app, AAStar gives you the tools to:

- **Eliminate gas friction** for your users
- **Manage communities** with on-chain reputation
- **Bridge traditional wallets** to smart accounts
- **Customize gas sponsorship** rules

## Trusted By

Used by developers building the next generation of Web3 applications.

<div class="vp-doc" style="margin-top: 2rem;">
  <a href="/guide/getting-started" class="vp-button brand">Get Started →</a>
</div>
