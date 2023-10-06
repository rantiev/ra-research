import { BST } from './bst.js'
import expect from 'expect.js'

it('BST adds properly', () => {
  const arr = [100, 200, 1, 20]
  const bst = new BST(arr)

  expect(bst.root.data).to.be.eql(100)
  expect(bst.root.left.data).to.be.eql(1)
  expect(bst.root.right.data).to.be.eql(200)
  expect(bst.root.left.left).to.be.eql(null)
  expect(bst.root.left.right.data).to.be.eql(20)
})

it('BST walks wide properly', () => {
  const arr = [100, 200, 1, 20]
  const bst = new BST(arr)

  expect(bst.walkWide()).to.be.eql([100, 1, 20, 200])

  const arr2 = [0, 1000, 14, 10000, 100, 200, 1, 20]
  const bst2 = new BST(arr2)

  expect(bst2.walkWide()).to.be.eql([0, 1000, 14, 1, 100, 20, 200, 10000])
})

it('BST walks deep properly', () => {
  const arr = [100, 200, 1, 20]
  const bst = new BST(arr)

  expect(bst.walkDeep()).to.be.eql([1, 20, 100, 200])

  const arr2 = [0, 1000, 14, 10000, 100, 200, 1, 20]
  const bst2 = new BST(arr2)

  expect(bst2.walkDeep()).to.be.eql([0, 1, 14, 20, 100, 200, 1000, 10000])
})

it('BST allows same numbers', () => {
  const arr = [100, 200, 1, 1, 200]
  const bst = new BST(arr)

  expect(bst.walkDeep()).to.be.eql([1, 1, 100, 200, 200])
})