# openpalette/core

Use this package to interact with OpenPalette data.

There's currently one export, `palettesById`:

```ts
import { palettesById } from '@openpalette/core';

console.log(palettesById);

// {
//   '0': ['#ee7722', '#dd44cc', '#ee8833', '#cc99bb', '#775511'],
//   '1': ['#44ddcc', '#882222', '#883377', '#77cc88', '#bb77ff'],
//   '2': ['#7733bb', '#992233', '#ff3322', '#44dd88', '#22dd88'],
//   ...
// }
```
