const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][areEquallyStrong] should return true', t => {
  const result = solution(10, 15, 15, 10)
  t.truthy(result)
})

test('[codesign][areEquallyStrong] should return true | 2', t => {
  const result = solution(15, 10, 15, 10)
  t.truthy(result)
})

test('[codesign][areEquallyStrong] should return true | 3', t => {
  const result = solution(10, 5, 5, 10)
  t.truthy(result)
})

test('[codesign][areEquallyStrong] should return true | 4', t => {
  const result = solution(10, 20, 10, 20)
  t.truthy(result)
})

test('[codesign][areEquallyStrong] should return true | 5', t => {
  const result = solution(5, 20, 20, 5)
  t.truthy(result)
})

test('[codesign][areEquallyStrong] should return false', t => {
  const result = solution(15, 10, 15, 9)
  t.falsy(result)
})

test('[codesign][areEquallyStrong] should return false | 2', t => {
  const result = solution(10, 15, 5, 20)
  t.falsy(result)
})

test('[codesign][areEquallyStrong] should return false | 3', t => {
  const result = solution(20, 15, 5, 20)
  t.falsy(result)
})

test('[codesign][areEquallyStrong] should return false | 4', t => {
  const result = solution(1, 10, 10, 0)
  t.falsy(result)
})

test('[codesign][areEquallyStrong] should return false | 5', t => {
  const result = solution(5, 5, 10, 10)
  t.falsy(result)
})
