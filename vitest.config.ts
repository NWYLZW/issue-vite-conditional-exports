import { defineConfig } from 'vitest/config'

export default defineConfig({
  plugins: [
    {
      name: 'anonymous:overrideConditions',
      config: c => {
        if (!c.resolve) {
          c.resolve = {}
        }
        if (!c.resolve.conditions) {
          c.resolve.conditions = []
        }
        c.resolve.conditions = ['browser']
      },
    },
    {
      name: 'anonymous:logMergedConfig',
      enforce: 'pre',
      configResolved: c => console.log(c.resolve.conditions)
    }
  ]
})
