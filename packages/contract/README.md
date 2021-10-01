# @openpalette/contract

A library for working with the OpenPalette contract.

```bash
npm install --save @openpalette/contract
```

OR

```bash
yarn add @openpalette/contract
```

## Usage

This library includes utilities for calling the OpenPalette contract, such as the contract adress/ABI and functions for fetching tokens. However, it doesn't include `ethers` directly, so it's up to you to provide the contract object itself.

Here's a minimal TypeScript example of fetching tokens for an address:

> Try it live on [CodeSandbox](https://codesandbox.io/s/fetch-openpalette-tokens-vfk02?file=/src/index.ts)

```ts
import { ethers } from 'ethers';
import detectEthereumProvider from '@metamask/detect-provider';
import {
  ABI,
  CHAIN_ID,
  createAddress,
  IERC721Contract,
  getContractAddress,
  getTokensForOwner,
} from '@openpalette/contract';

async function fetchTokens() {
  const ethereum: any = await detectEthereumProvider();

  await ethereum.enable();

  const provider = new ethers.providers.Web3Provider(ethereum);

  // Get the owner's Address, using `createAddress` for type safety
  const address = createAddress(await provider.getSigner().getAddress());

  // Get the OpenPalette contract, and assert that it's an ERC721Contract
  const contract = new ethers.Contract(
    getContractAddress(CHAIN_ID.MAINNET),
    ABI,
    provider
  ) as ethers.Contract & IERC721Contract;

  return await getTokensForOwner(contract, address);
}
```

For other usage, see below.

### Addresses

For type-safety, we use ["branded types"](https://medium.com/@KevinBGreene/surviving-the-typescript-ecosystem-branding-and-type-tagging-6cf6e516523d) to represent addresses. In TypeScript, you must convert from `string` to a `Address` either by calling these functions, or by asserting with `as`. If you're not using TypeScript, you don't need to do this.

- [createAddress](#createAddress)
- [addressToString](#addressToString)

### Chains

- [CHAIN_ID](#CHAIN_ID)

### Contract Metadata

To call the OpenPalette contract, you'll need its ABI and address.

- [ABI](#ABI)
- [getContractAddress](#getContractAddress)
- [setContractAddress](#setContractAddress)

### Contract API

These utility functions simplify making contract API calls. These functions _do not throw errors_ in order to simplify common operations. If you need to handle specific errors, you should call the contract APIs directly instead.

- [getOwner](#getOwner)
- [getBalance](#getBalance)
- [getTokensForOwner](#getTokensForOwner)

---

## API

### `createAddress`

Creates a branded `Address` string. Also does minimal address validation.

**Type**: `function createAddress(string: string): Address`

#### Example

```ts
import { createAddress } from '@openpalette/contract';

console.log(createAddress('0x5BF4be9de72713bFE39A30EbE0691afd5fb7413a'));
// => "0x5BF4be9de72713bFE39A30EbE0691afd5fb7413a"
```

### `addressToString`

Converts from `Address` to `string`.

**Type**: `function addressToString(address: Address): string`

#### Example

```ts
import { createAddress, addressToString } from '@openpalette/contract';

const address = createAddress('0x5BF4be9de72713bFE39A30EbE0691afd5fb7413a');
console.log(addressToString(address)); // => "'0x5BF4be9de72713bFE39A30EbE0691afd5fb7413a'"
```

### `CHAIN_ID`

Types and constants for working with Ethereum chains.

```ts
export type ChainId = '0x1' | '0x4';

export const CHAIN_ID = {
  MAINNET: '0x1' as const,
  RINKEBY: '0x4' as const,
};
```

### `ABI`

The contract ABI.

**Type**: `string[]`

### `getContractAddress`

Get the OpenPalette contract address for the given `chainId`.

**Type**: `function getContractAddress(chainId: ChainId): Address`

### `setContractAddress`

Set the OpenPalette contract address for the given `chainId`.

This is useful if you need to overwrite the default addresses.

**Type**: `function setContractAddress(chainId: ChainId): Address`

### `getOwner`

Get the address of the owner of `tokenId`.

If an error is thrown internally, returns `undefined`.

**Type**: `function getOwner(contract: IERC721Contract, tokenId: number): Promise<Address | undefined>`

### `getBalance`

Get the amount of tokens owned by `owner`.

If an error is thrown internally, returns `0`.

**Type**: `function getBalance(contract: IERC721Contract, owner: Address): Promise<number>`

### `getTokensForOwner`

Get all tokens owned by `owner`.

Each token must be fetched individually, and fetching individual tokens may fail. This returns an array containing every token fetched successfully.

**Type**: `function getTokensForOwner(contract: IERC721Contract, tokenId: number): Promise<number[]>`
