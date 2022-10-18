import React from 'react'
import { useTodoAppContext } from '../../contexts/TodoAppContext/TodoAppContext'
import Button from '../Button'
import Input from '../Input'
import { Styled } from './AddTodoForm.styled'

const AddTodoForm = () => {
  const todoAppCtx = useTodoAppContext()
  return (
    <Styled>
      <Input placeholder="Görev giriniz" type="text" />
      <select>
        {todoAppCtx.state.categories.map((cat: any) => (
          <option value={cat.id}>{cat.title}</option>
        ))}
      </select>
      <Button>Ekle</Button>
    </Styled>
  )
}

export default AddTodoForm
