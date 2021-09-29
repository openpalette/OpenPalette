// Adapted from (MIT): https://github.com/omgovich/react-colorful/blob/07335db5eb3e901a4bfde35c63621e77974c809d/src/utils/convert.ts

export interface RgbaColor {
  r: number;
  g: number;
  b: number;
  a: number;
}

export function hexToRgba(hex: string, alpha = 1): RgbaColor {
  if (hex[0] === '#') hex = hex.substr(1);

  if (hex.length < 6) {
    return {
      r: parseInt(hex[0] + hex[0], 16) / 255,
      g: parseInt(hex[1] + hex[1], 16) / 255,
      b: parseInt(hex[2] + hex[2], 16) / 255,
      a: alpha,
    };
  }

  return {
    r: parseInt(hex.substr(0, 2), 16) / 255,
    g: parseInt(hex.substr(2, 2), 16) / 255,
    b: parseInt(hex.substr(4, 2), 16) / 255,
    a: alpha,
  };
}

const format = (number: number) => {
  const hex = Math.round(number).toString(16);
  return hex.length < 2 ? '0' + hex : hex;
};

export function rgbaToHex({ r, g, b }: RgbaColor): string {
  return '#' + format(r * 255) + format(g * 255) + format(b * 255);
}
