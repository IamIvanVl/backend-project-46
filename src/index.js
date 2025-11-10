import parser from '../src/parser.js'
import getDiff from '../src/getDiff.js'
import getFormat from './formatters/index.js'
import fs from 'fs'
import path from 'path'
import process from 'process'

const readFile = (filepath) => {
  const absolutePath = path.resolve(process.cwd(), filepath)
  return fs.readFileSync(absolutePath)
}
const getExtension = filepath => path.extname(filepath).slice(1)

export const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const content1 = readFile(filepath1)
  const content2 = readFile(filepath2)
  const file1 = parser(content1, getExtension(filepath1))
  const file2 = parser(content2, getExtension(filepath2))
  const diff = getDiff(file1, file2)
  const formatter = getFormat(format)
  return formatter(diff)
}
