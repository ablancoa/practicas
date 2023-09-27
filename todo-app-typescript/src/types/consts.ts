export const TODO_FILTERS = {
  ALL: 'all',
  ACTIVE: 'active',
  COMPLETED: 'completed'
} as const

// El as const es para que TS entienda que es un objeto literal y no un string (permite solo la lectura)

export const FILTERS_BUTTONS = {
  [TODO_FILTERS.ALL]: {
    literal: 'Todos',
    href: `/?filter=${TODO_FILTERS.ALL}`
  },
  [TODO_FILTERS.ACTIVE]: {
    literal: 'Activos',
    href: `/?filter=${TODO_FILTERS.ACTIVE}`
  },
  [TODO_FILTERS.COMPLETED]: {
    literal: 'Completados',
    href: `/?filter=${TODO_FILTERS.COMPLETED}`
  }
} as const
