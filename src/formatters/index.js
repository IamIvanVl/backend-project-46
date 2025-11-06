import stylish from './stylish.js'
import plain from './plain.js'

const formattersMap = {
  stylish,
  plain,
}

const getFormat = (formatName) => {
  const formatterNames = Object.keys(formattersMap)
  if (!formatterNames.includes(formatName)) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formattersMap[formatName]
}

export default getFormat
