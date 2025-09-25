import fs from 'fs'
import path from 'path'
import process from 'process'

const parser = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const content = fs.readFileSync(absolutePath)
  const parsed = JSON.parse(content)
  return parsed
}
export default parser
