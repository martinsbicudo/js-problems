const test = require('ava')
const { solution } = require('./solutions')

test('[leetcode][twoSums] should return [0,1]', t => {
  const result = solution([3,2,4], 6)
  t.deepEqual(result, [1,2])
})

test('[leetcode][twoSums] should return [1,3]', t => {
  const result = solution([1,50,2,9], 59)
  t.deepEqual(result, [1,3])
})

test('[leetcode][twoSums] should return [4,9]', t => {
  const result = solution([1,2,3,4,5,6,7,8,9,20,5], 25)
  t.deepEqual(result, [4,9])
})

test('[leetcode][twoSums] should return [1,2]', t => {
  const result = solution([1,0,3], 3)
  t.deepEqual(result, [1,2])
})

test('[leetcode][twoSums] should return [2,5]', t => {
  const result = solution([1,10,3,4,9,3], 6)
  t.deepEqual(result, [2,5])
})
