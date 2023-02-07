function solution(stringArray) {
    const [biggestString] = stringArray.sort((a, b) => b.length - a.length)
    return stringArray.filter((string) => string.length === biggestString.length)
}

function solution2(stringArray) {
    const biggestLength = Math.max(...stringArray.map((string) => string.length))
    return stringArray.filter((string) => string.length === biggestLength)
}