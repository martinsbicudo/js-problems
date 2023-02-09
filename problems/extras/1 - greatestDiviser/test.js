const test = require('ava')
const { solution } = require('./solutions')

test('[extras][greatestDiviser] should return 5', t => {
  const result = solution(5, 15)
  t.is(result, 5)
})

test('[extras][greatestDiviser] should return 10', t => {
  const result = solution(50, 60)
  t.is(result, 10)
})

test('[extras][greatestDiviser] should return 20', t => {
  const result = solution(20, 40)
  t.is(result, 20)
})
