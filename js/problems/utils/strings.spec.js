import test from 'node:test'
import assert from 'node:assert'

import { areSameLetterStrings, checkQuotes, checkQuotes2 } from './strings.js'

test('areSameLetterStrings', () => {
  assert.equal(areSameLetterStrings('eat', 'tea'), true)
  assert.equal(areSameLetterStrings('o', 'o'), true)

  assert.equal(areSameLetterStrings('coffee', 'foccee'), false)
  assert.equal(areSameLetterStrings('number', 'dumber'), false)
  assert.equal(areSameLetterStrings('-number', 'number'), false)
})

test('checkQuotes', () => {
  assert.equal(checkQuotes('{}[()]'), true)
  assert.equal(checkQuotes('{}[(])'), false)
  assert.equal(checkQuotes('{[]}'), true)
  assert.equal(checkQuotes('}{'), false)
  assert.equal(checkQuotes('{(}{)}'), false)
})

test('checkQuotes2', () => {
  assert.equal(checkQuotes2('{}[()]'), true)
  assert.equal(checkQuotes2('{}[(])'), false)
  assert.equal(checkQuotes2('{[]}'), true)
  assert.equal(checkQuotes2('}{'), false)
  assert.equal(checkQuotes2('{(}{)}'), false)
})