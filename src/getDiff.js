import sortBy from 'lodash/sortBy.js'

const getDiff = (file1, file2) => {
  const set = new Set([...Object.keys(file1), ...Object.keys(file2)])
  const unique = sortBy(Array.from(set))
  let resultString = ''
  for (const key of unique) {
    if (file1[key] === file2[key]) {
      resultString += `    ${key}: ${file1[key]}\n`
    }
    else if ((key in file1) && !(key in file2)) {
      resultString += `  - ${key}: ${file1[key]}\n`
    }
    else if (!(key in file1) && (key in file2)) {
      resultString += `  + ${key}: ${file2[key]}\n`
    }
    else {
      resultString += `  - ${key}: ${file1[key]}\n`
      resultString += `  + ${key}: ${file2[key]}\n`
    }
  }
  return `{\n${resultString}}`
}

export default getDiff
