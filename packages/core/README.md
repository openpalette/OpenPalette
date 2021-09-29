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
- [getPaletteById](#getPaletteById)
- [isValidPaletteId](#isValidPaletteId)
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

### `getPaletteById`

Returns a specific palette.

Throws an error if the palette ID is invalid.

**Type**: `function getPaletteById(paletteId: number): OpenPalette`

#### Example

```ts
import { getPaletteById } from '@openpalette/core';

console.log(getPaletteById(0)); // => { id: 0, colors: ['#ee7722', ...]}
```

### `isValidPaletteId`

Validate a palette ID.

Returns true for integers within the range [0, 9999] inclusive.

**Type**: `function isValidPaletteId(paletteId: number): boolean`

#### Example

```ts
import { isValidPaletteId } from '@openpalette/core';

console.log(isValidPaletteId(0)); // => true
console.log(isValidPaletteId(0.5)); // => false
console.log(isValidPaletteId(-1)); // => false
```

### `getColors`

Returns the array of colors for the specified OpenPalette.

**Type**: `function getColors(paletteId: number): OpenPaletteColors`

#### Example

```ts
import { getColors } from '@openpalette/core';

console.log(getColors(0)); // => ['#ee7722', '#dd44cc', '#ee8833', '#cc99bb', '#775511']
```
