// Adapted from (MIT): https://github.com/omgovich/react-colorful/blob/07335db5eb3e901a4bfde35c63621e77974c809d/src/utils/convert.ts

import { round } from '../utils';
import { hexToRgba, RgbaColor, rgbaToHex } from './rgba';

export interface HsvaColor {
  h: number;
  s: number;
  v: number;
  a: number;
}

export function rgbaToHsva({ r, g, b, a }: RgbaColor): HsvaColor {
  r *= 255;
  g *= 255;
  b *= 255;

  const max = Math.max(r, g, b);
  const delta = max - Math.min(r, g, b);

  const hh = delta
    ? max === r
      ? (g - b) / delta
      : max === g
      ? 2 + (b - r) / delta
      : 4 + (r - g) / delta
    : 0;

  return {
    h: round(60 * (hh < 0 ? hh + 6 : hh)),
    s: round(max ? (delta / max) * 100 : 0),
    v: round((max / 255) * 100),
    a,
  };
}

export const hsvaToRgba = ({ h, s, v, a }: HsvaColor): RgbaColor => {
  h = (h / 360) * 6;
  s = s / 100;
  v = v / 100;

  const hh = Math.floor(h),
    b = v * (1 - s),
    c = v * (1 - (h - hh) * s),
    d = v * (1 - (1 - h + hh) * s),
    module = hh % 6;

  return {
    r: [v, c, b, b, d, v][module],
    g: [d, v, v, c, b, b][module],
    b: [b, b, d, v, v, c][module],
    a: round(a, 2),
  };
};

export function hexToHsva(hex: string): HsvaColor {
  return rgbaToHsva(hexToRgba(hex));
}

export function hsvaToHex(color: HsvaColor): string {
  return rgbaToHex(hsvaToRgba(color));
}
