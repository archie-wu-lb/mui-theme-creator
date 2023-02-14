import { Button, Grid, TextField } from "@mui/material"
import React, { useCallback, useEffect, useState } from "react"
import { useDispatch } from "react-redux"
import ColorInput from "src/components/ColorInput"
import { removeThemeOption, setThemeOption } from "src/state/actions"
import { useThemeValueInfo } from "src/state/selectors"
import { useCanSave } from "src/state/selectors"

interface Props {
  label: string
  path: string
}
export default function ComponentPaddingInput({ label, path }: Props) {
  const themeValueInfo = useThemeValueInfo(path)
  const dispatch = useDispatch()
  const canSave = useCanSave()
  const [isReset, setIsReset] = useState(false)
  const [padding, setPadding] = useState({
    top: "",
    right: "",
    bottom: "",
    left: "",
  })

  const changeTheme = () => {
    let value = ""
    const { top, right, bottom, left } = padding
    if (top && right && bottom && left) {
      if (right === left) {
        if (top === bottom) {
          if (top === right) {
            value = `${top}`
          } else {
            value = `${top} ${right}`
          }
        } else {
          value = `${top} ${right} ${bottom}`
        }
      } else {
        value = `${top} ${right} ${bottom} ${left}`
      }
      dispatch(setThemeOption(path, value))
    }
  }

  const handleChange = useCallback(
    (event: any) => {
      const { value, name } = event.target
      return setPadding((currentValue: any) => {
        currentValue[name] = value
        return { ...currentValue }
      })
    },
    [dispatch]
  )

  const handleReset = useCallback(() => {
    dispatch(removeThemeOption(path, true))
    setIsReset(true)
  }, [dispatch])

  useEffect(() => {
    changeTheme()
  }, [padding])

  const setDefaultValue = () => {
    let themeValue = themeValueInfo.value || ""
    if (themeValue) {
      themeValue = themeValue.split(" ")
      if (themeValue.length === 4) {
        setPadding({
          top: themeValue[0],
          right: themeValue[1],
          bottom: themeValue[2],
          left: themeValue[3],
        })
      } else if (themeValue.length === 3) {
        setPadding({
          top: themeValue[0],
          right: themeValue[1],
          bottom: themeValue[2],
          left: themeValue[1],
        })
      } else if (themeValue.length === 2) {
        setPadding({
          top: themeValue[0],
          right: themeValue[1],
          bottom: themeValue[0],
          left: themeValue[1],
        })
      } else {
        setPadding({
          top: themeValue[0],
          right: themeValue[0],
          bottom: themeValue[0],
          left: themeValue[0],
        })
      }
    } else {
      setPadding({ top: "", right: "", bottom: "", left: "" })
    }
  }

  useEffect(() => {
    setDefaultValue()
  }, [canSave])
  useEffect(() => {
    if (isReset) {
      setDefaultValue()
      setIsReset(false)
    }
  }, [isReset, themeValueInfo.value])
  return (
    <Grid container justifyContent="space-between" alignItems="flex-end">
      <Grid item>
        <TextField
          id={`${label}Top`}
          name="top"
          label={`${label}Top`}
          variant="standard"
          value={padding.top || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id={`${label}Bottom`}
          name="bottom"
          label={`${label}Bottom`}
          variant="standard"
          value={padding.bottom || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id={`${label}Left`}
          name="left"
          label={`${label}Left`}
          variant="standard"
          value={padding.left || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <TextField
          id={`${label}Right`}
          name="right"
          label={`${label}Right`}
          variant="standard"
          value={padding.right || ""}
          onChange={handleChange}
        />
      </Grid>
      <Grid item>
        <Button
          size="small"
          disabled={!themeValueInfo.modifiedByUser}
          onClick={handleReset}
          sx={{ mt: 2 }}
        >
          {themeValueInfo.modifiedByUser ? "Reset" : "auto"}
        </Button>
      </Grid>
    </Grid>
  )
}
