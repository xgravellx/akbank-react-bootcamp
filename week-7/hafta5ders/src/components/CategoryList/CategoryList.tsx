import React, { useEffect, useState } from 'react'
import { useTodoAppContext } from '../../contexts/TodoAppContext/TodoAppContext'
import { category } from '../../services/http/patika/endpoints/category'
import AddTodoForm from '../AddTodoForm'
import Button from '../Button'
import CategoryListItem from '../CategoryListItem'
import Input from '../Input'
import { Styled } from './CategoryList.styled'
import { CategoryType } from './CategoryList.types'

const CategoryList = () => {
  const [value, setValue] = useState<string>('')
  const handleChange = (e: any) => {
    setValue(e.target.value)
  }

  const todoAppCtx = useTodoAppContext()

  const handleAddCategory = (category: any) => {
    todoAppCtx.dispatches.addCategory(category)
  }

  const handleAddClick = () => {
    category.create({ title: value }).then(({ data }) => {
      handleAddCategory(data)
    })
  }

  return (
    <Styled>
      <div className="add-category-form">
        <Input
          onChange={handleChange}
          placeholder="Kategori giriniz"
          type="text"
        />
        <Button onClick={handleAddClick}>Ekle</Button>
      </div>

      <div className="category-list">
        <ul>
          {todoAppCtx.state.categories.map((cat) => (
            <CategoryListItem title={cat.title} id={cat.id} />
          ))}
        </ul>
      </div>
    </Styled>
  )
}

export default CategoryList
