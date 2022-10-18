import React, { FC, useState } from 'react'
import CategoryList from '../CategoryList'
import TodoList from '../TodoList'
import { Styled } from './Tabs.styled'

const tabs = [
  {
    id: 'todolist',
    title: 'Todo List',
    component: <TodoList />,
  },
  {
    id: 'categories',
    title: 'Categories List',
    component: <CategoryList/>,
  },
]

const Tabs: FC<any> = (props) => {
  const [activeTab, setActiveTab] = useState<string>(tabs[0].id)

  const handleChangeActiveTab = (id: string) => {
    setActiveTab(id)
  }
  return (
    <Styled>
      <div className="titles">
        {tabs.map((tab) => {
          return (
            <button
              className={
                tab.id === activeTab ? 'active tab-title' : 'tab-title'
              }
              onClick={() => handleChangeActiveTab(tab.id)}
            >
              {tab.title}
            </button>
          )
        })}
      </div>

      <div className="tabContent">
        {tabs.find((tab) => tab.id === activeTab)?.component}
      </div>
    </Styled>
  )
}

export default Tabs
