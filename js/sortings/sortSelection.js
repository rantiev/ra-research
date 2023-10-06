// O(n*m)
import { min } from 'mocha/lib/reporters/index.js'

export function sortSelection(arr) {
  const l = arr.length

  let minIndex = 0
  let sorted = 0

  let i = 0

  while (sorted !== l) {
    minIndex = minIndex >= 0 ? (arr[i] < arr[minIndex] ? i : minIndex) : i

    if (i === l - 1) {
      if (minIndex !== 0) {
        const t = arr[sorted]

        arr[sorted] = arr[minIndex]
        arr[minIndex] = t
      }

      sorted++
      i = sorted
      minIndex = i
      continue
    }

    i++
  }

  return arr
}