import test from 'node:test'
import assert from 'node:assert/strict'

import { getPrimes } from './getPrimes.js'

test('getPrimes', () => {
  assert.equal(getPrimes(10).join(','), '3,5,7')
  assert.equal(getPrimes(15).join(','), '3,5,7,11,13')
})