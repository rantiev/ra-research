import 'mocha'
import { testSortingFunction } from './mainTests.js'
import { sortShake } from './sortShake.js'

it('sortShake', () => {
  testSortingFunction(sortShake)
})