import connect from 'connect'

const PORT = 5137

export async function createServer() {
  const middlewares = connect()
  const { createServer } = await import('node:http')
  const httpServer = createServer(middlewares)

  const server = {
    middlewares,
    httpServer,
    async listen() {
      await new Promise((resolve, reject) => {
        const onError = (e: Error & { code?: string }) => {
          httpServer.removeListener('error', onError)

          if (e.code === 'EADDRINUSE') {
            reject(new Error(`Port ${PORT} is already in use`))
          } else {
            reject(e)
          }
        }

        httpServer.on('error', onError)

        server.httpServer.listen(PORT, () => {
          httpServer.removeListener('error', onError)
          resolve(PORT)
        })
      })

      return server
    },
  }

  return server
}
