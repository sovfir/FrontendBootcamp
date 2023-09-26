// First version with forloop

function removeReps(array) {
  const uniqueArr = [];

  for (let i = 0; i < array.length; i++) {
    let isDuplicate = false;

    for (let j = 0; j < uniqueArr.length; j++) {
      if (array[i] === uniqueArr[j]) {
        isDuplicate = true;
        break;
      }
    }

    if (!isDuplicate) {
      uniqueArr.push(array[i]);
    }
  }

  return uniqueArr;
}

console.log(removeReps([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]));
console.log(removeReps([1, 1, 1, 1]));
console.log(removeReps([1, 2, 3, 4, 5, 6]));

// Second version with set
function removeRepsSet(array) {
  const uniqueSet = new Set(array);
  const uniqueArr = [...uniqueSet];
  return uniqueArr;
}

console.log(removeRepsSet([1, 1, 2, 4, 5, 6, 6, 8, 9, 11]));
console.log(removeRepsSet([1, 1, 1, 1]));
console.log(removeRepsSet([1, 2, 3, 4, 5, 6]));
