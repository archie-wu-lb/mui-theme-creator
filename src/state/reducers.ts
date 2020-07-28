import { RootState } from "src/state/types"
import { PaletteType, createMuiTheme, ThemeOptions } from "@material-ui/core"
import JSON5 from "json5"

const defaultThemeOptions: ThemeOptions = {
  palette: {
    type: "light" as PaletteType,
    primary: {
      main: "#3f51b5",
    },
    secondary: {
      main: "#f50057",
    },
    error: {
      main: "#f44336",
    },
    warning: {
      main: "#ff9800",
    },
    info: {
      main: "#2196f3",
    },
    success: {
      main: "#4caf50",
    },
  },
}

const initialState: RootState = {
  themeInput: JSON5.stringify(defaultThemeOptions, null, 2), // the current state of the code editor input
  themeOptions: defaultThemeOptions, // the object loaded into createMuiTheme
  themeObject: createMuiTheme(defaultThemeOptions),
  loadedFonts: new Set(
    ["Roboto", "Open Sans", "Droid Sans", "Droid Serif"].sort()
  ),
}

export default (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_THEME_INPUT":
      return {
        ...state,
        themeInput: action.input,
      }
    case "SAVE_THEME_INPUT":
      return {
        ...state,
        themeOptions: action.updatedThemeOptions,
        themeObject: createMuiTheme(action.updatedThemeOptions),
      }
    case "UPDATE_THEME":
      return {
        ...state,
        themeOptions: action.updatedThemeOptions,
        themeObject: createMuiTheme(action.updatedThemeOptions),
        themeInput: action.updatedThemeInput,
      }
    case "FONTS_LOADED":
      const loadedFonts = new Set(
        [...state.loadedFonts, ...action.fonts].sort()
      )
      return {
        ...state,
        loadedFonts,
      }
    default:
      return state
  }
}