import test from 'node:test'
import assert from 'node:assert'

import { areSameLetterStrings } from './strings.js'

test('areSameLetterStrings', () => {
  assert.equal(areSameLetterStrings('eat', 'tea'), true)
  assert.equal(areSameLetterStrings('o', 'o'), true)

  assert.equal(areSameLetterStrings('coffee', 'foccee'), false)
  assert.equal(areSameLetterStrings('number', 'dumber'), false)
  assert.equal(areSameLetterStrings('-number', 'number'), false)
})