#!/usr/bin/env node
import { program } from 'commander'
import parser from '../src/parser.js'

program
  .name('gendiff')
  .description('Compares two configuration files and shows a difference.')
  .version('1.0.0')
  .option('-f, --format [type]', 'output format')
  .argument('<filepath1>')
  .argument('<filepath2>')
  .action((filepath1, filepath2) => {
    const file1 = parser(filepath1)
    const file2 = parser(filepath2)
    console.log(file1, file2)
  })

program.parse()
