import { type TodoId, type Todo as TodoType } from '../types/types'

interface Props extends TodoType {
  onRemoveTodo: ({ id }: TodoId) => void
  onToggledCompleted: ({ id, completed }: Pick<TodoType, 'id' | 'completed'>) => void
}

export const Todo: React.FC<Props> = ({ id, title, completed, onRemoveTodo, onToggledCompleted }) => {
  const handleChanged = (event: React.ChangeEvent<HTMLInputElement>): void => {
    onToggledCompleted({
      id,
      completed: event.target.checked
    })
  }

  return (
    <div className='view'>
      <input className='toggle'
      type='checkbox'
      checked={completed}
      onChange={handleChanged}
      />
      <label>{title}</label>
      <button className='destroy'
      onClick={() => {
        onRemoveTodo({ id })
      }}>

      </button>
    </div>
  )
}
