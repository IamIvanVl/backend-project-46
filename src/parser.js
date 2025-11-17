import yaml from 'js-yaml'

const formatsMap = {
  yaml: yaml.load,
  yml: yaml.load,
  json: JSON.parse,
}

export default (content, fileType) => {
  if (!formatsMap[fileType]) {
    throw new Error(`Unexpected format: ${fileType}`)
  }
  return formatsMap[fileType](content)
}
