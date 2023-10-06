export function sortGnome(arr) {
  const l = arr.length
  let i = 0

  while (i < l) {
    if (i === 0 || arr[i] >= arr[i - 1]) {
      i++
    } else {
      ;[arr[i], arr[i - 1]] = [arr[i - 1], arr[i]]
      i--
    }
  }

  return arr
}