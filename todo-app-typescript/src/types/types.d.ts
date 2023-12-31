import { type TODO_FILTERS } from './consts'

export interface Todo {
  id: number
  title: string
  completed: boolean
}

export type TodoTitle = Pick<Todo, 'title'>
export type TodoId = Pick<Todo, 'id'>
export type TodoCompleted = Pick<Todo, 'completed'>

export type ListOfTodos = Todo[]

export type TodoFilter = typeof TODO_FILTERS[keyof typeof TODO_FILTERS]
