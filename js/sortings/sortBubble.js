
// O(n**2)
export function sortBubble1 (arr) {
  const copy = [...arr]
  const l = arr.length

  let i = 0

  while (1) {
    if (copy[i] > copy[i + 1]) {
      const t = copy[i + 1]
      copy[i + 1] = copy[i]
      copy[i] = t
      i = 0
      continue
    } else {
      i++
    }

    if (i === l) return copy
  }
}

export function sortBubble2 (arr) {
  const copy = [...arr]
  const l = arr.length

  let noSwaps = true
  let i = 0

  while (1) {
    if (copy[i] > copy[i + 1]) {
      const t = copy[i + 1]
      copy[i + 1] = copy[i]
      copy[i] = t

      noSwaps = false
      i = 0
      continue
    } else {
      i++
    }

    if (i === l) {
      if (noSwaps) {
        return copy
      } else {
        noSwaps = true
        i = 0
      }
    }
  }
}