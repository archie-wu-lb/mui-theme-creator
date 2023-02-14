import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material"
import React from "react"
import { useThemeValue } from "src/state/selectors"
import ComponentInput from "./ComponentInput"

interface ComponentSubTypeProps {
  title: string
  path: string
  paletteValues: [string, string][] // [name, path]
}

export default function ComponentSubType({
  title,
  path,
  paletteValues,
}: ComponentSubTypeProps) {
  const themeValues = useThemeValue(path)

  return (
    <>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          sx={{
            "& .MuiAccordionSummary-expandIconWrapper": {
              ml: 1.5,
            },
          }}
        >
          <Typography sx={{ textTransform: "capitalize" }} variant="body2">
            {title}
          </Typography>
        </AccordionSummary>
        <AccordionDetails
          sx={{
            flexDirection: "column",
            "&> *": {
              mb: 2,
            },
          }}
        >
          {paletteValues.map(([name, subPath]) => (
            <ComponentInput
              key={`${title}-${name}`}
              label={name}
              path={`${path}.${subPath}`}
            />
          ))}
        </AccordionDetails>
      </Accordion>
    </>
  )
}