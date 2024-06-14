//eslint-disable-next-line

import {Palette, PaletteColor} From "@mui/material/styles/createPalette";

declare module "@mui/material/styles/createPalette"{
    interface PaletteColor{
        [key:number]:string;
    }
    interface palette{
        tertiary: PaletteColor;
    }
}