// Factor 2 0(n**2)
export function sortShellF2(arr) {
  const FACTOR = 2
  const l = arr.length

  let gap = Math.floor(l / FACTOR)

  while (gap >= 1) {
    for (let i = gap; i < l; i++) {
      const current = arr[i]
      let j = i

      while (j > 0 && arr[j - gap] > current) {
        arr[j] = arr[j - gap]
        j -= gap
      }

      arr[j] = current
    }

    gap = Math.floor(gap / FACTOR)
  }

  return arr
}