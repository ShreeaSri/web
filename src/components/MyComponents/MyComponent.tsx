import React from 'react'
import { useSetToken } from '../../hooks/sessionRecoil'
import di from '../../di'

const MyComponent = () => {
    const setUserToken = useSetToken();

  const handleClickLogout = () => {
    di.session.removeToken()
    setUserToken('')
  }
  return (
    <div>
       <div>
      <h1>React with Clean architecture</h1>
      <button type="button" onClick={handleClickLogout} value="Logout">log out</button>
      
    </div>
    </div>
  )
}

export default MyComponent
