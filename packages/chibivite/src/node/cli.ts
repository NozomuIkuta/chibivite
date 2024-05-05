import { cac } from 'cac'

const cli = cac('chibivite')

cli.command('', 'start dev server').action(async () => {
  try {
    const { createServer } = await import('./server')
    const server = await createServer()
    await server.listen()
    console.log('Listening...')
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error(`error when starting dev server:\n${(e as any).stack}`)
    process.exit(1)
  }
})

cli.parse()
