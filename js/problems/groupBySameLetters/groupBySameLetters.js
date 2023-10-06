/*
 * Group words by same letters
 * ex. input ['eat', 'tea', 'number', 'cumber']
 * ex. output [['eat', 'tea'] ['number'], ['cumber']]
 */

import { areSameLetterStrings } from '../utils/strings.js'


// O(m*n)
export function groupBySameLetters (input) {
  const l = input.length
  let i = 1

  const res = l ? [[input[0]]] : []

  // Complexity  of going through the array is O(m)
  while (i < l) {
    let found = false
    const cur = input[i]

    // Complexity  of going through the array is O(n)
    res.some(group => {
      if (cur.length !== group[0].length) {
        return
      }

      // Complexity  of going through the array of string letters is O(x)
      found = group.includes(cur)

      if (!found) {
        if (areSameLetterStrings(group[0], cur)) {
          found = true
          group.push(cur)

          return true
        }
      }
    })

    if (!found) {
      res.push([cur])
    }

    i++
  }

  return res
}