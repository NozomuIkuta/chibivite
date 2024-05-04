import { cac } from 'cac'

const cli = cac('chibivite')

cli.command('[root]', 'start dev server').action(async (root: string) => {
  console.log(`Hello, chibivite at ${root}!`)
  const { createServer } = await import('./server')

  try {
    const server = await createServer()
    await server.listen()
  } catch (e) {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    console.error(`error when starting dev server:\n${(e as any).stack}`)
    process.exit(1)
  }
})

cli.parse()
