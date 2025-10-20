import sortBy from 'lodash/sortBy.js'
import isPlainObject from 'lodash/isPlainObject.js'

const getDiff = (file1, file2) => {
  const set = new Set([...Object.keys(file1), ...Object.keys(file2)])
  const unique = sortBy(Array.from(set))

  const ast = unique.map((key) => {
    if ((key in file1) && !(key in file2)) {
      key = { key, value: file1[key], status: 'deleted' }
      return key
    }
    else if (!(key in file1) && (key in file2)) {
      key = { key, value: file2[key], status: 'added' }
      return key
    }
    else if (isPlainObject(file1[key]) && isPlainObject(file2[key])) {
      return { key, value: getDiff(file1[key], file2[key]), status: 'nested' }
    }
    else if (file1[key] === file2[key]) {
      key = { key, value: file1[key], status: 'unchanged' }
      return key
    }
    else if (file1[key] !== file2[key]) {
      key = { key, value: file1[key], newValue: file2[key], status: 'changed' }
      return key
    }
  })
  return ast
}

export default getDiff
