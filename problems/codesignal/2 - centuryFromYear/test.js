const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][centuryFromYear] should return 20', t => {
  const result = solution(1905)
  t.is(result, 20)
})

test('[codesign][centuryFromYear] should return 17', t => {
  const result = solution(1700)
  t.is(result, 17)
})

test('[codesign][centuryFromYear] should return 19', t => {
  const result = solution(1888)
  t.is(result, 19)
})

test('[codesign][centuryFromYear] should return 21', t => {
  const result = solution(2001)
  t.is(result, 21)
})

test('[codesign][centuryFromYear] should return 2', t => {
  const result = solution(200)
  t.is(result, 2)
})

test('[codesign][centuryFromYear] should return 4', t => {
  const result = solution(374)
  t.is(result, 4)
})

test('[codesign][centuryFromYear] should return 1', t => {
  const result = solution(45)
  t.is(result, 1)
})
