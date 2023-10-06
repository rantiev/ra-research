import {describe, it } from 'node:test'
import assert from 'node:assert'
import { mergeSegments } from './segmentIntersection.js'

describe('mergeSegments tests', () => {
  it('should do what it should', () => {
    assert.equal(mergeSegments([1, 3], [100, 200], [2, 4]).join('-'), '1,4-100,200')
  })

  it('should work with more complicated case', () => {
    assert.equal(mergeSegments(
      [1, 10],
      [100, 200],
      [5, 8],
      [50, 200],
      [50, 210],
      [42, 210],
      [0, 12],
      [20, 20],
    ).join('-'), '0,12-20,20-42,210')
  })

  it('should even work with negatives', () => {
    assert.equal(mergeSegments(
      [1, 10],
      [0, 20],
      [-10, 300],
      [-11, 300],
    ).join('-'), '-11,300')
  })
})