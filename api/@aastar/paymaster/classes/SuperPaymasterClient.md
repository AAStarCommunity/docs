Defined in: [V4/SuperPaymasterClient.ts:19](https://github.com/AAStarCommunity/aastar-sdk/blob/7f5ed5aca89613e9b5624bea21ce22cf3df12963/packages/paymaster/src/V4/SuperPaymasterClient.ts#L19)

SuperPaymasterClient
High-level API for SuperPaymaster operations, including dynamic gas estimation.

## Constructors

### Constructor

> **new SuperPaymasterClient**(): `SuperPaymasterClient`

#### Returns

`SuperPaymasterClient`

## Methods

### submitGaslessTransaction()

> `static` **submitGaslessTransaction**(`client`, `wallet`, `aaAddress`, `entryPoint`, `bundlerUrl`, `config`): `Promise`\<`` `0x${string}` ``\>

Defined in: [V4/SuperPaymasterClient.ts:25](https://github.com/AAStarCommunity/aastar-sdk/blob/7f5ed5aca89613e9b5624bea21ce22cf3df12963/packages/paymaster/src/V4/SuperPaymasterClient.ts#L25)

Submit a gasless transaction using SuperPaymaster.
Automatically handles gas estimation with a smart efficiency buffer.

#### Parameters

| Parameter | Type |
| ------ | ------ |
| `client` | `any` |
| `wallet` | `any` |
| `aaAddress` | `` `0x${string}` `` |
| `entryPoint` | `` `0x${string}` `` |
| `bundlerUrl` | `string` |
| `config` | [`GaslessTransactionConfig`](../type-aliases/GaslessTransactionConfig.md) |

#### Returns

`Promise`\<`` `0x${string}` ``\>
