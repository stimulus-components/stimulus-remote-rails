import { resolve } from 'path'
import { defineConfig } from 'vite'

export default defineConfig(({ mode }) => {
  if (mode === 'netlify') {
    return {
      build: {
        rollupOptions: {
          input: {
            index: resolve(__dirname, 'index.html'),
            message: resolve(__dirname, 'message.html')
          }
        }
      }
    }
  }

  return {
    build: {
      lib: {
        entry: resolve(__dirname, 'src/index.ts'),
        name: 'StimulusRemoteRails',
        fileName: 'stimulus-remote-rails'
      },
      rollupOptions: {
        external: ['@hotwired/stimulus'],
        output: {
          globals: {
            '@hotwired/stimulus': 'Stimulus'
          }
        }
      }
    }
  }
})
