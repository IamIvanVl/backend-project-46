const indent = (depth) => {
  const space = depth * 4 - 2
  return ` `.repeat(space)
}
const stylish = (ast, depth = 1) => {
  const space = indent(depth)
  const formatted = ast.map((node) => {
    switch (node.status) {
      case 'unchanged':
        return `  ${space}${node.key}: ${node.value}`
      case 'nested':
        return stylish(node.value, depth + 1)
      case 'changed':
        return `${space}- ${node.key}: ${node.value}\n${space}+ ${node.key}: ${node.newValue}`
      case 'added':
        return `${space}+ ${node.key}: ${node.value}`
      case 'deleted':
        return `${space}- ${node.key}: ${node.value}`
    }
  })
  return formatted.join('\n')
}

export default stylish
