import { useState } from 'react'
import { Todos } from './components/Todos'
import { type TodoId, type Todo as TodoType, type TodoFilter, type TodoTitle } from './types/types'
import { TODO_FILTERS } from './types/consts'
import { Footer } from './components/Footer'
import { Header } from './components/Header'

const mockTodos = [
  {
    id: 1,
    title: 'Aprender typeScript',
    completed: false
  },
  {
    id: 2,
    title: 'Hacer cotizaciones',
    completed: true
  },
  {
    id: 3,
    title: 'Aprender Firabase',
    completed: false
  }
]

function App (): JSX.Element {
  const [todos, setTodos] = useState(mockTodos)
  const [filterSelected, setFilterSelected] = useState<TodoFilter>(TODO_FILTERS.ALL)

  const handleCompleted = (
    { id, completed }: Pick<TodoType, 'id' | 'completed'>
  ): void => {
    const newTodos = todos.map(todo => {
      if (todo.id === id) {
        return {
          ...todo,
          completed
        }
      }
      return todo
    })

    setTodos(newTodos)
  }

  const handleFilterChange = (filter: TodoFilter): void => {
    setFilterSelected(filter)
  }

  const filteredTodos = todos.filter(todo => {
    if (filterSelected === TODO_FILTERS.ACTIVE) return !todo.completed
    if (filterSelected === TODO_FILTERS.COMPLETED) return todo.completed
    return todo
  })

  const hanldeRemove = ({ id }: TodoId): void => {
    const newTodos = todos.filter(todo => todo.id !== id)
    setTodos(newTodos)
  }

  const onClearCompleted = (): void => {
    const newTodos = todos.filter(todo => !todo.completed)
    setTodos(newTodos)
  }

  const handleAddTodo = ({ title }: TodoTitle): void => {
    const newTodos = [
      ...todos,
      {
        id: todos.length + 1,
        title,
        completed: false
      }
    ]
    setTodos(newTodos)
  }

  return (
    <div className='todoapp'>
      <Header onAddTodos={handleAddTodo}/>
      <Todos todos={filteredTodos}
      onRemoveTodo={hanldeRemove}
      onToggledCompleted={handleCompleted}
      />
      <Footer
        activeCount={todos.filter(todo => !todo.completed).length}
        filteredSelected={filterSelected}
        handleFilterChange={handleFilterChange}
        completedCount={todos.filter(todo => todo.completed).length}
        onClearCompleted={onClearCompleted}
        />
    </div>
  )
}

export default App
