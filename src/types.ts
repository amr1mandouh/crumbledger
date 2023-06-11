export type PieceCategory = 'levain' | 'rye' | 'sweet' | 'savory' | 'seasonal'

export type Piece = {
  id: string
  name: string
  category: PieceCategory
  number: number
  finished: boolean
  priority: boolean
  notes: string
}

export type KilnLoad = {
  id: string
  name: string
  studio: string
  city: string
  firingDate: string
  coolDate: string
  pieces: Piece[]
}

export type Filters = {
  query: string
  category: PieceCategory | 'all'
  status: 'all' | 'finished' | 'waiting'
  priorityOnly: boolean
}

