import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortQuick } from './sortQuick.js'

it('sortQuick', () => {
  testSortingFunction(sortQuick)
})