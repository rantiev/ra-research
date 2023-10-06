import 'mocha'
import { testSortingFunction } from './mainTests.js'
import { sortShellF2 } from './sortShell.js'

it('sortShellF2', () => {
  testSortingFunction(sortShellF2)
})