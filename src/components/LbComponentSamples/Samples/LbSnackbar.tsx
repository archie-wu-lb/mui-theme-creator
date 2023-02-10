import {
  Button,
  Box,
  Select,
  MenuItem,
  SelectChangeEvent,
  InputLabel,
  FormControl,
} from "@mui/material"
import { Snackbar } from "@roswell/ui-components"
import React, { useState } from "react"

const LbSnackbar = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const [variant, setVariant] = useState<
    "default" | "success" | "warning" | "error" | "info"
  >("default")
  const visibleHandler = () => {
    setVisible(currentValue => !currentValue)
  }
  const handleChange = (event: any) => {
    setVariant(event.target.value)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <Box display="flex" my={2} alignItems="center">
      <Box maxWidth={300} mr={2}>
        <Button variant="contained" size="small" onClick={visibleHandler}>
          Open
        </Button>
      </Box>
      <FormControl>
        <InputLabel id="demo-simple-select-label">variant</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          label="variant"
          value={variant}
          onChange={handleChange}
        >
          <MenuItem value={"default"}>default</MenuItem>
          <MenuItem value={"success"}>success</MenuItem>
          <MenuItem value={"warning"}>warning</MenuItem>
          <MenuItem value={"error"}>error</MenuItem>
          <MenuItem value={"info"}>info</MenuItem>
        </Select>
      </FormControl>
      <Snackbar
        variant={variant}
        content={variant}
        close={false}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        onlyUseDefaultBackground={false}
        defaultAnchorOrigin={{
          vertical: "bottom",
          horizontal: "left",
        }}
        defaultAutoHideDuration={3000}
        contentColor="#fff"
        visible={visible}
        onClose={onClose}
      />
    </Box>
  )
}

export default LbSnackbar
