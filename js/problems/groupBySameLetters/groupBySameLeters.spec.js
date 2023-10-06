import test from 'node:test'
import assert from 'node:assert/strict'

import { groupBySameLetters } from './groupBySameLetters.js'

test('groupBySameLetters', () => {
  const res1 = groupBySameLetters(['eat', 'tea', 'number', 'cumber'])

  assert.equal(res1[0].join('-'), 'eat-tea')
  assert.equal(res1[1].join('-'), 'number')
  assert.equal(res1[2].join('-'), 'cumber')

  const res2 = groupBySameLetters(['coffee', 'foccee'])

  assert.equal(res2[0].join('-'), 'coffee')
  assert.equal(res2[1].join('-'), 'foccee')

  const res3 = groupBySameLetters(['o', 'o', 'oo'])

  assert.equal(res3[0].join('-'), 'o')
  assert.equal(res3[1].join('-'), 'oo')
})