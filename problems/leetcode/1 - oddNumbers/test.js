const test = require('ava')
const { solution } = require('./solutions')

test('[leetcode][oddNumbers] should return 3', t => {
  const result = solution(3, 7)
  t.is(result, 3)
})

test('[leetcode][oddNumbers] should return 1', t => {
  const result2 = solution(8, 10)
  t.is(result2, 1)
})

test('[leetcode][oddNumbers] should return 5', t => {
  const result2 = solution(0, 10)
  t.is(result2, 5)
})
