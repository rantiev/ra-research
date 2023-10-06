/*
 * Find range that with elements sum equal to tager
 * ex. [1,4,5] with target 9 -> [1,2]
 */

export function findSumTargetRange (range, target) {
  let res = []
  let sum = 0

  let startFrom = 0
  let c = 0

  while (sum < target && startFrom < range.length - 1) {
    sum = sum + range[c]
    res.push(c)
    c++

    if (sum === target) {
      return [res[0], res[res.length - 1]]
    }

    if (c === range.length || sum > target) {
      startFrom++
      c = startFrom
      res = []
      sum = 0
    }
  }

  return []
}