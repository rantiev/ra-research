export function areSameLetterStrings (w1, w2) {
  return w1.split('').sort().join('') === w2.split('').sort().join('')
}