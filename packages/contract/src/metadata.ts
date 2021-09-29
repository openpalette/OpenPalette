import { EthereumChainName } from './chain';

export const ABI = [
  'event Approval(address indexed owner, address indexed approved, uint256 indexed tokenId)',
  'event ApprovalForAll(address indexed owner, address indexed operator, bool approved)',
  'event OwnershipTransferred(address indexed previousOwner, address indexed newOwner)',
  'event Transfer(address indexed from, address indexed to, uint256 indexed tokenId)',
  'function approve(address to, uint256 tokenId)',
  'function balanceOf(address owner) view returns (uint256)',
  'function claim()',
  'function getApproved(uint256 tokenId) view returns (address)',
  'function getColor1(uint256 tokenId) pure returns (uint256)',
  'function getColor2(uint256 tokenId) pure returns (uint256)',
  'function getColor3(uint256 tokenId) pure returns (uint256)',
  'function getColor4(uint256 tokenId) pure returns (uint256)',
  'function getColor5(uint256 tokenId) pure returns (uint256)',
  'function getColors(uint256 tokenId) pure returns (string)',
  'function isApprovedForAll(address owner, address operator) view returns (bool)',
  'function name() view returns (string)',
  'function owner() view returns (address)',
  'function ownerClaim(uint256 tokenId)',
  'function ownerOf(uint256 tokenId) view returns (address)',
  'function renounceOwnership()',
  'function safeTransferFrom(address from, address to, uint256 tokenId)',
  'function safeTransferFrom(address from, address to, uint256 tokenId, bytes _data)',
  'function setApprovalForAll(address operator, bool approved)',
  'function supportsInterface(bytes4 interfaceId) view returns (bool)',
  'function symbol() view returns (string)',
  'function tokenByIndex(uint256 index) view returns (uint256)',
  'function tokenOfOwnerByIndex(address owner, uint256 index) view returns (uint256)',
  'function tokenURI(uint256 tokenId) pure returns (string)',
  'function totalSupply() view returns (uint256)',
  'function transferFrom(address from, address to, uint256 tokenId)',
  'function transferOwnership(address newOwner)',
];

const addresses: Record<EthereumChainName, string> = {
  mainnet: '0x1308c158e60D7C4565e369Df2A86eBD853EeF2FB',
  rinkeby: '0x6C989C4Eda8E3fABce543Af5bfaa0D67b256354e',
};

export function setContractAddress(
  chainName: EthereumChainName,
  address: string
) {
  addresses[chainName] = address;
}

export function getContractAddress(chainName: EthereumChainName): string {
  return addresses[chainName];
}
