// O!
export function sortMerge1(arr) {
  const l = arr.length

  if (l === 1) {
    return arr
  }

  const center = Math.ceil(l / 2)

  const left = arr.slice(0, center)
  const right = arr.slice(center)

  const resL = sortMerge1(left)
  const resR = sortMerge1(right)

  return mergeSortSubArrays(resL, resR)
}

// O(n log n)
export function sortMerge2(arr) {
  let res = arr.map((el) => [el])

  let tmp = []

  let i = 0

  while (res[0].length !== arr.length) {
    const arr1 = res[i]
    const arr2 = res[i + 1]

    if (!arr1 && !arr2) {
      res = tmp
      tmp = []
      i = 0
    } else {
      tmp.push(mergeSortSubArrays(arr1, arr2))
      i = i + 2
    }
  }

  return res[0]
}

function mergeSortSubArrays(arr1, arr2) {
  let joint = []

  let j = 0
  let k = 0

  while (j < arr1?.length || k < arr2?.length) {
    if (!arr1 || arr1[j] === undefined) {
      joint = [...joint, ...arr2.slice(k)]
      k = arr2.length
    } else if (!arr2 || arr2[k] === undefined) {
      joint = [...joint, ...arr1.slice(j)]
      j = arr1.length
    } else if (arr1[j] < arr2[k]) {
      joint.push(arr1[j])
      j++
    } else if (arr2[k] < arr1[j]) {
      joint.push(arr2[k])
      k++
    } else {
      joint.push(arr1[j])
      j++
      joint.push(arr2[k])
      k++
    }
  }

  return joint
}