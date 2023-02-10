import { Button, Box } from "@mui/material"
import { Dialog } from "@roswell/ui-components"
import React, { useState } from "react"

const LbDialog = () => {
  const [visible, setVisible] = useState<boolean>(false)
  const visibleHandler = () => {
    setVisible(currentValue => !currentValue)
  }

  return (
    <Box display="flex" my={2} alignItems="center">
      <Box maxWidth={300} mr={2}>
        <Button variant="contained" size="small" onClick={visibleHandler}>
          Open
        </Button>
      </Box>
      <Dialog
        close={true}
        backdropClose={true}
        confirm={true}
        content={"Content"}
        title={"Title"}
        dialogBorder={true}
        actionFullWidth={true}
        actionColumn={true}
        actionColumnReverse={false}
        buttonSize={"large"}
        visible={visible}
        onClose={visibleHandler}
        onConfirm={visibleHandler}
        onCancel={visibleHandler}
      />
    </Box>
  )
}

export default LbDialog
