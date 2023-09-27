import React, { useEffect, useState } from 'react'
import {useNavigate} from 'react-router-dom'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth';
import {auth} from '../firebase/credentials'
import AuthProvider from '../components/AuthProvider/AuthProvider';

export default function Login() {
  const navigate = useNavigate();
  const [currentUser, setCurrentUser] = useState(null);
  const [currentState, setCurrentState] = useState(0 )

  // Estados
  // 0: Inicializado
  // 1: Loading
  // 2: Login completado
  // 3: Login pero sin registro
  // 4: No hay nadie logueado
  // 5: Ya existe el username

  async function handleOnClick(){
     const googleProvider = new GoogleAuthProvider();
     await signInWithGoogle(googleProvider);

     async function signInWithGoogle(googleProvider){
      try {
        const response = await signInWithPopup(auth, googleProvider);
      } catch (error) {
        console.error(error)
      }
    }
  }
  
  function handleUserLoggedIn(user){
    navigate('/dashboard')
  }

  function handleUserNotLoggedIn(user){
    setCurrentState(4)
    navigate('/login')
  }

  function handleUserNotRegistered(user){
    navigate('/choose-username')
  }

  if(currentState === 4) {
    return (
      <div>
        <button onClick={handleOnClick}>Login With Google</button>
      </div>
    )
  }

  return <AuthProvider 
  onUserLoggedIn={handleUserLoggedIn} 
  onUserNotLoggedIn={handleUserNotLoggedIn} 
  onUserNotRegistered={handleUserNotRegistered}>
    <div> Loading</div>
  </AuthProvider>
}
