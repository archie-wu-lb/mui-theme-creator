import { initializeApp } from "firebase/app"
import { getDatabase } from "firebase/database"
import React, { useState } from "react"

interface FirebaseContextProps {
  app: any
  database: any
  user: any
  setUser: (user: any) => void
}
// Initialize Firebase
export const FirebaseContext = React.createContext({} as FirebaseContextProps)

const Firebase = (props: { children: any }) => {
  const firebaseConfig = {
    apiKey: process.env.GATSBY_APIKEY,
    authDomain: "mui-theme-creator.firebaseapp.com",
    databaseURL:
      "https://mui-theme-creator-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "mui-theme-creator",
    storageBucket: "mui-theme-creator.appspot.com",
    messagingSenderId: "311963482622",
    appId: process.env.GATSBY_APPID,
  }
  const app = initializeApp(firebaseConfig)
  const database = getDatabase(app)

  const [user, setUser] = useState({})

  return (
    <FirebaseContext.Provider
      value={{ app: app, database: database, user: user, setUser: setUser }}
    >
      {props.children}
    </FirebaseContext.Provider>
  )
}

export default Firebase
