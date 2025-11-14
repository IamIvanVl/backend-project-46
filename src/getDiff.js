import isPlainObject from 'lodash/isPlainObject.js'

const getDiff = (file1, file2) => {
  const set = new Set([...Object.keys(file1), ...Object.keys(file2)])
  const unique = Array.from(set).toSorted()

  const ast = unique.map((key) => {
    if (!Object.hasOwn(file2, key)) {
      return { key, value: file1[key], status: 'deleted' }
    }
    else if (!Object.hasOwn(file1, key)) {
      return { key, value: file2[key], status: 'added' }
    }
    else if (isPlainObject(file1[key]) && isPlainObject(file2[key])) {
      return { key, value: getDiff(file1[key], file2[key]), status: 'nested' }
    }
    else if (file1[key] === file2[key]) {
      return { key, value: file1[key], status: 'unchanged' }
    }
    else if (file1[key] !== file2[key]) {
      return { key, value: file1[key], value2: file2[key], status: 'changed' }
    }
  })
  return ast
}

export default getDiff
