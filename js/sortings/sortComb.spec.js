import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortComb0, sortComb1, sortComb2 } from './sortComb.js'

it('sortComb0', () => {
  testSortingFunction(sortComb0)
})

it('sortComb1', () => {
  testSortingFunction(sortComb1)
})

it('sortComb2', () => {
  testSortingFunction(sortComb2)
})