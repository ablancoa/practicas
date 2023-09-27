import { useState } from 'react'
import { type TodoTitle } from '../types/types'

interface Props {
  saveTodo: ({ title }: TodoTitle) => void
}

export const CreateTdos: React.FC<Props> = ({ saveTodo }) => {
  const [inputValue, setInputValue] = useState('')

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>): void => {
    e.preventDefault()
    saveTodo({
      title: inputValue
    })
    setInputValue('')
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value)
  }

  return (
    <form onSubmit={handleSubmit}>

    <input
      className='new-todo'
      placeholder='¿Qué quieres hacer?'
      value={inputValue}
      name='title'
      onChange={(e) => { handleInputChange(e) }}
      autoFocus
      required
    />

    </form>
  )
}
