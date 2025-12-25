# API Constants

This page lists the various constants, contract addresses, and role identifiers used throughout the AAStar SDK.

## Network Configurations

The SDK provides built-in support for several networks. You can access these via the `NETWORKS` constant.

| Network | Chain ID | RPC URL (Default) | Block Explorer |
|---------|----------|-------------------|----------------|
| `sepolia` | 11155111 | `https://rpc.sepolia.org` | [Etherscan](https://sepolia.etherscan.io) |
| `anvil` | 31337 | `http://127.0.0.1:8545` | N/A |

## Contract Addresses (Sepolia)

All contract addresses are managed in the `CONTRACT_ADDRESSES` object, serving as the single source of truth.

### Core System
| Contract | Address |
|----------|---------|
| `gToken` | `0x99cCb70646Be7A5aeE7aF98cE853a1EA1A676DCc` |
| `superPaymaster` | `0x7c3c355d9aa4723402bec2a35b61137b8a10d5db` |
| `registry` | `0x49245E1f3c2dD99b3884ffeD410d0605Cf4dC696` |
| `gTokenStaking` | `0xbEbF9b4c6a4cDB92Ac184aF211AdB13a0b9BF6c0` |
| `paymasterFactory` | `0x65Cf6C4ab3d40f3C919b6F3CADC09Efb72817920` |

### Token System
| Contract | Address |
|----------|---------|
| `mySBT` | `0xa4eda5d023ea94a60b1d4b5695f022e1972858e7` |
| `xPNTsFactory` | `0x9dD72cB42427fC9F7Bf0c949DB7def51ef29D6Bd` |

### Official Protocols
| Contract | Address |
|----------|---------|
| `entryPoint` (v0.7) | `0x0000000071727De22E5E9d8BAf0edAc6f37da032` |

## Role Identifiers (Keccak256)

These hashes are used to identify roles within the `Registry` system.

| Role | Hash |
|------|------|
| `ROLE_ENDUSER` | `0x0c34ecc7...)` |
| `ROLE_COMMUNITY` | `0xe94d78b6...)` |
| `ROLE_PAYMASTER_AOA` | `0xf86d1397...)` |
| `ROLE_PAYMASTER_SUPER` | `0x20245167...)` |

## Service Parameters

- `SERVICE_FEE_RATE`: `200` (2.0%)
- `MAX_SERVICE_FEE`: `1000` (10.0%)
- `BPS_DENOMINATOR`: `10000` (100% = 10000)

## Node Stake Amounts (sGT)

| Node Type | Minimum Stake |
|-----------|---------------|
| `LITE` | 30 |
| `STANDARD` | 100 |
| `SUPER` | 300 |
| `ENTERPRISE` | 1000 |
