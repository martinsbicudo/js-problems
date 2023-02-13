function solution(matrix) {
  const amountFloorRooms = matrix[0].length
  let rooms = matrix.flat()

  return rooms.reduce((currentAmount, room, i) => {
    if (rooms[i-amountFloorRooms] === 0) {
      rooms[i] = 0
      return currentAmount
    }

    return currentAmount + room
  }, 0)
}

module.exports.solution = solution
