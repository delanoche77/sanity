import { defineCliConfig } from 'sanity/cli'

export default defineCliConfig({
  api: {
    projectId: 'niszf64x',
    dataset: 'blog' // Preveri, če želiš 'blog' ali 'production'
  },
  deployment: {
    appId: 'o0odedhyqbxlpvwvh3awbvm5',
    autoUpdates: true,
  }
})