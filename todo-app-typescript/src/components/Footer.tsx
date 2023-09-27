import React from 'react'
import { Filters } from './Filters'
import { type TodoFilter } from '../types/types'

interface Props {
  activeCount: number
  completedCount: number
  filteredSelected: TodoFilter
  onClearCompleted: () => void
  handleFilterChange: (filter: TodoFilter) => void
}

export const Footer: React.FC<Props> = ({
  activeCount = 0,
  filteredSelected = 'all',
  handleFilterChange,
  completedCount,
  onClearCompleted
}) => {
  return (
    <footer className='footer'>
      <span className='todo-count'>
        <strong>{activeCount}</strong> items pendientes
      </span>

      <Filters
      filteredSelected={filteredSelected}
      onFilterChange={handleFilterChange}
      />

      {completedCount > 0 && (
        <button
          className='clear-completed'
          onClick={onClearCompleted}
        >
          Limpiar completados
        </button>
      )}
    </footer>
  )
}
