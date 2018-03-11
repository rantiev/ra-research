// Two's Complement
function decimalToBinary (number, length) {
  const neg = number < 0
  let m = neg ? -number - 1 : number
  let r = ''

  while (m) {
    m % 2 ? (r = '1' + r) && m-- : r = '0' + r
    m /= 2
  }

  r = '0'.repeat(length - r.length) + r

  return neg ? r.replace(/\d/, f => f === '1' ? 0 : 1) : r
}