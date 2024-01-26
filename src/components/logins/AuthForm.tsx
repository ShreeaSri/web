import React, { useState } from 'react'

interface IProps {
  accredit(id: string, pw: string): void
  btnValue: string
}

const AuthForm: React.FC<IProps> = (props) => {

  const { accredit, btnValue } = props
  const [id, setId] = useState<string>('')
  const [pw, setPw] = useState<string>('')

  const handleChangeClientInfo = (event: React.ChangeEvent<HTMLInputElement>): void => {
    const updateFnc = event.target.name === 'id' ? setId : setPw
    updateFnc(event.target.value)
  }

  const handleClickAccredit = () => {
    accredit(id, pw)
  }

  const handleKeyDownAccredit = (event: React.KeyboardEvent) => {
    if (event.key === 'Enter') {
      accredit(id, pw)
    }
  }

  return (
    <section>
      
        <input type="text" name="id" placeholder="ID" onChange={handleChangeClientInfo} onKeyDown={handleKeyDownAccredit} value={id} />
      
      
        <input type="password" name="pw" placeholder="Password" onChange={handleChangeClientInfo} onKeyDown={handleKeyDownAccredit} value={pw} />
      
        <button type="button" onClick={handleClickAccredit} value={btnValue} >Log In</button>
      
    </section>
  )
}

export default AuthForm

