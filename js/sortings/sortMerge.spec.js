import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortMerge1, sortMerge2 } from './sortMerge.js'

it('sortMerge1', () => {
  testSortingFunction(sortMerge1)
})

it('sortMerge2', () => {
  testSortingFunction(sortMerge2)
})