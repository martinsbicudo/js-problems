const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][palindromeRearranging] should return true', t => {
  const result = solution('aabb')
  t.truthy(result)
})
