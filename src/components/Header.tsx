import GitHubIcon from "@mui/icons-material/GitHub"
import {
  AppBar,
  AppBarProps,
  Box,
  IconButton,
  Link,
  Toolbar,
  Typography,
} from "@mui/material"
import React, { useContext, useEffect } from "react"
import muiVersion from "src/muiVersion"
import TutorialButton from "./Tutorial/TutorialButton"
import {
  getAuth,
  signInWithPopup,
  GoogleAuthProvider,
  signOut,
  deleteUser,
} from "firebase/auth"
import LoginIcon from "@mui/icons-material/Login"
import LogoutIcon from "@mui/icons-material/Logout"
import { FirebaseContext } from "src/context/FireBaseContext"

const Header = (props: AppBarProps) => {
  // const auth = getAuth()
  // const providerGoogle = new GoogleAuthProvider()
  // const { user, setUser } = useContext(FirebaseContext)
  // const signIn = () => {
  //   signInWithPopup(auth, providerGoogle)
  //     .then(result => {
  //       const credential: any = GoogleAuthProvider.credentialFromResult(result)
  //       const token = credential.accessToken
  //       const user = result.user
  //       if (/.*@getoken.io$/.test(user.email || "")) {
  //         setUser({ ...user, token })
  //       } else {
  //         deleteUser(user)
  //           .then(function () {
  //             alert("you need to use gettoken email to login")
  //           })
  //           .catch(function (error) {
  //             // 有錯誤
  //           })
  //       }
  //     })
  //     .catch(error => {
  //       const errorCode = error.code
  //       const errorMessage = error.message
  //       const email = error.email
  //       const credential = GoogleAuthProvider.credentialFromError(error)
  //     })
  // }
  // const logout = () => {
  //   signOut(auth)
  //     .then(() => {
  //       setUser({})
  //     })
  //     .catch(error => {
  //       // 有錯誤
  //     })
  // }
  return (
    <AppBar position="static" color="default" {...props}>
      <Toolbar
        sx={{
          display: "flex",
          justifyContent: "space-between",
        }}
      >
        <div>
          <Typography
            variant="h6"
            sx={{ typography: "h6", lineHeight: "1.25rem" }}
          >
            MUI Theme Creator
          </Typography>
          <Typography
            variant="caption"
            sx={{ typography: "caption", fontWeight: 700 }}
          >
            {"└─ "}
            <Link
              href="https://mui.com/"
              target="_blank"
              rel="noreferrer"
              underline="hover"
            >
              {`@mui/material@${muiVersion}`}
            </Link>
          </Typography>
        </div>
        <div>
          <TutorialButton />
          {/* <IconButton
            href="https://github.com/archie-wu-lb/mui-theme-creator"
            target="_blank"
            rel="noreferrer"
            size="large"
          >
            <GitHubIcon />
          </IconButton> */}
          {/* <IconButton
            onClick={() => {
              if (user?.email) {
                logout()
              } else {
                signIn()
              }
            }}
          >
            {user?.email ? (
              <Box display="flex" alignItems="center">
                <Typography sx={{ mr: 1 }}>Logout</Typography>
                <LogoutIcon />
              </Box>
            ) : (
              <Box display="flex" alignItems="center">
                <Typography sx={{ mr: 1 }}>Login</Typography>
                <LoginIcon />
              </Box>
            )}
          </IconButton> */}
        </div>
      </Toolbar>
    </AppBar>
  )
}

export default Header
