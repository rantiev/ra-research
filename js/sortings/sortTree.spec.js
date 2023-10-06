import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortTree } from './sortTree.js'

it('sortTree', () => {
  testSortingFunction(sortTree)
})