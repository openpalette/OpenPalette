import { RgbaColor } from '.';

export const RELATIVE_LUMINANCE = {
  R: 0.2125,
  G: 0.7154,
  B: 0.0721,
};

// https://en.wikipedia.org/wiki/SRGB#The_reverse_transformation_(sRGB_to_CIE_XYZ)
export function getGammaExpandedComponent(c: number) {
  return c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);
}

/**
 * Returns the luminance, a value in the range 0 to 1.
 *
 * Color components should be in the range 0 to 1.
 *
 * https://www.w3.org/TR/WCAG20/#relativeluminancedef
 */
export function getLuminance({ r, g, b }: Omit<RgbaColor, 'a'>) {
  return (
    RELATIVE_LUMINANCE.R * getGammaExpandedComponent(r) +
    RELATIVE_LUMINANCE.G * getGammaExpandedComponent(g) +
    RELATIVE_LUMINANCE.B * getGammaExpandedComponent(b)
  );
}
