function solution(aa, ab, ba, bb) {
  return (aa === ba && ab === bb) || (aa === bb && ab === ba)
}

module.exports.solution = solution
