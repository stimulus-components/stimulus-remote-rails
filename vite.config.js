import path from 'path'

export default ({ mode }) => {
  if (mode === 'netlify') {
    return {
      build: {
        rollupOptions: {
          input: {
            index: path.resolve(__dirname, 'index.html'),
            message: path.resolve(__dirname, 'message.html')
          }
        }
      }
    }
  }

  return {
    build: {
      lib: {
        entry: path.resolve(__dirname, 'src/index.ts'),
        name: 'stimulus-remote-rails'
      },
      rollupOptions: {
        external: ['stimulus'],
        output: {
          globals: {
            stimulus: 'Stimulus'
          }
        }
      }
    }
  }
}
