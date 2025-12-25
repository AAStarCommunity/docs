# Examples

Complete end-to-end examples demonstrating AAStar SDK usage.

## Overview

These examples show real-world workflows for different roles in the AAStar ecosystem.

## By Role

### [Operator Flow](/examples/operator-flow)
Complete workflow for Paymaster operators:
- Stake GTokens
- Deposit funds
- Monitor performance
- Withdraw earnings

### [Community Flow](/examples/community-flow)
DAO management workflow:
- Register community
- Deploy tokens
- Mint SBTs
- Configure reputation

### [End User Flow](/examples/enduser-flow)
User experience workflow:
- Check eligibility
- Send gasless transactions
- Manage credit/debt

## Quick Examples

### Gasless Transaction

```typescript
import { createEndUserClient } from '@aastar/core';

const user = createEndUserClient({...});

// Check eligibility
const eligible = await user.checkEligibility(communityAddress);

if (eligible) {
  // Send gasless transaction
  await sendGaslessTransaction();
}
```

### Community Setup

```typescript
import { createCommunityClient } from '@aastar/core';

const community = createCommunityClient({...});

// Register
await community.registerCommunity({
  name: 'MyDAO',
  metadata: 'ipfs://...',
});

// Mint SBTs
await community.mintSBT({
  to: memberAddress,
  tokenId: 1n,
});
```

## More Examples

Browse the complete examples for detailed implementations:

- [Operator Flow](/examples/operator-flow) - Paymaster operator workflow
- [Community Flow](/examples/community-flow) - DAO management
- [End User Flow](/examples/enduser-flow) - User experience

## Need Help?

- [API Reference](/api/)
- [GitHub Issues](https://github.com/AAStarCommunity/aastar-sdk/issues)
- [Discord](https://discord.gg/aastar)
