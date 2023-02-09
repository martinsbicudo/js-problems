const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][alternatingSums] should return parameters sum', t => {
  const result = solution(3, 10)
  t.is(result, 13)
})

test('[codesign][alternatingSums] should return parameters sum | positive and negative', t => {
  const result2 = solution(-7, 8)
  t.is(result2, 1)
})

test('[codesign][alternatingSums] should return parameters sum | negatives', t => {
  const result2 = solution(-5, -30)
  t.is(result2, -35)
})
