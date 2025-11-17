import isPlainObject from 'lodash/isPlainObject.js'

const stringify = (value) => {
  if (isPlainObject(value)) {
    return '[complex value]'
  }
  if (typeof (value) !== 'string') {
    return `${value}`
  }
  return `'${value}'`
}

const plain = (ast, path = []) => ast.flatMap((node) => {
  const propertyPath = path ? [...path, node.key] : [node.key]
  const stringifiedValue = stringify(node.value, propertyPath)
  switch (node.status) {
    case 'unchanged':
      return []
    case 'nested':
      return plain(node.value, propertyPath)
    case 'changed':
      return `Property '${propertyPath.join('.')}' was updated. From ${stringifiedValue} to ${stringify(node.value2)}`
    case 'added':
      return `Property '${propertyPath.join('.')}' was added with value: ${stringifiedValue}`
    case 'deleted':
      return `Property '${propertyPath.join('.')}' was removed`
  }
})
  .join('\n')

export default plain
