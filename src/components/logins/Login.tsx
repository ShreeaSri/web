import * as React from 'react'

import AuthForm from './AuthForm'

import { useSetToken } from '../../hooks/sessionRecoil'
import di from '../../di'

const Login: React.FC = () => {
  const setToken = useSetToken()

  const handleClickAccreditation = async (id: string, pw: string) => {
    const token = await di.session.login(id, pw)
    di.session.setToken(token)
    setToken(token)
  }

  return (
    <div>
      <div>
        <AuthForm accredit={handleClickAccreditation} btnValue={"Login"} />
      </div>
    </div>
  )
}

export default Login

