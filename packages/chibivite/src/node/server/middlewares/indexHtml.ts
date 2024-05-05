import fsp from 'node:fs/promises'
import path from 'node:path'
import type Connect from 'connect'

export function indexHtmlMiddleware(root: string): Connect.NextHandleFunction {
  return async function chibiviteIndexHtmlMiddleware(req, res, next) {
    try {
      const filePath = path.join(root, 'index.html')
      const html = await fsp.readFile(filePath, 'utf-8')
      res.statusCode = 200
      res.end(html)
    } catch (e) {
      return next(e)
    }
  }
}
