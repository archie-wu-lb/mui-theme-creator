import { Button, Grid, TextField } from "@mui/material"
import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import ColorInput from "src/components/ColorInput"
import { removeThemeOption, setThemeOption } from "src/state/actions"
import { useThemeValueInfo } from "src/state/selectors"

interface Props {
  label: string
  path: string
}
export default function ComponentInput({ label, path }: Props) {
  const themeValueInfo = useThemeValueInfo(path)
  const dispatch = useDispatch()

  const handleChange = useCallback(
    (event: any) => {
      const { value } = event.target
      return dispatch(setThemeOption(path, value))
    },
    [dispatch]
  )

  const handleReset = useCallback(
    () => dispatch(removeThemeOption(path)),
    [dispatch]
  )

  return (
    <Grid container justifyContent="space-between" alignItems="flex-end">
      <Grid item>
        <TextField
          id={label}
          label={label}
          variant="standard"
          value={themeValueInfo.value || ""}
          onChange={handleChange}
        />
      </Grid>

      <Grid item>
        <Button
          size="small"
          disabled={!themeValueInfo.modifiedByUser}
          onClick={handleReset}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  )
}
