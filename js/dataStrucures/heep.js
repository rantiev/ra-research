export class Heep {
  items = []
  constructor(arr) {
    arr.forEach(this.add.bind(this))
  }
  add(v) {
    this.items.push(v)

    let i = this.items.length - 1
    let p = Math.floor((i - 1) / 2)

    while (i > 0 && this.items[p] < this.items[i]) {
      ;[this.items[i], this.items[p]] = [this.items[p], this.items[i]]

      i = p
      p = Math.floor((i - 1) / 2)
    }
  }

  ejectMax() {
    if (!this.items.length) return

    const res = this.items[0]
    this.items[0] = this.items[this.items.length - 1]
    this.items.length--

    this.heepify()

    return res
  }

  heepify() {
    const s = this.items.length

    let max
    let l
    let r

    let p = 0

    while (true) {
      l = 2 * p + 1
      r = 2 * p + 2
      max = p

      if (l < s && this.items[l] > this.items[max]) {
        max = l
      }

      if (r < s && this.items[r] > this.items[max]) {
        max = r
      }

      if (max === p) {
        break
      }

      ;[this.items[max], this.items[p]] = [this.items[p], this.items[max]]
      p = max
    }

    return this.items
  }

  ejectSorted() {
    const res = []

    while (this.items.length) {
      res[this.items.length - 1] = this.ejectMax()
    }

    return res
  }
}