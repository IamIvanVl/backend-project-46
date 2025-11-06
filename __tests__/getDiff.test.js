import { expect, test } from 'vitest'
import genDiff from '../index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const formats = ['json', 'yml']

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = fileName => path.resolve(__dirname, '..', '__fixtures__', fileName)
const fixturePath = getFixturePath('getDiffResult.txt')
const fixture = fs.readFileSync(fixturePath, 'utf-8')

test.each(formats)('getDiff', (format) => {
  const file1Path = getFixturePath(`file1.${format}`)
  const file2Path = getFixturePath(`file2.${format}`)
  expect(genDiff(file1Path, file2Path, 'stylish')).toBe(fixture)
})

test.each(formats)('getDiff plain', (format) => {
  const file1Path = getFixturePath(`file1.${format}`)
  const file2Path = getFixturePath(`file2.${format}`)
  const expected = fs.readFileSync(getFixturePath('plainResult.txt'), 'utf-8')
  expect(genDiff(file1Path, file2Path, 'plain')).toBe(expected)
})

test.each(formats)('getDiff plain', (format) => {
  const file1Path = getFixturePath(`file1.${format}`)
  const file2Path = getFixturePath(`file2.${format}`)
  const expected = fs.readFileSync(getFixturePath('jsonResult.json'), 'utf-8')
  expect(genDiff(file1Path, file2Path, 'jsonFormatter')).toBe(expected)
})
