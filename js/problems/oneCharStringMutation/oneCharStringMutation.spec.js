import test from 'node:test'
import assert from 'node:assert/strict'

import { detectOneCharStringMutation } from './oneCharStringMutation.js'


test('detectOneCharStringMutation', () => {
  assert.equal(detectOneCharStringMutation('tea', 'ted'), true)
  assert.equal(detectOneCharStringMutation('teakk', 'tedkk'), true)
  assert.equal(detectOneCharStringMutation('aeakk', 'keaka'), false)
  assert.equal(detectOneCharStringMutation('aeakkrrr', 'keakarrr'), false)
  assert.equal(detectOneCharStringMutation('qweaeakkrrr', 'qwekeakarrr'), false)
  assert.equal(detectOneCharStringMutation('tea', 'tead'), true)
  assert.equal(detectOneCharStringMutation('tea', 'ea'), true)
  assert.equal(detectOneCharStringMutation('tea', 'ta'), true)

  assert.equal(detectOneCharStringMutation('tea', 'tea'), false)
  assert.equal(detectOneCharStringMutation('tea', 'teack'), false)
  assert.equal(detectOneCharStringMutation('tea', 'tedd'), false)
})