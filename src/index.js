import parser from '../src/parser.js'
import getDiff from '../src/getDiff.js'
import stylish from './formatters/stylish.js'
import plain from './formatters/plain.js'

export const genDiff = (filepath1, filepath2, format = 'stylish') => {
  const file1 = parser(filepath1)
  const file2 = parser(filepath2)
  const diff = getDiff(file1, file2)
  if (format === 'plain') {
    return plain(diff)
  }
  if (format === 'stylish') {
    return stylish(diff)
  }
}
