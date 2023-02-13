import { SnippetModification } from "./types"
import { grey } from "@mui/material/colors"
import { defaultTheme } from "src/siteTheme"

const snippets: Array<SnippetModification> = [
  {
    title: "Spacing",
    info: "Change the spacing created by theme.spacing()",
    docs: "https://material-ui.com/customization/spacing/",
    configs: [{ path: "spacing", value: 8 }],
  },
  {
    title: "Right-To-Left",
    info: "Change the direction of the Material-UI components to RTL",
    docs: "https://material-ui.com/customization/spacing/",
    configs: [{ path: "direction", value: "rtl" }],
  },
  {
    title: "Border Radius",
    configs: [{ path: "shape.borderRadius", value: 4 }],
  },
  {
    title: "Disable Ripple",
    configs: [
      {
        path: "components.MuiButtonBase.defaultProps.disableRipple",
        value: true,
      },
    ],
  },
  {
    title: "Dense Lists, Tables, Menus",
    configs: [
      { path: "components.MuiList.defaultProps.dense", value: true },
      { path: "components.MuiMenuItem.defaultProps.dense", value: true },
      { path: "components.MuiTable.defaultProps.size", value: "small" },
    ],
  },
  
  {
    title: "Tooltip arrows",
    configs: [{ path: "components.MuiTooltip.defaultProps.arrow", value: true }],
  },
  {
    title: "Button Size custom",
    configs: [
      {
        path: "components.MuiButton.styleOverrides.sizeSmall",
        value: { padding: "4px 10px" },
      },
      {
        path: "components.MuiButton.styleOverrides.sizeMedium",
        value: { padding: "6px 16px" },
      },
      {
        path: "components.MuiButton.styleOverrides.sizeLarge",
        value: { padding: "8px 22px" },
      },
    ],
  },
]

export default snippets
