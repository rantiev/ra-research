import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortGnome } from './sortGnome.js'

it('sortGnome', () => {
  testSortingFunction(sortGnome)
})