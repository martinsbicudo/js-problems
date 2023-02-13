const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][adjacentElementsProduct] should return 21', t => {
  const result = solution([3, 6, -2, -5, 7, 3])
  t.is(result, 21)
})

test('[codesign][adjacentElementsProduct] should return 2', t => {
  const result = solution([-1, -2])
  t.is(result, 2)
})

test('[codesign][adjacentElementsProduct] should return 6', t => {
  const result = solution([5, 1, 2, 3, 1, 4])
  t.is(result, 6)
})

test('[codesign][adjacentElementsProduct] should return 50', t => {
  const result = solution([9, 5, 10, 2, 24, -1, -48])
  t.is(result, 50)
})

test('[codesign][adjacentElementsProduct] should return 30', t => {
  const result = solution([5, 6, -4, 2, 3, 2, -23])
  t.is(result, 30)
})

test('[codesign][adjacentElementsProduct] should return -12', t => {
  const result = solution([-23, 4, -3, 8, -12])
  t.is(result, -12)
})

test('[codesign][adjacentElementsProduct] should return 0', t => {
  const result = solution([1, 0, 1, 0, 1000])
  t.is(result, 0)
})
