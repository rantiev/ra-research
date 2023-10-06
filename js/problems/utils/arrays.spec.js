import test from 'node:test'
import assert from 'node:assert'

import { splitRangeToArray } from './arrays.js'

test('splitRangeToArray', () => {
  assert.equal(splitRangeToArray([1,3].toString()), [1, 2, 3].toString())
  assert.equal(splitRangeToArray([2,3].toString()), [2, 3].toString())
  assert.equal(splitRangeToArray([4,8].toString()), [4, 5, 6, 7, 8].toString())
})