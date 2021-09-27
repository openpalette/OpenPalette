import { palettes } from '..';

it('gets palettes', () => {
  expect(palettes.length).toEqual(10000);

  expect(palettes[0]).toEqual({
    id: '0',
    colors: ['#ee7722', '#dd44cc', '#ee8833', '#cc99bb', '#775511'],
  });
});
