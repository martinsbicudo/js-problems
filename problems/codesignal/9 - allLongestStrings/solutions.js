function solution(stringArray) {
    const [biggestString] = stringArray.sort((a, b) => b.length - a.length)
    return stringArray.filter((string) => string.length === biggestString.length)
}