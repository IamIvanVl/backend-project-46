import parser from '../src/parser.js'
import getDiff from '../src/getDiff.js'

export const genDiff = (filepath1, filepath2) => {
  const file1 = parser(filepath1)
  const file2 = parser(filepath2)
  const diff = getDiff(file1, file2)
  return diff
}
