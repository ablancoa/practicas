import React, { useEffect } from 'react'
import {useNavigate} from 'react-router-dom'
import { onAuthStateChanged } from 'firebase/auth';
import {auth, getUserInfo, registerNewUser, userExists} from '../../firebase/credentials'

export default function AuthProvider({children, onUserLoggedIn, onUserNotRegistered, onUserNotLoggedIn}) {
  const navigate = useNavigate();

  useEffect(() => {
    onAuthStateChanged(auth, async (user) => {
      if(user){
        const isRegister = await userExists(user.uid)
        if(isRegister){
          const userInfo = await getUserInfo(user.uid)
          if(userInfo.processCompleted){
            onUserLoggedIn(userInfo)
          }
          else {
            onUserNotRegistered(userInfo)
          }
        } else {
          await registerNewUser({
            uid: user.uid,
            displayName: user.displayName,
            profilePicture: "",
            processCompleted: false,
            userName: ""
          })
          // TODO: Redireccionar a la pagina de registro 
          onUserNotRegistered(user)
        }
      } else {
        onUserNotLoggedIn()
      }
    })
  },[])
  return <div>{children}</div>
}