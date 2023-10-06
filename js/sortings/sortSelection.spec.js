import 'mocha'
import { testSortingFunction } from './mainTests.js'
import { sortSelection } from './sortSelection.js'

it('sortSelection', () => {
  testSortingFunction(sortSelection)
})