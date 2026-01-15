# Examples

Complete examples demonstrating various AAStar SDK features.

## Table of Contents

1. [L1 API Demo](#l1-api-demo) - Low-level contract interactions
2. [L2 Clients Demo](#l2-clients-demo) - Role-based clients  
3. [L3 User Onboarding](#l3-user-onboarding) - User onboarding flow
4. [Gasless Transactions](#gasless-transactions) - Gasless transaction examples
5. [SuperPaymaster](#superpaymaster) - SuperPaymaster (AOA+) examples
6. [SDK Demo](#sdk-demo) - Complete SDK usage guide

---

## L1 API Demo

Low-level contract interactions using Actions.

**Developer Level**: 🔧 Low-Level

**Features**:
- Direct contract calls using viem-style actions
- Token operations with `tokenActions()`
- Registry interactions with `registryActions()`
- Staking operations with `stakingActions()`

**File**: [`l1-api-demo.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/l1-api-demo.ts)

**Code Preview**:
```typescript
import { tokenActions, registryActions, stakingActions } from '@aastar/core';

const client = createPublicClient({...})
  .extend(tokenActions())
  .extend(registryActions())
  .extend(stakingActions());

// Token operations
await client.tokenTransfer({ token, to, amount });
await client.tokenApprove({ token, spender, amount });

// Registry operations
await client.registryRegisterRole({ roleId, data });
await client.registryHasRole({ user, roleId });

// Staking operations
await client.stakeGToken({ amount });
```

[View Full Code →](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/l1-api-demo.ts)

---

## L2 Clients Demo

Role-based clients with business logic.

**Developer Level**: 🚀 High-Level

**Features**:
- Operator client for node operators
- Community client for DAO admins
- End user client for gasless transactions
- Admin client for protocol management

**File**: [`l2-clients-demo.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/l2-clients-demo.ts)

**Code Preview**:
```typescript
import { 
  createOperatorClient,
  createCommunityClient,
  createEndUserClient,
  createAdminClient
} from '@aastar/sdk';

// Operator operations
const operator = createOperatorClient({...});
await operator.onboardFully({
  stakeAmount: parseEther('100'),
  depositAmount: parseEther('10'),
  roleId: ROLE_PAYMASTER_SUPER
});

// Community operations
const community = createCommunityClient({...});
await community.registerCommunity({
  name: 'My Community',
  description: 'A great community'
});

// End user operations
const user = createEndUserClient({...});
await user.joinCommunity({ communityAddress });
```

[View Full Code →](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/l2-clients-demo.ts)

---

## L3 User Onboarding

Complete user onboarding flow.

**Developer Level**: 🚀 High-Level

**Features**:
- Account creation
- SBT minting
- Community joining
- Credit score initialization
- Reputation management

**File**: [`l3-user-onboarding.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/l3-user-onboarding.ts)

**Code Preview**:
```typescript
import { createEndUserClient } from '@aastar/sdk';
import { ReputationClient } from '@aastar/identity';

const user = createEndUserClient({...});

// Join community
await user.joinCommunity({ communityAddress });

// Get SBT
const sbtId = await user.getMySBTId();
console.log('SBT ID:', sbtId);

// Check reputation
const reputation = new ReputationClient(publicClient, reputationAddress);
const score = await reputation.getGlobalReputation(userAddress);
console.log('Reputation Score:', score);

// Get credit limit
const creditLimit = await reputation.getCreditLimit(userAddress);
console.log('Credit Limit:', formatEther(creditLimit), 'ETH');
```

[View Full Code →](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/l3-user-onboarding.ts)

---

## Gasless Transactions

Gasless transaction examples using SuperPaymaster.

**Developer Level**: 🚀 High-Level

**Features**:
- Prepare gasless environment
- Check eligibility for gasless transactions
- Submit gasless transactions
- Monitor gas sponsorship

**Files**:
- [`prepare-gasless.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/prepare-gasless.ts) - Setup environment
- [`simple-gasless-demo.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/simple-gasless-demo.ts) - Basic demo

**Code Preview**:
```typescript
import { SuperPaymasterClient } from '@aastar/paymaster';
import { createEndUserClient } from '@aastar/sdk';

const user = createEndUserClient({...});

// Check eligibility
const eligible = await SuperPaymasterClient.checkEligibility({
  client: user,
  userAddress: user.account.address,
  communityAddress
});

console.log('Eligible for gasless:', eligible);

// Submit gasless transaction
if (eligible) {
  const txHash = await SuperPaymasterClient.submitGaslessTransaction({
    client: user,
    to: recipientAddress,
    data: callData
  });
  
  console.log('Gasless transaction submitted:', txHash);
}
```

[View Full Code →](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/simple-gasless-demo.ts)

---

## SuperPaymaster

SuperPaymaster (AOA+) advanced examples.

**Developer Level**: 🚀 High-Level + 🔧 Low-Level

**Features**:
- Operator configuration
- Gas token management
- Revenue withdrawal
- DVT integration
- SuperPaymaster admin operations

**File**: [`simple-superpaymaster-demo.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/simple-superpaymaster-demo.ts)

**Code Preview**:
```typescript
import { createOperatorClient } from '@aastar/sdk';
import { SuperPaymasterAdminClient } from '@aastar/paymaster';

const operator = createOperatorClient({...});

// Configure operator
await operator.configureOperator({
  xPNTsToken: xPNTsTokenAddress,
  treasury: treasuryAddress,
  exchangeRate: parseEther('1.0')
});

// Check readiness
const status = await operator.checkReadiness();
console.log('Operator Status:', status);
// {
//   isRegistered: true,
//   isConfigured: true,
//   collateralBalance: 10000000000000000000n,
//   isPaused: false,
//   roleStatus: true
// }

// Deposit to SuperPaymaster
await operator.deposit({
  amount: parseEther('10')
});
```

[View Full Code →](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/simple-superpaymaster-demo.ts)

---

## SDK Demo

Complete SDK usage guide with developer documentation.

**Developer Level**: 🔧 Low-Level + 🚀 High-Level + 🎨 Frontend

**Directory**: [`sdk-demo/`](https://github.com/AAStarCommunity/aastar-sdk/tree/main/examples/sdk-demo)

**Files**:
- [`DEVELOPER_GUIDE.md`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/sdk-demo/DEVELOPER_GUIDE.md) - Comprehensive developer guide
- [`README.md`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/sdk-demo/README.md) - Quick start guide
- [`usage.ts`](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/sdk-demo/usage.ts) - Complete usage examples

**Topics Covered**:
- Package installation and setup
- Low-level API usage (Actions, ABIs)
- High-level API usage (Clients, FinanceClient)
- Frontend integration (React hooks)
- Error handling
- TypeScript best practices
- Testing and debugging

[View SDK Demo Directory →](https://github.com/AAStarCommunity/aastar-sdk/tree/main/examples/sdk-demo)

---

## Running Examples

### Prerequisites

```bash
# Install dependencies
pnpm install

# Setup environment
cp .env.example .env
# Edit .env with your configuration
```

### Environment Variables

Create a `.env` file with the following:

```bash
# Network
SEPOLIA_RPC_URL=https://rpc.sepolia.org
CHAIN_ID=11155111

# Private Keys (for testing only, never commit!)
OPERATOR_KEY=0x...
COMMUNITY_KEY=0x...
USER_KEY=0x...
ADMIN_KEY=0x...

# Contract Addresses (auto-loaded from @aastar/core)
# No need to set manually unless using custom deployments
```

### Run Examples

```bash
# Run L1 API demo
npx tsx examples/l1-api-demo.ts

# Run L2 clients demo
npx tsx examples/l2-clients-demo.ts

# Run L3 user onboarding
npx tsx examples/l3-user-onboarding.ts

# Run gasless demo (prepare first)
npx tsx examples/prepare-gasless.ts
npx tsx examples/simple-gasless-demo.ts

# Run SuperPaymaster demo
npx tsx examples/simple-superpaymaster-demo.ts
```

---

## Example Use Cases

### For Low-Level Developers 🔧

**Scenario**: Building a custom staking contract that integrates with GToken

```typescript
import { tokenActions, CORE_ADDRESSES } from '@aastar/core';

const client = createPublicClient({...}).extend(tokenActions());

// Check allowance
const allowance = await client.tokenAllowance({
  token: CORE_ADDRESSES.gToken,
  owner: userAddress,
  spender: myStakingContract
});

// If allowance insufficient, request approval
if (allowance < stakeAmount) {
  await client.tokenApprove({
    token: CORE_ADDRESSES.gToken,
    spender: myStakingContract,
    amount: stakeAmount
  });
}

// Transfer tokens to your contract
await client.tokenTransfer({
  token: CORE_ADDRESSES.gToken,
  to: myStakingContract,
  amount: stakeAmount
});
```

### For High-Level Developers 🚀

**Scenario**: Building a dApp for community management

```typescript
import { createCommunityClient, createEndUserClient } from '@aastar/sdk';

const community = createCommunityClient({...});
const user = createEndUserClient({...});

// Community admin: Register community
await community.registerCommunity({
  name: 'Builders DAO',
  description: 'A community for Web3 builders'
});

// End user: Join community
await user.joinCommunity({ communityAddress });

// Check membership
const sbtId = await user.getMySBTId();
console.log('Joined community, SBT ID:', sbtId);
```

### For Frontend Developers 🎨

**Scenario**: Building a user dashboard with credit scores

```typescript
import { useCreditScore } from '@aastar/dapp';
import { useAccount } from 'wagmi';

function UserDashboard() {
  const { address } = useAccount();
  const { score, loading, error } = useCreditScore(address);
  
  if (loading) return <Spinner />;
  if (error) return <Error message={error.message} />;
  
  return (
    <div>
      <h2>Your Credit Score</h2>
      <CreditScoreDisplay score={score} />
      <GaslessTransactionButton eligible={score > 50} />
    </div>
  );
}
```

---

## More Resources

- **[API Documentation](../api/)** - Complete API reference
- **[Getting Started Guide](../guide/getting-started)** - Quick start tutorial
- **[Developer Guide](https://github.com/AAStarCommunity/aastar-sdk/blob/main/examples/sdk-demo/DEVELOPER_GUIDE.md)** - In-depth developer guide
- **[GitHub Repository](https://github.com/AAStarCommunity/aastar-sdk)** - Source code and examples

---

## Contributing

Want to add more examples? Contributions are welcome!

1. Fork the repository
2. Create your example file in `examples/`
3. Add documentation to this README
4. Submit a pull request

**[🤝 Contributing Guide →](https://github.com/AAStarCommunity/aastar-sdk/blob/main/CONTRIBUTING.md)**

---

## Support

- **GitHub Issues**: [Report bugs](https://github.com/AAStarCommunity/aastar-sdk/issues)
- **Documentation**: [docs.aastar.io](https://docs.aastar.io)
