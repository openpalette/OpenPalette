import { BigNumber } from '@ethersproject/bignumber';
import { Address, createAddress, getBalance, getOwner } from '..';
import { getTokensForOwner, IERC721Contract } from '../functions';

const ownerWith3 = createAddress('0xA');
const ownerWith1 = createAddress('0xB');
const ownerWith0 = createAddress('0xC');

const tokens: Map<Address, BigNumber[]> = new Map([
  [ownerWith1, [BigNumber.from(4)]],
  [ownerWith3, [BigNumber.from(0), BigNumber.from(1), BigNumber.from(2)]],
]);

type MockContractParameters = {
  alwaysThrowNetworkError?: boolean;
};

const createMockContract = ({
  alwaysThrowNetworkError,
}: MockContractParameters = {}): IERC721Contract => ({
  balanceOf: async owner => {
    if (alwaysThrowNetworkError) throw new Error('Network Error');

    const tokensForOwner = tokens.get(owner);

    if (!tokensForOwner) return BigNumber.from(0);

    return BigNumber.from(tokensForOwner.length);
  },

  ownerOf: async tokenId => {
    if (alwaysThrowNetworkError) throw new Error('Network Error');

    const found = [...tokens.keys()].map(createAddress).find(key => {
      const list = tokens.get(key) ?? [];

      return list
        .map((bn: BigNumber) => bn.toNumber())
        .includes(tokenId.toNumber());
    });

    if (!found) throw new Error('ERC721: owner query for nonexistent token');

    return found;
  },

  tokenOfOwnerByIndex: async (owner, index) => {
    if (alwaysThrowNetworkError) throw new Error('Network Error');

    const tokensForOwner = tokens.get(owner);

    if (!tokensForOwner || tokensForOwner.length <= index.toNumber()) {
      throw new Error('ERC721Enumerable: owner index out of bounds');
    }

    return tokensForOwner[index.toNumber()];
  },
});

it('gets owner', async () => {
  const mockContract = createMockContract();

  const owner = await getOwner(mockContract, 0);
  expect(owner).toEqual(ownerWith3);

  const noOwner = await getOwner(mockContract, 10000);
  expect(noOwner).toEqual(undefined);

  const failingContract = createMockContract({ alwaysThrowNetworkError: true });
  expect(await getOwner(failingContract, 1)).toEqual(undefined);
});

it('gets balance', async () => {
  const mockContract = createMockContract();

  const balanceOf3 = await getBalance(mockContract, ownerWith3);
  expect(balanceOf3).toEqual(3);

  const balanceOf1 = await getBalance(mockContract, ownerWith1);
  expect(balanceOf1).toEqual(1);

  const balanceOf0 = await getBalance(mockContract, ownerWith0);
  expect(balanceOf0).toEqual(0);

  const failingContract = createMockContract({ alwaysThrowNetworkError: true });
  expect(await getBalance(failingContract, ownerWith3)).toEqual(0);
});

it('gets tokens', async () => {
  const mockContract = createMockContract();

  const tokens3 = await getTokensForOwner(mockContract, ownerWith3);
  expect(tokens3).toEqual([0, 1, 2]);

  const tokens1 = await getTokensForOwner(mockContract, ownerWith1);
  expect(tokens1).toEqual([4]);

  const tokens0 = await getTokensForOwner(mockContract, ownerWith0);
  expect(tokens0).toEqual([]);

  const failingContract = createMockContract({ alwaysThrowNetworkError: true });
  expect(await getTokensForOwner(failingContract, ownerWith3)).toEqual([]);
});

export {};
