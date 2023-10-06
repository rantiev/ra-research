import _ from 'lodash'

// O(n!)
export function sortBogo(arr) {
  let res = [...arr]
  let i = 0

  while (i < arr.length) {
    if (arr[i] > arr[i + 1]) {
      res = _.shuffle(res)
      i = 0
    }

    i++
  }

  return res
}