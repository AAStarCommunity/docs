# API Errors

This page documents common errors and exception patterns you may encounter when using the AAStar SDK.

## Contract Errors

These errors are thrown by the underlying smart contracts and can be caught via `viem`.

### Registry Errors
- `Registry: already registered`: Thrown when trying to register an address that is already in the registry.
- `Registry: caller not authorized`: Thrown when a non-admin attempts to perform admin-only actions.

### SuperPaymaster Errors
- `SuperPaymaster: insufficient balance`: The operator's deposit in the EntryPoint is insufficient to sponsor the transaction.
- `SuperPaymaster: user not eligible`: The user does not meet the criteria (e.g., credit limit, reputation) to receive sponsorship.
- `SuperPaymaster: signature expired`: The signed sponsorship data has passed its expiration window.

### Token Errors
- `GToken: minting disabled`: Thrown when attempting to mint while minting is globally paused.
- `MySBT: already minted`: Each user can typically only hold one SBT per community.

## SDK Validation Errors

These errors are thrown by the SDK before a transaction is sent to the blockchain.

### `ValidationError`
Thrown when parameters passed to a function fail basic validation (e.g., invalid address format, negative amounts).

### `ChainMismatchError`
Thrown when the client's configured chain does not match the network expected by the action.

## Troubleshooting

### Transaction Reverted
If a transaction reverts, check the `reason` field in the error object. AAStar uses descriptive revert strings to help you identify the issue.

### Gas Estimation Failed
Gas estimation often fails if the transaction would revert. Double-check your account balance and contract permissions before sending.
