function solution(weights) {
    return weights.reduce((teams, weight, i) => {
        if ((i + 1) % 2 === 0) teams[1] += weight
        else teams[0] += weight
        return teams
    }, [0, 0])
}

module.exports.solution = solution
