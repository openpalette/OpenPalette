import { getColors, getPaletteById, getPalettes, isValidPaletteId } from '..';

const palettes = getPalettes();

it('gets palettes', () => {
  expect(palettes.length).toEqual(10000);

  expect(palettes[0]).toEqual({
    id: 0,
    colors: ['#ee7722', '#dd44cc', '#ee8833', '#cc99bb', '#775511'],
  });
});

it('gets palettes by id', () => {
  expect(getPaletteById(0)).toEqual(palettes[0]);
  expect(getPaletteById(9999)).toEqual(palettes[9999]);
  expect(() => {
    return getPaletteById(10000);
  }).toThrowError();
});

it('validates ids', () => {
  expect(isValidPaletteId(0)).toEqual(true);
  expect(isValidPaletteId(9999)).toEqual(true);
  expect(isValidPaletteId(-1)).toEqual(false);
  expect(isValidPaletteId(10000)).toEqual(false);
  expect(isValidPaletteId(0.5)).toEqual(false);
});

it('get colors by id', () => {
  expect(getColors(0)).toEqual([
    '#ee7722',
    '#dd44cc',
    '#ee8833',
    '#cc99bb',
    '#775511',
  ]);

  expect(getColors(9999)).toEqual([
    '#3311aa',
    '#9900ff',
    '#dd5522',
    '#ee3344',
    '#441111',
  ]);
});
