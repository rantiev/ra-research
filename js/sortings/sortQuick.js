export function sortQuick(arr) {
  const l = arr.length

  if (l < 2) {
    return arr
  }

  const p = arr[Math.floor(l / 2)]
  const left = []
  const right = []
  const equals = []

  let i = 0

  while (i < l) {
    const el = arr[i]

    if (el < p) {
      left.push(el)
    } else if (arr[i] > p) {
      right.push(el)
    } else {
      equals.push(el)
    }

    i++
  }

  return [...sortQuick(left), ...equals, ...sortQuick(right)]
}