export function getPrimes(n) {
  if (n <= 1) {
    return []
  }

  const res = []

  let i = 3

  while (i <= n) {
    if (i % 2 !== 0 && !res.some((x) => i % x === 0)) {
      res.push(i)
    }

    i++
  }

  return res
}