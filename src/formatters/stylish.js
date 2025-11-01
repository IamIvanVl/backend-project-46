import isPlainObject from 'lodash/isPlainObject.js'

const indent = (depth) => {
  const space = Math.max(depth * 4 - 2, 0)
  return ` `.repeat(space)
}

const stringify = (value, depth) => {
  if (!isPlainObject(value)) {
    return value
  }
  const space = indent(depth)

  const entries = Object.entries(value)
  const result = entries.map(([key, value]) => {
    return `${indent(depth + 1)}  ${key}: ${stringify(value, depth + 1)}`
  })
  return `{\n${result.join('\n')}\n${space}  }`
}

const stylish = (ast, depth = 1) => {
  const space = indent(depth)
  const formatted = ast.map((node) => {
    const string = stringify(node.value, depth)
    switch (node.status) {
      case 'unchanged':
        return `${space}  ${node.key}: ${string}`
      case 'nested':
        return `${space}  ${node.key}: {\n${stylish(node.value, depth + 1)}\n${space}  }`
      case 'changed':
        return `${space}- ${node.key}: ${string}\n${space}+ ${node.key}: ${stringify(node.newValue, depth)}`
      case 'added':
        return `${space}+ ${node.key}: ${string}`
      case 'deleted':
        return `${space}- ${node.key}: ${string}`
    }
  })
  return formatted.join('\n')
}

export default ast => `{\n${stylish(ast)}\n}`
