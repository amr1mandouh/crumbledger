import type { KilnLoad } from '../types'

const STORAGE_KEY = 'crumbledger.loads'

export function sampleKilnLoads(): KilnLoad[] {
  return [
    {
      id: 'load-amber', name: 'Saturday Oven', studio: 'Twelve Crumbs', city: 'Alexandria', firingDate: '2026-08-21', coolDate: '2026-08-23',
      pieces: [
        { id: 'amber-01', name: 'Sea-glass breakfast levain', category: 'levain', number: 1, finished: true, priority: true, notes: 'Celadon rim; handle needs a gentle shelf.' },
        { id: 'amber-02', name: 'Tide line rye', category: 'rye', number: 2, finished: false, priority: false, notes: 'Oxide wash on the outside.' },
        { id: 'amber-03', name: 'Blue hour sweets', category: 'sweet', number: 3, finished: false, priority: true, notes: 'Commission set, keep together.' },
        { id: 'amber-04', name: 'Quiet reed savory', category: 'savory', number: 4, finished: false, priority: false, notes: 'Leave space around the neck.' },
        { id: 'amber-05', name: 'Little sun seasonal', category: 'seasonal', number: 5, finished: true, priority: false, notes: 'Photograph before packing.' }
      ]
    },
    {
      id: 'load-cinder', name: 'Night Proof', studio: 'East Market Bakehouse', city: 'Cairo', firingDate: '2026-08-28', coolDate: '2026-08-30',
      pieces: [
        { id: 'cinder-01', name: 'Ash handle tumbler', category: 'levain', number: 1, finished: false, priority: true, notes: 'Test glaze A7.' },
        { id: 'cinder-02', name: 'Salt pocket rye', category: 'rye', number: 2, finished: false, priority: false, notes: 'Place on a cookie.' },
        { id: 'cinder-03', name: 'Night market savory', category: 'savory', number: 3, finished: false, priority: false, notes: 'Tall shelf only.' }
      ]
    }
  ]
}

export function loadKilnLoads(): KilnLoad[] {
  try {
    const raw = localStorage.getItem(STORAGE_KEY)
    if (!raw) return sampleKilnLoads()
    const parsed: unknown = JSON.parse(raw)
    if (!Array.isArray(parsed)) throw new Error('Invalid kiln data')
    return parsed as KilnLoad[]
  } catch {
    return sampleKilnLoads()
  }
}

export function saveKilnLoads(loads: KilnLoad[]): void {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(loads))
}

