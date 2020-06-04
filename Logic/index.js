/*
This function returns the shortest path from a defined start in the matrix,
ex: [0,0], to a target element for it to find in the matrix,
and a matrix, or bidimensional array, to search in.

It returns the shortest path in a way of an array of strings 
representing the x and y positions at each step of the path.

If no path is possible the function returns an empty array
*/
const pathFinder = (matrix, target, start = [0, 0]) => {
  const paths = [];
  let result = [];

  const inner = (path, x, y) => {
    if (!matrix[y] || !matrix[y][x] || matrix[y][x] === 0 || path.includes(`${x}-${y}`)) {
      return;
    } else if (matrix[y][x] === target) {
      paths.push([...path, `${x}-${y}`]);
      return;
    }

    inner([...path, `${x}-${y}`], x, y + 1)
    inner([...path, `${x}-${y}`], x + 1, y)
    inner([...path, `${x}-${y}`], x, y - 1)
    inner([...path, `${x}-${y}`], x - 1, y)
  };

  inner([], start[0], start[1]);

  if (paths.length > 0) {
    result = paths.sort((a, b) => a.length > b.length)[0];
  }

  return result;
};
