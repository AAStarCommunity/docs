# @aastar/dapp

React hooks and utilities for DApp integration.

## Installation

```bash
pnpm add @aastar/dapp react viem
```

## Overview

The DApp module provides:
- React hooks for AAStar SDK
- Wallet connection utilities
- State management
- UI components integration

---

## Hooks

### `useAAStar(config)`

Main hook for AAStar SDK integration.

**Signature:**
```typescript
function useAAStar(config: AAStarConfig): AAStarContext
```

**Parameters:**
```typescript
interface AAStarConfig {
  network: SupportedNetwork;
  rpcUrl: string;
}
```

**Returns:**
```typescript
interface AAStarContext {
  client: WalletClient | null;
  account: Address | null;
  connect: () => Promise<void>;
  disconnect: () => void;
  isConnected: boolean;
}
```

**Example:**
```typescript
import { useAAStar } from '@aastar/dapp';

function MyComponent() {
  const { client, account, connect, disconnect, isConnected } = useAAStar({
    network: 'sepolia',
    rpcUrl: 'https://rpc.sepolia.org',
  });

  return (
    <div>
      {isConnected ? (
        <>
          <p>Connected: {account}</p>
          <button onClick={disconnect}>Disconnect</button>
        </>
      ) : (
        <button onClick={connect}>Connect Wallet</button>
      )}
    </div>
  );
}
```

---

## Complete DApp Example

```typescript
import { useAAStar } from '@aastar/dapp';
import { createEndUserClient } from '@aastar/core';
import { useState } from 'react';

function GaslessDApp() {
  const { client, account, connect, isConnected } = useAAStar({
    network: 'sepolia',
    rpcUrl: process.env.NEXT_PUBLIC_RPC_URL,
  });

  const [credit, setCredit] = useState<bigint>(0n);

  const checkCredit = async () => {
    if (!client || !account) return;

    const user = createEndUserClient({
      chain: sepolia,
      transport: http(),
      account,
    });

    const limit = await user.getCreditLimit();
    setCredit(limit);
  };

  return (
    <div>
      {!isConnected ? (
        <button onClick={connect}>Connect Wallet</button>
      ) : (
        <>
          <p>Account: {account}</p>
          <button onClick={checkCredit}>Check Credit</button>
          <p>Credit: {formatEther(credit)} ETH</p>
        </>
      )}
    </div>
  );
}
```

---

## Related APIs

- [Core Module](/api/modules/core) - Client creation
- [End User API](/api/roles/enduser) - User operations
