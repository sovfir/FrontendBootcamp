function searchSubString(puzzle, word) {
  const numRows = puzzle.length;
  const numCols = puzzle[0].length;

  // Функция для поиска подстроки в строке
  function searchInString(str, target) {
    return str.includes(target);
  }

  // Поиск по горизонтали и вертикали
  for (let i = 0; i < numRows; i++) {
    const row = puzzle[i].join(""); // Преобразуем строку в массив в строку
    if (searchInString(row, word)) {
      return true;
    }

    if (searchInString(row, word.split("").reverse().join(""))) {
      return true;
    }

    const col = [];
    for (let j = 0; j < numCols; j++) {
      col.push(puzzle[j][i]);
    }
    if (searchInString(col.join(""), word)) {
      return true;
    }
    if (searchInString(col.join(""), word.split("").reverse().join(""))) {
      return true;
    }
  }

  // Поиск по диагонали (слева направо)
  for (let i = 0; i < numRows; i++) {
    let diagonal = "";
    for (let j = 0; j < numCols - i; j++) {
      diagonal += puzzle[i + j][j];
    }
    if (searchInString(diagonal, word)) {
      return true;
    }
    if (searchInString(diagonal, word.split("").reverse().join(""))) {
      return true;
    }
  }

  // Поиск по диагонали (справа налево)
  for (let i = 0; i < numRows; i++) {
    let diagonal = "";
    for (let j = 0; j <= i; j++) {
      diagonal += puzzle[i - j][j];
    }
    if (searchInString(diagonal, word)) {
      return true;
    }
    if (searchInString(diagonal, word.split("").reverse().join(""))) {
      return true;
    }
  }

  return false; // Если не найдено ни в одном направлении
}

const examplePuzzle = [
  ["b", "l", "g", "o", "l", "d", "s"],
  ["x", "k", "q", "w", "i", "j", "p"],
  ["a", "n", "w", "k", "k", "p", "n"],
  ["h", "e", "e", "e", "k", "i", "l"],
  ["q", "e", "k", "a", "y", "q", "a"],
  ["h", "u", "h", "a", "e", "a", "u"],
  ["k", "q", "j", "c", "c", "m", "r"],
];

console.log(searchSubString(examplePuzzle, "like")); // true
console.log(searchSubString(examplePuzzle, "gold")); // true
console.log(searchSubString(examplePuzzle, "queen")); // true
console.log(searchSubString(examplePuzzle, "cake")); // true
