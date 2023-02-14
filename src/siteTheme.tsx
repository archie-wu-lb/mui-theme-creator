import { createTheme, ThemeOptions, Theme } from "@mui/material"
declare module "@mui/material/styles/createPalette" {
  interface TypeBackground {
    default: string
    paper: string
    surface: string
    onSurface: string
    top: string
  }
  interface TypeText {
    darkPrimary1: string
    darkPrimary2: string
    darkPrimary3: string
    darkPrimary4: string
    lightPrimary1: string
    lightPrimary2: string
    lightPrimary3: string
    lightPrimary4: string
    gary1: string
    gary2: string
    gary3: string
    gary4: string
    gary5: string
    gary6: string
    gary7: string
    gary8: string
    gary9: string
    gary10: string
  }
  interface Palette {
    default: Palette["primary"]
    border: Palette["primary"]
    background: Palette["background"]
    text: Palette["text"]
  }
  interface PaletteOptions {
    default?: PaletteOptions["primary"]
    border?: PaletteOptions["primary"]
    background?: Partial<TypeBackground>
    text?: Partial<TypeText>
  }
}

export const defaultThemeOptions: ThemeOptions = {
  palette: {
    mode: "light",
    primary: {
      main: "#3f51b5", // the default primary color
    },
    default: {
      main: "#434858",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f50057", // the default secondary color
    },
    border: {
      main: "#4b546a",
      light: "#60c2ff",
      dark: "#62657b",
    },
  },
  components: {
    MuiButton: {
      styleOverrides: {
        sizeSmall: {
          padding: "4px 10px",
        },
        sizeMedium: {
          padding: "6px 16px",
        },
        sizeLarge: {
          padding: "8px 22px",
        },
      },
    },
  },
}

export const defaultTheme: Theme = createTheme(defaultThemeOptions)

export const themeConfig: ThemeOptions = {
  palette: {
    mode: "dark",
    primary: {
      main: "#90caf9",
    },
    default: {
      main: "#434858",
      contrastText: "#fff",
    },
    secondary: {
      main: "#f48fb1",
    },
    border: {
      main: "#4b546a",
      light: "#60c2ff",
      dark: "#62657b",
    },
  },
  components: {
    MuiAccordion: {
      defaultProps: {
        square: true,
        TransitionProps: {
          unmountOnExit: true,
        },
      },
      styleOverrides: {
        root: {
          border: "1px solid rgba(255, 255, 255, .125)",
          boxShadow: "none",
          transition: defaultTheme.transitions.create("margin-left"),
          "&:not(:last-child)": {
            borderBottom: 0,
          },
          "&:before": {
            display: "none",
          },
          "&.Mui-expanded": {
            margin: "auto",
          },
          "&.Mui-disabled": {
            marginLeft: 32,
          },
        },
      },
    },
    MuiAccordionSummary: {
      styleOverrides: {
        root: {
          borderBottom: "1px solid rgba(255, 255, 255, .125)",
          minHeight: 56,
          "&.Mui-expanded": {
            minHeight: 56,
          },
        },
        content: {
          alignItems: "center",
          justifyContent: "space-between",
          "&.Mui-expanded": {
            margin: "12px 0",
          },
        },
      },
    },
    MuiAccordionDetails: {
      styleOverrides: {
        root: {
          backgroundColor: "#212121",
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        docked: {
          "& .MuiPaper-root": {
            position: "static",
          },
        },
        paper: {},
      },
    },
    MuiPopover: {
      styleOverrides: {
        paper: {
          backgroundColor: "#121212",
        },
      },
    },
  },
}

export default createTheme(themeConfig)
