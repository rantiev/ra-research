import test from 'node:test'
import assert from 'node:assert/strict'
import { countMostVisitedDay } from './hotelVisitors.js'

test('countMostVisitedDay', () => {
  const res1 = countMostVisitedDay([[1,3],[2,3],[3,4]])

  assert.equal(res1.date, 3)
  assert.equal(res1.visitors, 3)

  const res2 = countMostVisitedDay([[1,3], [2,8], [3,4], [2, 6], [1,4], [2, 16]])

  assert.equal(res2.date, 3)
  assert.equal(res2.visitors, 6)
})