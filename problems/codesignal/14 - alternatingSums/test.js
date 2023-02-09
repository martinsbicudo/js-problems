const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][alternatingSums] should return [180, 105]', t => {
  const result = solution([50, 60, 60, 45, 70])
  t.deepEqual(result, [180, 105])
})

test('[codesign][alternatingSums] should return [100, 50]', t => {
  const result = solution([100, 50])
  t.deepEqual(result, [100, 50])
})

test('[codesign][alternatingSums] should return [80, 0]', t => {
  const result = solution([80])
  t.deepEqual(result, [80, 0])
})

test('[codesign][alternatingSums] should return [150, 150]', t => {
  const result = solution([100, 50, 50, 100])
  t.deepEqual(result, [150, 150])
})

test('[codesign][alternatingSums] should return [150, 151]', t => {
  const result = solution([100, 51, 50, 100])
  t.deepEqual(result, [150, 151])
})
