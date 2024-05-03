import { cac } from 'cac'

const cli = cac('chibivite')

cli.command('[root]', 'start dev server').action(async (root: string) => {
  console.log(`Hello, chibivite at ${root}!`)
})

cli.parse()
