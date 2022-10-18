export type StateType = {
  categories: Array<{
    id: number
    title: string
  }>
}

export type ContextType = {
  state: StateType
  dispatches :  any
}