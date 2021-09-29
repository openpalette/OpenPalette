import { createAddress } from '.';
import { Address } from './address';

export interface IERC721Contract {
  ownerOf(tokenId: number): Promise<Address>;
  balanceOf(owner: Address): Promise<number>;
  tokenOfOwnerByIndex(owner: Address, index: number): Promise<number>;
}

/**
 * Returns the quantity of tokens owned by `address`
 */
export async function getBalance(
  contract: IERC721Contract,
  owner: Address
): Promise<number> {
  let balance: number;

  try {
    balance = await contract.balanceOf(owner);
  } catch (e) {
    balance = 0;
  }

  return balance;
}

/**
 * Returns the owner of a given `tokenId`
 */
export async function getOwner(
  contract: IERC721Contract,
  tokenId: number
): Promise<Address | undefined> {
  let owner: string;

  try {
    owner = await contract.ownerOf(tokenId);
  } catch (e) {
    return undefined;
  }

  return createAddress(owner);
}

/**
 * Returns an array of all tokens owned by `owner`.
 *
 * If fetching some tokens fails while others succeed, this function
 * will return the tokens that were fetched successfully.
 */
export async function getTokensForOwner(
  contract: IERC721Contract,
  owner: Address
) {
  const balance = await getBalance(contract, owner);

  const promises: Promise<number>[] = [];

  for (let index = 0; index < balance; index++) {
    promises.push(contract.tokenOfOwnerByIndex(owner, index));
  }

  const settled = await Promise.allSettled(promises);

  return settled.flatMap(item =>
    item.status === 'fulfilled' ? [item.value] : []
  );
}
