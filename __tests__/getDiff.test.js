import { expect, test } from 'vitest'
import genDiff from '../index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const formats = ['json', 'yml']

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = fileName => path.resolve(__dirname, '..', '__fixtures__', fileName)
const expectedStylish = fs.readFileSync(getFixturePath('stylishResult.txt'), 'utf-8')
const expectedPlain = fs.readFileSync(getFixturePath('plainResult.txt'), 'utf-8')
const expectedJson = fs.readFileSync(getFixturePath('jsonResult.json'), 'utf-8')

test.each(formats)('getDiff %s', (format) => {
  const file1Path = getFixturePath(`file1.${format}`)
  const file2Path = getFixturePath(`file2.${format}`)

  expect(genDiff(file1Path, file2Path, 'stylish')).toBe(expectedStylish)
  expect(genDiff(file1Path, file2Path, 'plain')).toBe(expectedPlain)
  expect(genDiff(file1Path, file2Path, 'json')).toBe(expectedJson)
})
