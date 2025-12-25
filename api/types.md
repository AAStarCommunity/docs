# API Types

This page documents the core TypeScript types and interfaces used in the AAStar SDK.

## Network Types

### `SupportedNetwork`
A union of supported network names.
```ts
type SupportedNetwork = 'sepolia' | 'anvil';
```

### `NetworkConfig`
Configuration for a blockchain network.
```ts
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

## Client Configurations

### `AAStarClientConfig`
Base configuration for creating AAStar clients.
```ts
interface AAStarClientConfig {
  chain: Chain;
  transport: Transport;
  account?: Account | Address;
}
```

## Branding Types

### `BrandingConfig`
UI branding configuration for communities.
```ts
interface BrandingConfig {
  logo: string;
  icon: string;
  colors: {
    primary: string;
    secondary: string;
    success: string;
    warning: string;
    error: string;
    // ... gray scales
  };
}
```

## Community Types

### `CommunityConfig`
Configuration for a registered community.
```ts
interface CommunityConfig {
  owner: Address;
  sbt: Address;
  token: Address;
  repRules: ReputationRule[];
}
```
