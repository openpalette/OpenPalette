export type EthereumChainName = 'mainnet' | 'rinkeby';

export const ETHEREUM_CHAIN = {
  '0x1': 'mainnet' as const,
  '0x4': 'rinkeby' as const,
};
