// it helps to get deeper substring between characters
const regex = /\(([^()]*)\)/g

function solution(string) {
    let active = true
    let result = string

    while (active) {
        let substring = result.match(regex)?.[0]
        
        if (substring) {
            let substrinsReplace = substring.replace(/\(|\)/g, '')
            substrinsReplace = [...substrinsReplace].reverse().join('')
            result = result.replace(substring, substrinsReplace)
        } else active = false
    }

    return result
}

function solution2(string) {
    let result = string

    while (result.includes('(')) {
        result = result.replace(regex, (found, string) => [...string].reverse().join(''))
    }

    return result
}
