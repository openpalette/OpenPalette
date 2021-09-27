import { getColors, getPalettes } from '..';

const palettes = getPalettes();

it('gets palettes', () => {
  expect(palettes.length).toEqual(10000);

  expect(palettes[0]).toEqual({
    id: '0',
    colors: ['#ee7722', '#dd44cc', '#ee8833', '#cc99bb', '#775511'],
  });
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
