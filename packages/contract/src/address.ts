type Brand<K, T> = K & { __brand: T };

export type Address = Brand<string, 'address'>;

export function addressToString(address: Address): string {
  return address as string;
}

export function createAddress(string: string): Address {
  if (!string.startsWith('0x')) {
    throw new Error(`Invalid address: ${string}`);
  }

  return string as Address;
}
