# Community API Reference

Complete API reference for community managers and DAO administrators.

## Overview

Communities are DAOs or organizations that use AAStar infrastructure for member management and gas sponsorship. The Community API enables you to:

- Register and manage communities
- Mint and manage SBTs (Soul-Bound Tokens)
- Configure reputation rules
- Deploy community tokens (xPNTs)
- Manage community settings

## Prerequisites

- Community admin private key
- Understanding of your community structure
- (Optional) IPFS for metadata storage

## Client Creation

### `createCommunityClient(config)`

Create a client with community-specific actions.

**Signature:**
```typescript
function createCommunityClient(config: ClientConfig): CommunityClient
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| config.chain | `Chain` | Viem chain object |
| config.transport | `Transport` | Viem transport |
| config.account | `Account` | Community admin account |

**Returns:**

`CommunityClient` - Extended wallet client with community actions

**Example:**
```typescript
import { createCommunityClient } from '@aastar/core';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

const community = createCommunityClient({
  chain: sepolia,
  transport: http(process.env.RPC_URL),
  account: privateKeyToAccount(process.env.COMMUNITY_KEY),
});
```

---

## Actions

### `registerCommunity(params)`

Register a new community in the AAStar protocol.

**Context:** Use this when creating a new DAO or community that will use AAStar services.

**Signature:**
```typescript
registerCommunity(params: RegisterCommunityParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.name | `string` | Community name |
| params.metadata | `string` | IPFS hash or metadata URL |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
const txHash = await community.registerCommunity({
  name: 'MyAwesomeDAO',
  metadata: 'ipfs://QmXxx...',
});

console.log('Community registered:', txHash);
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `CommunityAlreadyExists` | Name already taken | Choose different name |
| `InvalidMetadata` | Invalid IPFS hash | Check metadata format |

**Events Emitted:**
- `CommunityRegistered(address indexed community, string name)`

---

### `mintSBT(params)`

Mint Soul-Bound Token to a community member.

**Context:** Award SBTs to members for achievements, roles, or membership proof.

**Signature:**
```typescript
mintSBT(params: MintSBTParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.to | `Address` | Recipient address |
| params.tokenId | `bigint` | SBT token ID |
| params.metadata | `string` | (Optional) Token metadata |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
// Mint membership SBT
await community.mintSBT({
  to: memberAddress,
  tokenId: 1n,
  metadata: 'ipfs://QmMembershipBadge...',
});

// Batch mint to multiple members
for (const member of members) {
  await community.mintSBT({
    to: member,
    tokenId: 1n,
  });
}
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `AlreadyOwned` | User already has this SBT | Check ownership first |
| `Unauthorized` | Not community admin | Use admin account |

**Events Emitted:**
- `SBTMinted(address indexed to, uint256 indexed tokenId)`

---

### `setReputationRules(params)`

Configure reputation scoring rules for the community.

**Context:** Define how member reputation is calculated based on various metrics.

**Signature:**
```typescript
setReputationRules(params: ReputationRulesParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.rules | `ReputationRule[]` | Array of reputation rules |

**Type Definitions:**
```typescript
interface ReputationRule {
  metric: string;    // e.g., 'activity', 'contribution'
  weight: number;    // 0-100, total should be 100
  threshold?: bigint; // Optional threshold
}
```

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
await community.setReputationRules({
  rules: [
    { metric: 'activity', weight: 30 },
    { metric: 'contribution', weight: 50 },
    { metric: 'governance', weight: 20 },
  ],
});
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `InvalidWeights` | Weights don't sum to 100 | Adjust weights |
| `TooManyRules` | More than max rules (10) | Reduce number of rules |

---

### `deployXPNTs(params)`

Deploy community-specific xPNTs token.

**Context:** Create a community token for rewards and governance.

**Signature:**
```typescript
deployXPNTs(params: DeployXPNTsParams): Promise<Address>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.name | `string` | Token name |
| params.symbol | `string` | Token symbol |
| params.initialSupply | `bigint` | Initial supply in wei |

**Returns:**

`Promise<Address>` - Deployed token address

**Example:**
```typescript
const tokenAddress = await community.deployXPNTs({
  name: 'MyDAO Points',
  symbol: 'MDP',
  initialSupply: parseEther('1000000'),
});

console.log('xPNTs deployed at:', tokenAddress);
```

---

## Complete Workflow Example

```typescript
import { createCommunityClient } from '@aastar/core';
import { http, parseEther } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

async function communityWorkflow() {
  // 1. Create community client
  const community = createCommunityClient({
    chain: sepolia,
    transport: http(process.env.RPC_URL),
    account: privateKeyToAccount(process.env.COMMUNITY_KEY),
  });

  // 2. Register community
  await community.registerCommunity({
    name: 'DevDAO',
    metadata: 'ipfs://QmCommunityMetadata...',
  });

  // 3. Deploy community token
  const tokenAddress = await community.deployXPNTs({
    name: 'DevDAO Points',
    symbol: 'DDP',
    initialSupply: parseEther('1000000'),
  });

  // 4. Set reputation rules
  await community.setReputationRules({
    rules: [
      { metric: 'code_contributions', weight: 40 },
      { metric: 'community_engagement', weight: 30 },
      { metric: 'governance_participation', weight: 30 },
    ],
  });

  // 5. Mint SBTs to founding members
  const foundingMembers = ['0x...', '0x...', '0x...'];
  for (const member of foundingMembers) {
    await community.mintSBT({
      to: member,
      tokenId: 1n, // Founding member badge
    });
  }

  console.log('Community setup complete!');
}
```

## Best Practices

1. **Clear Naming**: Use descriptive community and token names
2. **Metadata Standards**: Follow IPFS best practices for metadata
3. **Reputation Design**: Start simple, iterate based on feedback
4. **SBT Strategy**: Define clear criteria for each SBT type
5. **Gradual Rollout**: Test with small group before full launch

## Related APIs

- [End User API](/api/roles/enduser) - For community members
- [Operator API](/api/roles/operator) - For gas sponsorship providers
- [Identity Module](/api/modules/identity) - SBT and reputation utilities
