import test from 'node:test'
import assert from 'node:assert/strict'

import { findSumTargetRange } from './findSumTargetRange.js'


test('findSumTargetRange', () => {
  assert.equal(findSumTargetRange([1, 4, 5], 9).join('-'), '1-2')
  assert.equal(findSumTargetRange([1, 4, 5, 9, 1, 2, 3], 6).join('-'), '4-6')
  assert.equal(findSumTargetRange([1, 4, 5, 9, 1, 2, 3], 100).join('-'), '')
})