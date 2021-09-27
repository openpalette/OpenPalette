import { palettesById } from './palettesById';
import { OpenPalette } from './types';

const palettes = Object.entries(palettesById).map(
  ([id, colors]): OpenPalette => ({
    id,
    colors,
  })
);

Object.freeze(palettes);

export function getPalettes(): OpenPalette[] {
  return palettes;
}

export function getColors(paletteId: number) {
  if (paletteId < 0 || paletteId > 9999) {
    throw new Error(`Invalid palette id: ${paletteId}`);
  }

  return palettes[paletteId].colors;
}
