import stylish from './stylish.js'
import plain from './plain.js'
import { json } from './json.js'

const formattersMap = {
  stylish,
  plain,
  json,
}

const getFormat = (formatName) => {
  if (formatName === undefined) {
    throw new Error(`Unknown format: ${formatName}`)
  }
  return formattersMap[formatName]
}

export default getFormat
