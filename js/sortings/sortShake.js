// O(n**2)
export function sortShake(arr) {
  let sorted = false

  while (!sorted) {
    sorted = true

    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > arr[i + 1]) {
        swapArrayElements(arr, i, i + 1)
        sorted = false
      }
    }

    if (sorted) break

    for (let i = arr.length - 1; i <= 0; i--) {
      if (arr[i] > arr[i + 1]) {
        swapArrayElements(arr, i, i - 1)
        sorted = false
      }
    }
  }

  return arr
}

function swapArrayElements(arr, i1, i2) {
  const t = arr[i1]
  arr[i1] = arr[i2]
  arr[i2] = t
}