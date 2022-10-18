import {
    Children,
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useEffect,
  useState,
} from 'react'
import { category } from '../../services/http/patika/endpoints/category'
import { StateType, ContextType } from './types'

export const initialState: StateType = {
  categories: [],
}

export const TodoAppContext = createContext<ContextType>({
  dispatches: {},
  state: initialState,
})

export const TodoAppProvider: FC<PropsWithChildren> = ({children}) => {
  const [state, setState] = useState<StateType>(initialState)
  const dispatches: ContextType['dispatches'] = {}
  useEffect(() => {
    category.list().then(({ data }) => {
      setState((prev) => ({ ...prev, categories: data }))
    })
  }, [])

  dispatches.addCategory = (category: any) => {
    setState((prev) => ({
      ...prev,
      categories: [...prev.categories, category],
    }))
  }
  dispatches.updateCategory = (id:number,category:any)=>{
    setState(prev=>({
        ...prev,
        categories: prev.categories.map(cat=>({
            ...cat,
            title : (id===cat.id) ? category.title : cat.title
        }))
    }))
  }

  return (
    <TodoAppContext.Provider
      value={{
        state,
        dispatches,
      }}
    >
      {children}
    </TodoAppContext.Provider>
  )
}

export const useTodoAppContext = ()=>{
    return useContext(TodoAppContext)
}
