export type ChainId = '0x1' | '0x3' | '0x4' | '0x5' | '0x89' | '0x13881';

export const CHAIN_ID = {
  MAINNET: '0x1',
  ROPSTEN: '0x3',
  RINKEBY: '0x4',
  GOERLI: '0x5',
  POLYGON: '0x89',
  MUMBAI: '0x13881',
} as const;

const CHAIN_NAME = {
  '0x1': 'mainnet',
  '0x3': 'ropsten',
  '0x4': 'rinkeby',
  '0x5': 'goerli',
  '0x89': 'polygon',
  '0x13881': 'mumbai',
} as const;

export function getChainName(chainId: ChainId) {
  return CHAIN_NAME[chainId];
}
