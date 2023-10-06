// Javascript binary search tree representation
// This BST doesn't check for the same values occurrence (allowing same numbers)
export class BST_Node {
  root = null
  left = null
  right = null
  data = null

  constructor(r, d) {
    this.data = d
    this.root = r
  }
}

export class BST {
  root = null
  length = 0
  constructor(arr) {
    arr.forEach(this.add.bind(this))
  }

  add(v) {
    if (!this.root) {
      this.root = new BST_Node(null, v)
      this.length++
      return
    }

    let placeFound = false
    let currentRoot = this.root

    while (!placeFound) {
      if (v > currentRoot.data) {
        const newRoot = currentRoot.right

        if (newRoot) {
          currentRoot = newRoot
          continue
        }

        currentRoot.right = new BST_Node(currentRoot, v)
        this.length++
        placeFound = true
      } else {
        const newRoot = currentRoot.left

        if (newRoot) {
          currentRoot = newRoot
          continue
        }

        currentRoot.left = new BST_Node(currentRoot, v)
        this.length++
        placeFound = true
      }
    }
  }

  walkWide(node) {
    const n = node || this.root

    let res = []
    let resL = []
    let resR = []

    res.push(n.data)

    if (n.left) {
      resL = this.walkWide(n.left)
    }

    if (n.right) {
      resR = this.walkWide(n.right)
    }

    return [...res, ...resL, ...resR]
  }

  walkDeep(node) {
    const n = node || this.root

    let res = []
    let resL = []
    let resR = []

    res.push(n.data)

    if (n.left) {
      resL = this.walkDeep(n.left)
    }

    if (n.right) {
      resR = this.walkDeep(n.right)
    }

    return [...resL, ...res, ...resR]
  }
}