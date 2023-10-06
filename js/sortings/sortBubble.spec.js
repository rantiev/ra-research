import 'mocha'
import { testSortingFunction } from './mainTests.js'

import { sortBubble1, sortBubble2 } from './sortBubble.js'

it('sortBubble1', () => {
  testSortingFunction(sortBubble1)
})

it('sortBubble2', () => {
  testSortingFunction(sortBubble2)
})