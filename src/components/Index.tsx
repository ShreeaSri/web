/* eslint-disable react-hooks/exhaustive-deps */
import React, { useEffect } from 'react'

import Login from './logins/Login'
import MyComponent from './MyComponents/MyComponent'

import { useTokenState } from '../hooks/sessionRecoil'
import di from '../di'

const Index: React.FC = () => {
  const [token, setToken] = useTokenState()

  useEffect(() => {
    (async () => {
      const storageToken = await di.session.getToken()
      if (storageToken) {
        di.session.setToken(storageToken)
        setToken(storageToken)
      }
    })()
  }, [token])

  return (
    <div className={'wrap'}>
      {token === '' && (
        <Login />
      )}
      {token && (
        <MyComponent/>
      )}
    </div>
  )
}


export default Index