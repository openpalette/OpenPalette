import {
  getLuminance,
  hexToHsva,
  hexToRgba,
  hsvaToHex,
  RELATIVE_LUMINANCE,
  rgbaToHex,
} from '..';

it('converts to rgba', () => {
  const hex = '#ff8000';
  const rgba = hexToRgba('#ff8000');

  expect(rgba).toEqual({ r: 1, g: 0.5019607843137255, b: 0, a: 1 });
  expect(rgbaToHex(rgba)).toEqual(hex);
});

it('converts to hsva', () => {
  const hex = '#693400';
  const hsva = hexToHsva('#693400');

  expect(hsva).toEqual({ h: 30, s: 100, v: 41, a: 1 });
  expect(hsvaToHex(hsva)).toEqual(hex);
});

it('calculates luminance', () => {
  expect(getLuminance(hexToRgba('#000000'))).toEqual(0);
  expect(getLuminance(hexToRgba('#ffffff'))).toEqual(1);

  expect(getLuminance(hexToRgba('#ff0000'))).toEqual(RELATIVE_LUMINANCE.R);
  expect(getLuminance(hexToRgba('#00ff00'))).toEqual(RELATIVE_LUMINANCE.G);
  expect(getLuminance(hexToRgba('#0000ff'))).toEqual(RELATIVE_LUMINANCE.B);
});
