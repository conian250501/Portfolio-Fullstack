import { createTheme, Palette, ThemeProvider } from "@mui/material";

declare module "@mui/material/styles" {
  interface BreakpointOverrides {
    xs: false;
    sm: false;
    md: false;
    lg: false;
    xl: false;
    mobile: true;
    tablet: true;
    laptop: true;
    desktop: true;
  }
}

declare module "@mui/material/styles" {
  interface Palette {
    backgroundColor: Palette["primary"];
  }
  interface PaletteOptions {
    backgroundColor: PaletteOptions["primary"];
  }

  interface PaletteColor {
    main: string;
    darker?: string;
  }
}
export const theme = createTheme({
  palette: {
    primary: {
      main: "#3a2bba",
    },
    secondary: {
      main: "#e0f954",
    },
    backgroundColor: {
      main: "#e5e5e5",
    },
  },
  breakpoints: {
    values: {
      mobile: 0,
      tablet: 768,
      laptop: 1024,
      desktop: 1440,
    },
  },
});
