import React from "react"

import { savedThemesTabId } from "src/components/MainWindow"
import { addThemeButtonId } from "src/components/SavedThemes/AddThemeButton"
import { defaultThemesId } from "src/components/SavedThemes/defaultThemeList"
import { savedThemeListId } from "src/components/SavedThemes/SavedThemeList"

import TutorialTooltip from "../TutorialTooltip"
import Typography from "@mui/material/Typography"

import { useSwitchToTab } from "./hooks"

const SavedThemesTabTutorialStep = () => {
  useSwitchToTab("saved")
  return (
    <TutorialTooltip
      anchorId={savedThemesTabId}
      placement="bottom"
      title="SavedThemesTabTutorialStep"
    >
      <Typography variant="h5">This is the Saved Themes Tab</Typography>
    </TutorialTooltip>
  )
}

const AddNewThemesTutorialStep = () => {
  console.log(defaultThemesId)
  // useSwitchToTab("saved")
  return (
    <>
      <TutorialTooltip
        anchorId={savedThemeListId}
        placement="right"
        title="savedThemeList"
      >
        <>
          <Typography>Switch between your saved themes here.</Typography>
          <Typography>You can rename, or delete them here too</Typography>
        </>
      </TutorialTooltip>
      <TutorialTooltip
        anchorId={defaultThemesId}
        placement="bottom"
        title="defaultThemes"
      >
        <Typography> Add sample themes here to check them out</Typography>
      </TutorialTooltip>
      <TutorialTooltip
        anchorId={addThemeButtonId}
        placement="top"
        title="addThemeButton"
      >
        <Typography>Add a new blank theme here</Typography>
      </TutorialTooltip>
    </>
  )
}

export default [SavedThemesTabTutorialStep, AddNewThemesTutorialStep]
