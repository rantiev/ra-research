/*
 * Write function that takes two strings and detects if
 * one can be transformed to the other with only one character addition/removal or change
 */

// O(n)
export function detectOneCharStringMutation (s1, s2) {
  const lDiff = (s1.length - s2.length) * -1
  const _s1 = s1.toLowerCase()
  const _s2 = s2.toLowerCase()

  if (lDiff > 1 || _s1 === _s2) {
    return false
  }

  const s1Uniq = [...new Set (_s1)]
  const s2SUniq = [...new Set (_s2)]

  if (s1Uniq.length - s2SUniq.length > 1) {
    return false
  }

  let longest
  let shortest

    if (_s1.length >= _s2.length) {
      longest = _s1
      shortest = _s2
    } else {
      longest = _s2
      shortest = _s1
    }

  for (let i = 0; i < longest.length; i++) {
    const l = longest[i]
    const s = shortest[i]

    if (l === s) {
      continue
    }

    return longest.slice(i+1) === shortest.slice(i + (lDiff ? 0 : 1))
  }
}