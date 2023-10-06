import { Heep } from './heep.js'
import expect from 'expect.js'

it('Heep adds properly', () => {
  const arr = [100, 200, 1, 20]
  const h = new Heep(arr)

  expect(h.items.length).to.be.eql(4)
  expect(h.items).to.be.eql([200, 100, 1, 20])

  const arr2 = [100, 200, 1, 20, 0, 300]
  const h2 = new Heep(arr2)

  expect(h2.items.length).to.be.eql(6)
  expect(h2.items).to.be.eql([300, 100, 200, 20, 0, 1])
})

it('Heep heepifies properly', () => {
  const arr = [100, 200, 1, 20]
  const h = new Heep(arr)

  h.items[0] = 0
  h.heepify()

  expect(h.items.length).to.be.eql(4)
  expect(h.items).to.be.eql([100, 20, 1, 0])

  const arr2 = [100, 200, 1, 20, 0, 300]
  const h2 = new Heep(arr2)

  h2.items[0] = 90
  h2.heepify()

  expect(h2.items.length).to.be.eql(6)
  expect(h2.items).to.be.eql([200, 100, 90, 20, 0, 1])
})

it('Heep max ejected properly', () => {
  const arr = [100, 200, 1, 20, 0, 300]
  const h = new Heep(arr)

  expect(h.items.length).to.be.eql(6)
  expect(h.items).to.be.eql([300, 100, 200, 20, 0, 1])

  const m1 = h.ejectMax()
  expect(m1).to.be.eql(300)
  expect(h.items.length).to.be.eql(5)
  expect(h.items).to.be.eql([200, 100, 1, 20, 0])

  const m2 = h.ejectMax()
  expect(m2).to.be.eql(200)
  expect(h.items.length).to.be.eql(4)
  expect(h.items).to.be.eql([100, 20, 1, 0])

  const m3 = h.ejectMax()
  expect(m3).to.be.eql(100)
  expect(h.items.length).to.be.eql(3)
  expect(h.items).to.be.eql([20, 0, 1])

  const m4 = h.ejectMax()
  expect(m4).to.be.eql(20)
  expect(h.items.length).to.be.eql(2)
  expect(h.items).to.be.eql([1, 0])

  const m5 = h.ejectMax()
  expect(m5).to.be.eql(1)
  expect(h.items.length).to.be.eql(1)
  expect(h.items).to.be.eql([0])

  const m6 = h.ejectMax()
  expect(m6).to.be.eql(0)
  expect(h.items.length).to.be.eql(0)
  expect(h.items).to.be.eql([])

  const m7 = h.ejectMax()
  expect(m7).to.be.eql(undefined)
  expect(h.items.length).to.be.eql(0)
  expect(h.items).to.be.eql([])
})

it('Heep ejects sorted properly', () => {
  const arr = [100, 200, 1, 20, 0, 300]
  const h = new Heep(arr)
  const sorted = h.ejectSorted()
  expect(h.items.length).to.be.eql(0)
  expect(sorted.length).to.be.eql(arr.length)
  expect(sorted).to.be.eql([0, 1, 20, 100, 200, 300])
})