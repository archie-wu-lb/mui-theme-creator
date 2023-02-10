import CloudUploadIcon from "@mui/icons-material/CloudUpload"
import DeleteIcon from "@mui/icons-material/Delete"
import KeyboardVoiceIcon from "@mui/icons-material/KeyboardVoice"
import SaveIcon from "@mui/icons-material/Save"
import { Box, styled, Theme, Typography } from "@mui/material"
import Button from "@mui/material/Button"
import React from "react"

const ButtonGroup = styled(Box)(({ theme }: { theme: Theme }) => ({
  marginBottom: 2,
  "& > *": {
    margin: `${theme.spacing(1)} !important`,
  },
}))

export default function ButtonsExample() {
  return (
    <div>
      <Typography variant="h6" id="contained-buttons">
        Contained Buttons
      </Typography>
      <ButtonGroup>
        <Button variant="contained" color="inherit">
          Default
        </Button>
        <Button variant="contained" color="primary">
          Primary
        </Button>
        <Button variant="contained" color="secondary">
          Secondary
        </Button>
        <Button variant="contained" disabled>
          Disabled
        </Button>
        <Button variant="contained" color="primary" href="#contained-buttons">
          Link
        </Button>
      </ButtonGroup>

      <Typography variant="h6" id="contained-buttons">
        Sizes
      </Typography>
      <ButtonGroup>
        <Button variant="contained" color="primary" size="small">
          Small
        </Button>
        <Button variant="contained" color="primary" size="medium">
          Medium
        </Button>
        <Button variant="contained" color="primary" size="large">
          Large
        </Button>
        <Button variant="contained" color="primary" size="large" fullWidth>
          FullWidth
        </Button>
      </ButtonGroup>

      <Typography variant="h6" id="text-buttons">
        Text Buttons
      </Typography>
      <ButtonGroup>
        <Button color="inherit">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button disabled>Disabled</Button>
        <Button color="primary" href="#text-buttons">
          Link
        </Button>
      </ButtonGroup>

      <Typography variant="h6" id="outlined-buttons">
        Outlined Buttons
      </Typography>
      <ButtonGroup>
        <Button variant="outlined">Default</Button>
        <Button variant="outlined" color="primary">
          Primary
        </Button>
        <Button variant="outlined" color="secondary">
          Secondary
        </Button>
        <Button variant="outlined" disabled>
          Disabled
        </Button>
        <Button variant="outlined" color="primary" href="#outlined-buttons">
          Link
        </Button>
      </ButtonGroup>

      <Typography variant="h6" id="buttons-with-icons">
        Buttons with icons and label
      </Typography>
      <ButtonGroup>
        <Button
          variant="contained"
          color="secondary"
          startIcon={<DeleteIcon />}
        >
          Delete
        </Button>
        <Button variant="contained" startIcon={<CloudUploadIcon />}>
          Upload
        </Button>
        <Button
          variant="contained"
          disabled
          color="secondary"
          startIcon={<KeyboardVoiceIcon />}
        >
          Talk
        </Button>
        <Button variant="contained" color="primary" startIcon={<SaveIcon />}>
          Save
        </Button>
      </ButtonGroup>
    </div>
  )
}
