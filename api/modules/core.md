# @aastar/core

Core configuration, contract addresses, and client creation utilities.

## Installation

```bash
pnpm add @aastar/core viem
```

## Exports

- [Networks](#networks)
- [Contract Addresses](#contract-addresses)
- [Constants](#constants)
- [Client Creation](#client-creation)
- [Branding](#branding)

---

## Networks

Network configuration for supported chains.

### `NETWORKS`

Supported network configurations.

**Type:**
```typescript
const NETWORKS: {
  sepolia: NetworkConfig;
  anvil: NetworkConfig;
}
```

**NetworkConfig:**
```typescript
interface NetworkConfig {
  chainId: number;
  name: string;
  rpcUrl: string;
  blockExplorer: string;
  nativeCurrency: {
    name: string;
    symbol: string;
    decimals: number;
  };
}
```

**Example:**
```typescript
import { NETWORKS } from '@aastar/core';

console.log(NETWORKS.sepolia.chainId); // 11155111
console.log(NETWORKS.sepolia.rpcUrl);  // 'https://rpc.sepolia.org'
```

---

### `getNetwork(network)`

Get network configuration.

**Signature:**
```typescript
function getNetwork(network: SupportedNetwork): NetworkConfig
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| network | `'sepolia' \| 'anvil'` | Network name |

**Returns:** `NetworkConfig`

**Example:**
```typescript
import { getNetwork } from '@aastar/core';

const network = getNetwork('sepolia');
console.log(network.name); // 'Sepolia'
```

---

### `getRpcUrl(network)`

Get RPC URL for a network.

**Signature:**
```typescript
function getRpcUrl(network: SupportedNetwork): string
```

**Returns:** RPC URL string

**Example:**
```typescript
import { getRpcUrl } from '@aastar/core';

const rpcUrl = getRpcUrl('sepolia');
// 'https://rpc.sepolia.org'
```

---

### `getBlockExplorer(network)`

Get block explorer URL.

**Signature:**
```typescript
function getBlockExplorer(network: SupportedNetwork): string
```

**Returns:** Block explorer base URL

**Example:**
```typescript
import { getBlockExplorer } from '@aastar/core';

const explorer = getBlockExplorer('sepolia');
// 'https://sepolia.etherscan.io'
```

---

### `getTxUrl(network, txHash)`

Get transaction URL on block explorer.

**Signature:**
```typescript
function getTxUrl(network: SupportedNetwork, txHash: string): string
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| network | `SupportedNetwork` | Network name |
| txHash | `string` | Transaction hash |

**Returns:** Full transaction URL

**Example:**
```typescript
import { getTxUrl } from '@aastar/core';

const url = getTxUrl('sepolia', '0x123...');
// 'https://sepolia.etherscan.io/tx/0x123...'
```

---

### `getAddressUrl(network, address)`

Get address URL on block explorer.

**Signature:**
```typescript
function getAddressUrl(network: SupportedNetwork, address: string): string
```

**Parameters:**
| Name | Type | Description |
|------|------|-------------|
| network | `SupportedNetwork` | Network name |
| address | `string` | Contract or wallet address |

**Returns:** Full address URL

**Example:**
```typescript
import { getAddressUrl } from '@aastar/core';

const url = getAddressUrl('sepolia', '0xabc...');
// 'https://sepolia.etherscan.io/address/0xabc...'
```

---

### `getChainId(network)`

Get chain ID for a network.

**Signature:**
```typescript
function getChainId(network: SupportedNetwork): number
```

**Returns:** Chain ID number

**Example:**
```typescript
import { getChainId } from '@aastar/core';

const chainId = getChainId('sepolia'); // 11155111
```

---

## Contract Addresses

### `CONTRACTS`

Contract addresses for all supported networks.

**Structure:**
```typescript
const CONTRACTS: {
  sepolia: {
    registry: Address;
    superPaymaster: Address;
    gToken: Address;
    gTokenStaking: Address;
    // ... more contracts
  };
  anvil: {
    // Same structure
  };
}
```

**Example:**
```typescript
import { CONTRACTS } from '@aastar/core';

const registryAddress = CONTRACTS.sepolia.registry;
const paymasterAddress = CONTRACTS.sepolia.superPaymaster;
```

**Available Contracts:**
- `registry` - Main registry contract
- `superPaymaster` - SuperPaymaster (AOA+)
- `gToken` - GToken ERC20
- `gTokenStaking` - GToken staking contract
- `xPNTsToken` - xPNTs token
- `sbtToken` - Soul-Bound Token

---

## Constants

Protocol constants and role identifiers.

### Fee Constants

```typescript
import {
  SERVICE_FEE_RATE,    // 200 (2%)
  MAX_SERVICE_FEE,     // 1000 (10%)
  BPS_DENOMINATOR,     // 10000 (100%)
} from '@aastar/core';
```

### Default Amounts

```typescript
import {
  DEFAULT_GAS_TOKEN_MINT_AMOUNT,  // "100"
  DEFAULT_USDT_MINT_AMOUNT,       // "10"
  TEST_ACCOUNT_POOL_SIZE,         // 20
} from '@aastar/core';
```

### Node Stake Amounts

```typescript
import { NODE_STAKE_AMOUNTS } from '@aastar/core';

console.log(NODE_STAKE_AMOUNTS.LITE);       // 30 sGT
console.log(NODE_STAKE_AMOUNTS.STANDARD);   // 100 sGT
console.log(NODE_STAKE_AMOUNTS.SUPER);      // 300 sGT
console.log(NODE_STAKE_AMOUNTS.ENTERPRISE); // 1000 sGT
```

### Role Identifiers

Keccak256 hashes for access control roles.

```typescript
import {
  ROLE_ENDUSER,
  ROLE_COMMUNITY,
  ROLE_PAYMASTER_AOA,
  ROLE_PAYMASTER_SUPER,
  ROLE_KMS,
  ROLE_ANODE,
} from '@aastar/core';
```

---

## Client Creation

Create role-specific clients with extended actions.

### `createOperatorClient(config)`

Create client for Paymaster operators.

**Signature:**
```typescript
function createOperatorClient(config: ClientConfig): OperatorClient
```

**Parameters:**
```typescript
interface ClientConfig {
  chain: Chain;
  transport: Transport;
  account: Account;
}
```

**Returns:** `OperatorClient` with operator actions

**Example:**
```typescript
import { createOperatorClient } from '@aastar/core';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

const operator = createOperatorClient({
  chain: sepolia,
  transport: http(process.env.RPC_URL),
  account: privateKeyToAccount(process.env.OPERATOR_KEY),
});

// Available actions:
await operator.stake({ amount: parseEther('100') });
await operator.deposit({ amount: parseEther('10') });
await operator.withdraw({ amount: parseEther('5') });
```

**See:** [Operator API](/api/roles/operator)

---

### `createCommunityClient(config)`

Create client for community managers.

**Signature:**
```typescript
function createCommunityClient(config: ClientConfig): CommunityClient
```

**Returns:** `CommunityClient` with community actions

**Example:**
```typescript
import { createCommunityClient } from '@aastar/core';

const community = createCommunityClient({
  chain: sepolia,
  transport: http(),
  account: communityAccount,
});

// Available actions:
await community.registerCommunity({ name: 'MyDAO' });
await community.mintSBT({ to: userAddress, tokenId: 1n });
```

**See:** [Community API](/api/roles/community)

---

### `createEndUserClient(config)`

Create client for end users.

**Signature:**
```typescript
function createEndUserClient(config: ClientConfig): EndUserClient
```

**Returns:** `EndUserClient` with end-user actions

**Example:**
```typescript
import { createEndUserClient } from '@aastar/core';

const user = createEndUserClient({
  chain: sepolia,
  transport: http(),
  account: userAccount,
});

// Available actions:
const credit = await user.getCreditLimit();
await user.repayDebt({ amount: parseEther('1') });
```

**See:** [End User API](/api/roles/enduser)

---

### `createAdminClient(config)`

Create client for protocol administrators.

**Signature:**
```typescript
function createAdminClient(config: ClientConfig): AdminClient
```

**Returns:** `AdminClient` with admin actions

**Example:**
```typescript
import { createAdminClient } from '@aastar/core';

const admin = createAdminClient({
  chain: sepolia,
  transport: http(),
  account: adminAccount,
});

// Available actions:
await admin.slashOperator({ operator: address, amount: parseEther('10') });
await admin.setGlobalParameters({ exitFee: 100n });
```

**See:** [Admin API](/api/roles/admin)

---

## Branding

Brand colors and theme configuration.

```typescript
import { BRAND_COLORS } from '@aastar/core';

console.log(BRAND_COLORS.primary);   // Primary brand color
console.log(BRAND_COLORS.secondary); // Secondary color
```

---

## Complete Example

```typescript
import {
  createOperatorClient,
  CONTRACTS,
  getNetwork,
  getTxUrl,
  SERVICE_FEE_RATE,
} from '@aastar/core';
import { http, parseEther } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

// Get network info
const network = getNetwork('sepolia');
console.log(`Deploying on ${network.name} (Chain ID: ${network.chainId})`);

// Create operator client
const operator = createOperatorClient({
  chain: sepolia,
  transport: http(network.rpcUrl),
  account: privateKeyToAccount(process.env.OPERATOR_KEY),
});

// Use contract addresses
const registryAddress = CONTRACTS.sepolia.registry;
const paymasterAddress = CONTRACTS.sepolia.superPaymaster;

// Perform operations
const stakeTx = await operator.stake({
  amount: parseEther('100'),
});

// Get transaction URL
const txUrl = getTxUrl('sepolia', stakeTx);
console.log('View transaction:', txUrl);

// Use constants
console.log(`Service fee: ${SERVICE_FEE_RATE / 100}%`);
```

---

## Type Definitions

### `SupportedNetwork`

```typescript
type SupportedNetwork = 'sepolia' | 'anvil';
```

### `Address`

```typescript
type Address = `0x${string}`;
```

### `Hex`

```typescript
type Hex = `0x${string}`;
```

---

## Related APIs

- [Operator API](/api/roles/operator)
- [Community API](/api/roles/community)
- [End User API](/api/roles/enduser)
- [Admin API](/api/roles/admin)
- [Account Module](/api/modules/account)
- [Paymaster Module](/api/modules/paymaster)
