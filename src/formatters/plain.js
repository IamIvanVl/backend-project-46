import isPlainObject from 'lodash/isPlainObject.js'

const stringify = (value) => {
  if (isPlainObject(value)) {
    return '[complex value]'
  }
  if (typeof (value) === 'boolean' || value === null || typeof (value) === 'number') {
    return `${value}`
  }
  return `'${value}'`
}

const plain = (ast, path = '') => {
  const formatted = ast.flatMap((node) => {
    const propertyPath = path ? `${path}.${node.key}` : node.key
    const value = stringify(node.value, propertyPath)
    switch (node.status) {
      case 'unchanged':
        return []
      case 'nested':
        return plain(node.value, propertyPath)
      case 'changed':
        return `Property '${propertyPath}' was updated. From ${value} to ${stringify(node.newValue)}`
      case 'added':
        return `Property '${propertyPath}' was added with value: ${value}`
      case 'deleted':
        return `Property '${propertyPath}' was removed`
    }
  })
  return formatted.join('\n')
}

export default plain
