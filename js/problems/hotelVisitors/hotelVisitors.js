/*
 * Given representation of visitor checkIN/OUT dates as array of arrays
 * find what was the date with the biggest number of visitors (most visited day)
 *
 * Let's think that we count it at the end of a day, IN/OUT dates already sorted
 * Minimal stay is 1 day long
 *
 * representation ex: = [[1, 2], [1, 3], [2, 4], [2, 3]]
 */

import { splitRangeToArray } from '../utils/arrays.js'

// Total Complexity is O(n**2) as it's the biggest in that algorithm
export function countMostVisitedDay(stayDates) {
  const l = stayDates.length
  let i = 0

  const resTable = {}

  // Complexity is O(n*m)
  while (i < l) {
    const currentRange = stayDates[i]

    splitRangeToArray(currentRange).forEach((n) => {
      resTable[n] = resTable[n] ? resTable[n] + 1 : 1
    })

    i++
  }

  let maxK = null
  let maxN = 0

  // Complexity is O(m)
  Object.keys(resTable).forEach((k) => {
    if (resTable[k] > maxN) {
      maxN = resTable[k]
      maxK = k
    }
  })

  return { date: +maxK, visitors: maxN }
}

// range represented as [startNumber, endNumber]
export function splitRangeToArray(range) {
  const l = range[range.length - 1]
  let c = range[0]

  const res = []

  while (c <= l) {
    res.push(c)
    c++
  }

  return res
}