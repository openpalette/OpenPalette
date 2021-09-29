# @openpalette/core

A library for interacting with OpenPalette data.

```bash
npm install --save @openpalette/core
```

OR

```bash
yarn add @openpalette/core
```

## API

- [getPalettes](#getPalettes)
- [getColors](#getColors)

---

### `getPalettes`

Returns an array of all palettes.

**Type**: `function getPalettes(): OpenPalette[]`

#### Example

```ts
import { getPalettes } from '@openpalette/core';

console.log(getPalettes()); // => [{ id: 0, colors: ['#ee7722', ...]}, ...]
```

### `getColors`

Returns the array of colors for the specified OpenPalette.

**Type**: `function getColors(paletteId: string): OpenPaletteColors`

#### Example

```ts
import { getColors } from '@openpalette/core';

console.log(getColors(0)); // => ['#ee7722', '#dd44cc', '#ee8833', '#cc99bb', '#775511']
```
