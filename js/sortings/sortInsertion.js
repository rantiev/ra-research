// O(n**2)
export function sortInsertion1(arr) {
  const res = []

  arr.forEach((n, i) => {
    const l = res.length

    if (!i || n > res[l - 1]) {
      res.push(n)
      return
    }

    for (let j = l - 1; j >= 0; j--) {
      if (res[j] < n) {
        res.splice(j + 1, 0, n)
        break
      } else if (j === 0) {
        res.unshift(n)
      }
    }
  })

  return res
}

// 0(n**2)
export function sortInsertion2(arr) {
  arr.forEach((n, i) => {
    let min = i

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[min]) {
        min = j
      }
    }
    ;[arr[i], arr[min]] = [arr[min], arr[i]]
  })

  return arr
}