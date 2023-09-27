import React, {useState} from 'react'
import {useNavigate} from 'react-router-dom'
import AuthProvider from '../components/AuthProvider/AuthProvider'
import {existUserName, updateUser} from '../firebase/credentials'

export default function ChoseUsername() {
  const navigate = useNavigate(); 
  const [currentState, setCurrentState] = useState(0)
  const [userState, setUserState] = useState({})
  const [userName, setUserName] = useState('')

  function handleUserLoggedIn(user){
    navigate('/dashboard')
  }

  function handleUserNotLoggedIn(user){
    setCurrentState(4) 
    navigate('/login')
  }

  function handleUserNotRegistered(user){
    setUserState(user)
    setCurrentState(3)
  }

  function handleInputUserName(event){
    setUserName(event.target.value)
  }

  async function hanldeContinue(){
    console.log(userState);
    if(userName !== ''){
      const exist = await existUserName(userName)
      if(exist){
        setCurrentState(5)
      }
      else {
        const tmp = {...userState}
        tmp.userName = userName
        tmp.processCompleted = true
        await updateUser(tmp)
      }
    }
    navigate('/dashboard')
  }

  if(currentState === 3 || currentState === 5 ){
    return (
      <div>
        <h1>Bienvenido {userState.displayName}</h1>
        <p>Para terminar el procesdo debes elegir un nombre de usuario</p>
        {currentState === 5 ? <p>El nombre de usuario ya existe</p> : null}
        <div>
          <input type="text" onInput={handleInputUserName}/>
        </div>

        <div>
          <button onClick={hanldeContinue}>Continuar</button>
        </div>
      </div>
    )
  }

  return (
    <AuthProvider
      onUserLoggedIn={handleUserLoggedIn}
      onUserNotLoggedIn={handleUserNotLoggedIn}
      onUserNotRegistered={handleUserNotRegistered}
    >

    </AuthProvider>
  )
}
