/*
 * Write function that accepts numeric segments array representation as arguments
 * group numeric segments
 *
 * ex. input: [1,3], [100, 200], [2, 4]
 * ex. output: [[1,4], [100, 200]]
 */

// O(m*n + k + 2) -> O(m*n)
// O(m*n + k + x + y) -> O(m*n)
export function mergeSegments() {
  const res = []

  // O(m*n + 1)
  Array.prototype.forEach.call(arguments, (s1, i) => {
    if (i === 0) {
      // O(1) or O(x)
      res.push(s1)
      return
    }

    let intersect = false

    // O(n)
    res.some((s2) => {
      if (s1[0] < s2[0] && s1[1] < s2[0]
        || s1[0] > s2[1] && s1[1] > s2[1]) {
        intersect = false

        return intersect
      }

      intersect = true

      if (s1[0] <= s2[0] && s1[1] >= s2[1]) {
        s2[0] = s1[0]
        s2[1] = s1[1]
      } else if (s1[0] < s2[0] && s1[1] <= s2[1]) {
        s2[0] = s1[0]
      } else if (s1[0] >= s2[0] && s1[1] > s2[1]) {
        s2[1] = s1[1]
      }

      return intersect
    })

    // O(1) or O(y)
    if (!intersect) {
      res.push(s1)
    }
  })

  // O(k)
  return res.sort((x, y) => {
    return x[0] - y[0]
  })
}