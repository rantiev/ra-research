export function areSameLetterStrings(w1, w2) {
  return w1.split('').sort().join('') === w2.split('').sort().join('')
}

export function checkQuotes(s) {
  const badPatterns = ['{)', '{]', '(}', '(]', '[)', '[}']

  if (
    s.length === 1 ||
    badPatterns.some((p) => s.includes(p)) ||
    /[}\])]/.test(s[0]) ||
    /[{[(]/.test(s[s.length - 1])
  ) {
    return false
  }

  const h = {}

  for (let c in s) {
    h[c] = h[c] ? ++h[c] : 1
  }

  return h['{'] === h['}'] && h['['] === h[']'] && h['('] === h[')']
}

export function checkQuotes2(s) {
  const h = {
    '{': '}',
    '(': ')',
    '[': ']'
  }

  let res = ''
  let i = 0

  while (i < s.length) {
    const c = h[s[i]]

    if (c) {
      res += s[i]
    } else if (h[res.slice(-1)] === s[i]) {
      res = res.slice(0, -1)
    } else {
      return false
    }

    i++
  }

  return res.length === 0
}