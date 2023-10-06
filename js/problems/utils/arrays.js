// range represented as [startNumber, endNumber]
export function splitRangeToArray (range) {
  const l = range[range.length - 1]
  let c = range[0]

  const res = []

  while (c <= l) {
    res.push(c)
    c++
  }

  return res
}