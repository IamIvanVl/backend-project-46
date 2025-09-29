import { expect, test } from 'vitest'
import { genDiff } from '../src/index.js'
import fs from 'fs'
import path from 'path'
import { fileURLToPath } from 'url'

const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const getFixturePath = fileName => path.resolve(__dirname, '..', '__fixtures__', fileName)
const fixturePath = getFixturePath('getDiffResult.txt')
const file1Path = getFixturePath('file1.json')
const file2Path = getFixturePath('file2.json')
const fixture = fs.readFileSync(fixturePath, 'utf-8')

test('getDiff', () => {
  expect(genDiff(file1Path, file2Path)).toBe(fixture)
})
