import { FILTERS_BUTTONS } from '../types/consts'
import { type TodoFilter } from '../types/types'

interface Props {
  filteredSelected: TodoFilter
  onFilterChange: (filter: TodoFilter) => void
}

export const Filters: React.FC<Props> = ({
  filteredSelected,
  onFilterChange
}) => {
  const handleClick = (event: React.MouseEvent<HTMLAnchorElement>, key: TodoFilter): void => {
    event.preventDefault()
    onFilterChange(key)
  }
  return (
    <ul className='filters'>
      {
        Object.entries(FILTERS_BUTTONS).map(([key, { href, literal }]) => {
          const isSelected = filteredSelected === key
          const className = isSelected ? 'selected' : ''

          return (
            <li key={key}>
              <a
                className={className}
                href={href}
                onClick={(event) => { handleClick(event, key as TodoFilter) }}
              >
                {literal}
              </a>
            </li>
          )
        })
      }
    </ul>

  )
}
