import parser from '../src/parser.js'
import getDiff from '../src/getDiff.js'
import stylish from './formatters/stylish.js'

export const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parser(filepath1)
  const file2 = parser(filepath2)
  const diff = getDiff(file1, file2)
  const formatted = stylish(diff)
  return formatted
}
