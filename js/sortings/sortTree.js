import { BST } from '../dataStrucures/bst.js'

// O(n+logN)
export function sortTree(arr) {
  const bst = new BST(arr)
  return bst.walkDeep()
}