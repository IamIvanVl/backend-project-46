import yaml from 'js-yaml'

const parser = (content, fileType) => {
  if (fileType === 'yml' || fileType === 'yaml') {
    const parsed = yaml.load(content)
    return parsed
  }
  const parsed = JSON.parse(content)
  return parsed
}
export default parser
