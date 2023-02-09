import { Button, Box } from "@mui/material"
import { Snackbar } from "@roswell/ui-components"
import React, { useState } from "react"

const LbSnackbar = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const visibleHandler = () => {
    setVisible(currentValue => !currentValue)
  }
  const onClose = () => {
    setVisible(false)
  }

  return (
    <Box>
      <Box maxWidth={300}>
        <Button variant="contained" size="small" onClick={visibleHandler}>
          Open
        </Button>
      </Box>

      <Snackbar
        variant="success"
        content="註冊成功"
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
