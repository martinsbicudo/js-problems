const solution = (numbers) => {
    return Math.max(...numbers) - Math.min(...numbers) - (numbers.length - 1)
}
