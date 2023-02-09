const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][areSimilar] should return true', t => {
  const result = solution([1, 2, 3], [1, 2, 3])
  t.truthy(result)
})

test('[codesign][areSimilar] should return true | 2', t => {
  const result = solution([1, 2, 3], [2, 1, 3])
  t.truthy(result)
})

test('[codesign][areSimilar] should return true | 3', t => {
  const result = solution([3, 1, 2, 9], [9, 1, 2, 3])
  t.truthy(result)
})

test('[codesign][areSimilar] should return false', t => {
  const result = solution([1, 2, 2], [2, 1, 1])
  t.falsy(result)
})

test('[codesign][areSimilar] should return false | 2', t => {
  const result = solution([1, 1, 4], [1, 2, 3])
  t.falsy(result)
})

test('[codesign][areSimilar] should return false | 3', t => {
  const result = solution([5, 1, 2, 3, 3], [5, 1, 2, 3, 2])
  t.falsy(result)
})
