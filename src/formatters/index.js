import stylish from './stylish.js'
import plain from './plain.js'
import { json } from './json.js'

const formattersMap = {
  stylish,
  plain,
  json,
}

const getFormat = (formatName) => {
  const formatterNames = Object.keys(formattersMap)
  if (!formatterNames.includes(formatName)) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formattersMap[formatName]
}

export default getFormat
