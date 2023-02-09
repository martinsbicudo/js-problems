const test = require('ava')
const { solution, solution2 } = require('./solutions')

test('[codesign][palindromeRearranging] should return true', t => {
  const result = solution('aabb')
  const result2 = solution('aabb')
  t.truthy(result)
  t.truthy(result2)
})

test('[codesign][palindromeRearranging] should return true | 2', t => {
  const result = solution('abbcabb')
  const result2 = solution('abbcabb')
  t.truthy(result)
  t.truthy(result2)
})

test('[codesign][palindromeRearranging] should return true | 3', t => {
  const result = solution('zyyzzzzz')
  const result2 = solution('zyyzzzzz')
  t.truthy(result)
  t.truthy(result2)
})

test('[codesign][palindromeRearranging] should return true | 4', t => {
  const result = solution('z')
  const result2 = solution('z')
  t.truthy(result)
  t.truthy(result2)
})

test('[codesign][palindromeRearranging] should return true | 5', t => {
  const result = solution('zaa')
  const result2 = solution('zaa')
  t.truthy(result)
  t.truthy(result2)
})

test('[codesign][palindromeRearranging] should return false', t => {
  const result = solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')
  const result2 = solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabc')
  t.falsy(result)
  t.falsy(result2)
})

test('[codesign][palindromeRearranging] should return false | 2', t => {
  const result = solution('abca')
  const result2 = solution('abca')
  t.falsy(result)
  t.falsy(result2)
})

test('[codesign][palindromeRearranging] should return false | 3', t => {
  const result = solution('abcad')
  const result2 = solution('abcad')
  t.falsy(result)
  t.falsy(result2)
})

test('[codesign][palindromeRearranging] should return false | 4', t => {
  const result = solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa')
  const result2 = solution('aaaaaaaaaaaaaaaaaaaaaaaaaaaaaabbbccccaaaaaaaaaaaaa')
  t.falsy(result)
  t.falsy(result2)
})

test('[codesign][palindromeRearranging] should return false | 5', t => {
  const result = solution('abdhuierf')
  const result2 = solution('abdhuierf')
  t.falsy(result)
  t.falsy(result2)
})
