export const sortComb0 = (arr) => {
  const copy = [...arr]

  const l = copy.length
  const factor = 1.247
  let gapFactor = l / factor

  while (gapFactor > 1) {
    const gap = Math.round(gapFactor)

    for (let i = 0, j = gap; j < l; i++, j++) {
      if (copy[i] > copy[j]) {
        ;[copy[i], copy[j]] = [copy[j], copy[i]]
      }
    }
    gapFactor = gapFactor / factor
  }
  return copy
}

export function sortComb1(arr) {
  const copy = [...arr]

  const FACTOR = 1.247
  const l = copy.length
  let curGap = l

  let i = 0
  let j = curGap

  while (curGap > 1) {
    const el1 = copy[i]
    const el2 = copy[j]

    if ((el2 || el2 === 0) && el1 > el2) {
      ;[copy[i], copy[j]] = [copy[j], copy[i]]
    }

    i++
    j++

    if (j >= l) {
      curGap = curGap / FACTOR
      i = 0
      j = Math.floor(curGap)
    }
  }

  return copy
}

export function sortComb2(arr) {
  const copy = [...arr]

  const DIVIDER = 1.247
  let curDivider = copy.length
  let isSwapped = false

  let i = 0

  while (curDivider !== 0) {
    const el1 = copy[i]
    const el2 = copy[i + curDivider]

    if ((el2 || el2 === 0) && el1 > el2) {
      copy[i] = el2
      copy[i + curDivider] = el1
      isSwapped = true
    }

    i += curDivider

    if (i >= copy.length) {
      i = 0
      curDivider = Math.floor(curDivider / DIVIDER)

      if (isSwapped === true && curDivider === 0) {
        curDivider = copy.length
        isSwapped = false
      }
    }
  }

  return copy
}