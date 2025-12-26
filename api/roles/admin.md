# Admin API Reference

Complete API reference for protocol administrators.

## Overview

Admins are protocol-level administrators who manage global parameters, handle emergencies, and ensure protocol health. The Admin API enables you to:

- Slash misbehaving operators
- Manage Global Reputation (DVT/Reputation System)
- Configure Paymaster V4 (AOA+) gas tokens and SBTs
- Manage SuperPaymaster (AOA) dynamic pricing
- Emergency pause/unpause
- Manage protocol upgrades

## Prerequisites

- Admin private key (multi-sig recommended)
- Understanding of protocol economics
- Emergency response procedures

## Client Creation

### `createAdminClient(config)`

Create a client with admin-specific actions.

**Signature:**
```typescript
function createAdminClient(config: ClientConfig): AdminClient
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| config.chain | `Chain` | Viem chain object |
| config.transport | `Transport` | Viem transport |
| config.account | `Account` | Admin account (multi-sig recommended) |

**Returns:**

`AdminClient` - Extended wallet client with admin actions

**Example:**
```typescript
import { createAdminClient } from '@aastar/core';
import { http } from 'viem';
import { sepolia } from 'viem/chains';
import { privateKeyToAccount } from 'viem/accounts';

const admin = createAdminClient({
  chain: sepolia,
  transport: http(process.env.RPC_URL),
  account: privateKeyToAccount(process.env.ADMIN_KEY),
});
```

---

## Actions

### `slashOperator(params)`

Slash an operator for misbehavior.

**Context:** Use when an operator violates protocol rules or provides poor service.

**Signature:**
```typescript
slashOperator(params: SlashParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.operator | `Address` | Operator address to slash |
| params.amount | `bigint` | Amount to slash (in wei) |
| params.reason | `string` | Reason for slashing |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
await admin.slashOperator({
  operator: operatorAddress,
  amount: parseEther('10'),
  reason: 'Repeated service failures',
});
```

**Errors:**

| Error | Cause | Solution |
|-------|-------|----------|
| `Unauthorized` | Not admin | Use admin account |
| `OperatorNotFound` | Invalid operator | Check operator address |
| `InsufficientStake` | Slash amount > stake | Reduce slash amount |

**Events Emitted:**
- `OperatorSlashed(address indexed operator, uint256 amount, string reason)`

---

### `setGlobalParameters(params)`

Update global protocol parameters.

**Context:** Adjust protocol economics and behavior.

**Signature:**
```typescript
setGlobalParameters(params: GlobalParamsParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.exitFee | `bigint` | (Optional) Exit fee in basis points |
| params.minStake | `bigint` | (Optional) Minimum stake amount |
| params.slashingRate | `bigint` | (Optional) Slashing rate in basis points |

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
await admin.setGlobalParameters({
  exitFee: 100n, // 1%
  minStake: parseEther('100'),
  slashingRate: 500n, // 5%
});
```

---

### `pauseProtocol()`

Emergency pause the protocol.

**Context:** Use in case of critical security issues.

**Signature:**
```typescript
pauseProtocol(): Promise<Hash>
```

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
// Emergency pause
await admin.pauseProtocol();
console.log('⚠️ Protocol paused!');
```

**Events Emitted:**
- `ProtocolPaused(address indexed admin, uint256 timestamp)`

---

### `unpauseProtocol()`

Resume protocol operations after pause.

**Signature:**
```typescript
unpauseProtocol(): Promise<Hash>
```

**Returns:**

`Promise<Hash>` - Transaction hash

**Example:**
```typescript
// Resume operations
await admin.unpauseProtocol();
console.log('✅ Protocol resumed');
```

**Events Emitted:**
- `ProtocolUnpaused(address indexed admin, uint256 timestamp)`

---

### `batchUpdateGlobalReputation(params)`

Batch update global reputation for users with consensus proof.

**Signature:**
```typescript
batchUpdateGlobalReputation(params: ReputationUpdateParams): Promise<Hash>
```

**Parameters:**

| Name | Type | Description |
|------|------|-------------|
| params.users | `Address[]` | Array of user addresses |
| params.newScores | `bigint[]` | Array of new reputation scores |
| params.epoch | `uint256` | Update epoch (prevents replay) |
| params.proof | `Hex` | BLS consensus proof |

---

### `PaymasterV4 Configuration`

Manage Paymaster V4 (AOA+) settings.

**Actions:**

| Action | Description |
|--------|-------------|
| `addGasToken(args)` | Add supported ERC20 gas token |
| `addSBT(args)` | Add supported qualification SBT |
| `withdrawPNT(args)` | Withdraw accumulated PNT tokens to treasury |
| `setServiceFeeRate(args)` | Set service fee in basis points |

**Example:**
```typescript
await admin.addGasToken({
  address: paymasterAddress,
  token: GTOKEN_ADDRESS,
});

await admin.withdrawPNT({
  address: paymasterAddress,
  to: treasuryAddress,
  token: GTOKEN_ADDRESS,
  amount: parseEther('1000'),
});
```

---

### `SuperPaymaster Configuration`

Manage SuperPaymaster (AOA) settings.

**Actions:**

| Action | Description |
|--------|-------------|
| `setXPNTsFactory(args)` | Configure factory for dynamic pricing |
| `setOperatorPaused(args)` | Pause/Unpause specific operator |

**Example:**
```typescript
await admin.setXPNTsFactory({
  factory: XPNTS_FACTORY_ADDRESS,
});
```

---

## Complete Workflow Example

```typescript
async function adminWorkflow() {
  const admin = createAdminClient({
    chain: sepolia,
    transport: http(process.env.RPC_URL),
    account: privateKeyToAccount(process.env.ADMIN_KEY),
  });

  // 1. Monitor operator performance
  // ... monitoring logic ...

  // 2. Slash misbehaving operator
  await admin.slashOperator({
    operator: badOperatorAddress,
    amount: parseEther('5'),
    reason: 'Service downtime > 24h',
  });

  // 3. Adjust global parameters
  await admin.setGlobalParameters({
    minStake: parseEther('150'), // Increase minimum stake
  });

  // 4. Emergency pause if needed
  if (criticalIssueDetected) {
    await admin.pauseProtocol();
    // ... fix issue ...
    await admin.unpauseProtocol();
  }
}
```

## Best Practices

1. **Use Multi-Sig**: Admin actions should require multiple signatures
2. **Document Decisions**: Always document parameter changes
3. **Gradual Changes**: Make incremental adjustments to parameters
4. **Emergency Procedures**: Have clear procedures for pause/unpause
5. **Transparency**: Communicate changes to community

## Related APIs

- [Operator API](/api/roles/operator) - For operator management
- [Community API](/api/roles/community) - For community oversight
- [Core Module](/api/modules/core) - Core utilities
