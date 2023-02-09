const test = require('ava')
const { solution } = require('./solutions')

test('[codesign][addBorder] should return matix with borders', t => {
  const result = solution(["abc", "ded"])
  t.deepEqual(result, [
    "*****",
    "*abc*",
    "*ded*",
    "*****"
  ])
})

test('[codesign][addBorder] should return matix with borders | array with one item', t => {
  const result = solution(["a"])
  t.deepEqual(result, [
    "***",
    "*a*",
    "***"
  ])
})

test('[codesign][addBorder] should return matix with borders | array with asterisk', t => {
  const result = solution(["aa", "**", "zz"])
  t.deepEqual(result, [
    "****",
    "*aa*",
    "****",
    "*zz*",
    "****"
  ])
})
