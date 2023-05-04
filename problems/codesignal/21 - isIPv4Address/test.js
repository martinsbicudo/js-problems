const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][isIPv4Address] should return true', t => {
  const result = solution('172.16.254.1')
  t.truthy(result)
})

test('[codesign][isIPv4Address] should return true | 2', t => {
  const result = solution('0.254.255.0')
  t.truthy(result)
})

test('[codesign][isIPv4Address] should return false', t => {
  const result = solution('172.316.254.1')
  t.falsy(result)
})

test('[codesign][isIPv4Address] should return false | 2', t => {
  const result = solution('.254.255.0')
  t.falsy(result)
})

test('[codesign][isIPv4Address] should return false | 3', t => {
  const result = solution('1.1.1.1a')
  t.falsy(result)
})

test('[codesign][isIPv4Address] should return false | 4', t => {
  const result = solution('1')
  t.falsy(result)
})

test('[codesign][isIPv4Address] should return false | 5', t => {
  const result = solution('1.23.256.255.')
  t.falsy(result)
})

