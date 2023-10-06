import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortInsertion1, sortInsertion2 } from './sortInsertion.js'

it('sortInsertion1', () => {
  testSortingFunction(sortInsertion1)
})

it('sortInsertion2', () => {
  testSortingFunction(sortInsertion2)
})