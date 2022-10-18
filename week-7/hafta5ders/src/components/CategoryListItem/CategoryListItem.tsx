import React, { FC, useState } from 'react'
import { useTodoAppContext } from '../../contexts/TodoAppContext/TodoAppContext'
import { category } from '../../services/http/patika/endpoints/category'
import Input from '../Input'
import { Styled } from './CategoryListItem.styled'

const CategoryListItem: FC<any> = (props) => {
  const todoAppCtx = useTodoAppContext()
  const [isEdit, setIsEdit] = useState<boolean>(false)
  const [value, setValue] = useState<string>(props.title)
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const handleSave = () => {
    category
      .update(props.id, { title: value })
      .then(() =>
        todoAppCtx.dispatches.updateCategory(props.id, { title: value })
      )
      .finally(() => {
        setIsEdit(false)
      })
  }
  return (
    <Styled>
      {!isEdit ? (
        <div>
          {props.title} <button onClick={() => setIsEdit(true)}>Edit</button>
        </div>
      ) : (
        <div>
          <Input
            onChange={handleChange}
            value={props.title}
            placeholder={''}
            type={'text'}
          />
          <button onClick={handleSave}>Save</button>
        </div>
      )}
    </Styled>
  )
}

export default CategoryListItem
