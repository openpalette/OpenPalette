import { palettesById } from './palettesById';

export { palettesById };

export type OpenPalette = {
  id: string;
  colors: [string, string, string, string, string];
};

export const palettes = Object.entries(palettesById).map(([id, colors]) => ({
  id,
  colors,
}));
