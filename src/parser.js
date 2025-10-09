import fs from 'fs'
import path from 'path'
import process from 'process'
import yaml from 'js-yaml'

const parser = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  const fileType = absolutePath.split('.').at(-1)
  const content = fs.readFileSync(absolutePath)
  if (fileType === 'yml' || fileType === 'yaml') {
    const parsed = yaml.load(content)
    return parsed
  }
  const parsed = JSON.parse(content)
  return parsed
}
export default parser
