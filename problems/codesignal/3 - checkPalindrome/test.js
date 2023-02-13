const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][checkPalindrome] should return true', t => {
  const result = solution('aabaa')
  t.truthy(result)
})

test('[codesign][checkPalindrome] should return true | 2', t => {
  const result = solution('a')
  t.truthy(result)
})

test('[codesign][checkPalindrome] should return true | 3', t => {
  const result = solution('abacaba')
  t.truthy(result)
})

test('[codesign][checkPalindrome] should return true | 4', t => {
  const result = solution('z')
  t.truthy(result)
})

test('[codesign][checkPalindrome] should return true | 5', t => {
  const result = solution('hlbeeykoqqqqokyeeblh')
  t.truthy(result)
})

test('[codesign][checkPalindrome] should return false', t => {
  const result = solution('abac')
  t.falsy(result)
})

test('[codesign][checkPalindrome] should return false | 2', t => {
  const result = solution('az')
  t.falsy(result)
})

test('[codesign][checkPalindrome] should return false | 3', t => {
  const result = solution('aaabaaaa')
  t.falsy(result)
})

test('[codesign][checkPalindrome] should return false | 4', t => {
  const result = solution('zzzazzazz')
  t.falsy(result)
})
