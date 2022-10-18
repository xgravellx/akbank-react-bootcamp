import React, { FC } from 'react'
import Button from '../components/Button'
import Tabs from '../components/Tabs'
import { useLoginContext } from '../contexts/LoginContext/LoginContext'

export type TodoAppProps = {}
const TodoApp: FC<TodoAppProps> = (props) => {
  const { logout, username } = useLoginContext()

  const handleLogout = () => {
    logout()
  }
  return (
    <div>
      hoşgeldiniz sayın {username}
      <Tabs />
      <Button onClick={handleLogout}>Logout</Button>
    </div>
  )
}

export default TodoApp
