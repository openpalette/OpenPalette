import { palettesById } from './palettesById';
import { OpenPalette } from './types';

const palettes = Object.entries(palettesById).map(
  ([id, colors]): OpenPalette => ({
    id: Number(id),
    colors,
  })
);

Object.freeze(palettes);

export function getPalettes(): OpenPalette[] {
  return palettes;
}

export function getPaletteById(paletteId: number): OpenPalette {
  if (!isValidPaletteId(paletteId))
    throw new Error(`Invalid palette id: ${paletteId}`);

  return palettes[paletteId];
}

export function getColors(paletteId: number) {
  return getPaletteById(paletteId).colors;
}

export function isValidPaletteId(paletteId: number) {
  return Number.isInteger(paletteId) && paletteId >= 0 && paletteId <= 9999;
}
