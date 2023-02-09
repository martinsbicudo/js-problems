function solution(picture) {
  let result = []
  const stringLength = picture[0].length + 2
  const pictureLength = picture.length + 2

  for (i=0;i<pictureLength;i++) {
    if (picture[i-1]) result[i] = `*${picture[i-1]}*`
    else result[i] = '*'.repeat(stringLength)
  }

  return result
}

module.exports.solution = solution
