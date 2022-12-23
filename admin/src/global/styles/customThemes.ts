import { createTheme, Palette, ThemeProvider } from "@mui/material";
import { Fontface } from "@mui/material/styles/createMixins";

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

  interface Palette {
    textColor: Palette["primary"];
  }
  interface PaletteOptions {
    textColor: PaletteOptions["primary"];
  }

  interface PaletteColor {
    main: string;
    darker?: string;
  }
}

export const theme = createTheme({
  palette: {
    primary: {
      main: "rgb(58, 43, 186)",
      contrastText: "rgba(58, 43, 186, 0.1)",
    },
    secondary: {
      main: "#e0f954",
    },
    textColor: {
      main: "rgb(99, 115, 129)",
    },
    backgroundColor: {
      main: "rgb(229, 229, 229)",
    },
  },
  mixins: {
    toolbar: {
      "@font-face": [
        {
          src: "../../../public/fonts/GulfsDisplay-SemiExpanded.ttf",
          fontFamily: "GulfsDisplay",
          fontWeight: "normal",
          fontStyle: "normal",
        },
      ] as Fontface,
      fontFamily: "Syne,sans-serif !important",
      paddingLeft: "20px",
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
      transition: "all 0.25s linear",
    },
  },
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
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
