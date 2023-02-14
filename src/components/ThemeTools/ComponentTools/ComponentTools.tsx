import React from "react"
import { Typography, AccordionSummary, Accordion } from "@mui/material"
import ComponentSubType from "./ComponentSubType"

const buttonSize = ["sizeSmall", "sizeMedium", "sizeLarge"]
export default function Tools() {
  return (
    <>
      <Accordion>
        <AccordionSummary>
          <Typography variant="body2">Button</Typography>
        </AccordionSummary>
      </Accordion>
      {buttonSize.map((size: string) => (
        <ComponentSubType
          key={`button-${size}`}
          title={size}
          path={`components.MuiButton.styleOverrides.${size}`}
          paletteValues={[["padding", "padding"]]}
        />
      ))}

      {/* <PaletteSubType
        title="Text"
        path="palette.text"
        paletteValues={[
          ["Primary", "primary"],
          ["Secondary", "secondary"],
          ["Disabled", "disabled"],
          ["Hint", "hint"],
        ]}
      />
      {paletteColorTypes.map(colorType => (
        <PaletteSubType
          key={colorType}
          title={colorType}
          path={`palette.${colorType}`}
          paletteValues={[
            ["Main", `main`],
            ["Light", `light`],
            ["Dark", `dark`],
            ["Contrast Text", `contrastText`],
          ]}
        />
      ))}
      <PaletteSubType
        title="Divider"
        path="palette"
        paletteValues={[["Divider", "divider"]]}
      /> */}
    </>
  )
}
