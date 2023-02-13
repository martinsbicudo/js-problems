const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][shapeArea] should return 5', t => {
  const result = solution(2)
  t.is(result, 5)
})

test('[codesign][shapeArea] should return 13', t => {
  const result = solution(3)
  t.is(result, 13)
})

test('[codesign][shapeArea] should return 1', t => {
  const result = solution(1)
  t.is(result, 1)
})

test('[codesign][shapeArea] should return 41', t => {
  const result = solution(5)
  t.is(result, 41)
})

test('[codesign][shapeArea] should return 127984001', t => {
  const result = solution(8000)
  t.is(result, 127984001)
})

test('[codesign][shapeArea] should return 19801', t => {
  const result = solution(100)
  t.is(result, 19801)
})

test('[codesign][shapeArea] should return 161946005', t => {
  const result = solution(8999)
  t.is(result, 161946005)
})
