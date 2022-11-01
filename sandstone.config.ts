import type { SandstoneConfig } from 'sandstone'

export default {
  name: 'Mo Villager',
  description: [ 'A ', { text: 'Sandstone', color: 'gold' }, ' data pack.' ],
  formatVersion: 9,
  namespace: 'mo_villager',
  packUid: 'fEPIdBd4',
  saveOptions: { world: 'Testing 3' },
  onConflict: {
    default: 'warn',
  },
} as SandstoneConfig
