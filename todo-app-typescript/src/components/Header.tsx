import { type TodoTitle } from '../types/types'
import { CreateTdos } from './CreateTodo'

interface Props {
  onAddTodos: ({ title }: TodoTitle) => void
}

export const Header: React.FC<Props> = ({ onAddTodos }) => {
  return (
    <header className='header'>
      <h1>todos
        <img
        style={{ width: '50px', height: '50px' }}
        src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/640px-Typescript_logo_2020.svg.png" />
      </h1>

      <CreateTdos saveTodo={onAddTodos} />
    </header>
  )
}
