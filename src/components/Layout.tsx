/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */
import { IntlProvider } from "react-intl"
import CssBaseline from "@mui/material/CssBaseline"
import {
  StyledEngineProvider,
  Theme,
  ThemeProvider,
} from "@mui/material/styles"
import React from "react"
import theme from "src/siteTheme"
import "./layout.css"

declare module "@mui/styles/defaultTheme" {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

interface LayoutProps {
  children: React.ReactNode
}
const i18nMessage = {
  title: "",
  caption: "",
  label: "",
  default: "",
  unit: "",
  status: "",
  relation: "",
  placeholder: "",
  description: "",
  notice: "",
  action: "",
  "action.confirm": "確認",
  "action.cancel": "取消",
  error: "",
}
const Layout = ({ children }: LayoutProps) => {
  return (
    <StyledEngineProvider injectFirst>
      <IntlProvider locale="en" messages={i18nMessage}>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </IntlProvider>
    </StyledEngineProvider>
  )
}

export default Layout
