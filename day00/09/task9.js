const solver = (sudoku) => {
  //Set block

  const getBlockNumber = (row, col) => {
    let block = "";
    row < 3 //if in first 3 rows
      ? col < 3 //and first three columns
        ? (block = 1) //you are in block 1
        : col < 6 //if first 3 rows and next three columns
        ? (block = 2) //you are in block 2
        : (block = 3) //if in first 3 rows and last 3 columns, you are block 3
      : row < 6
      ? col < 3
        ? (block = 4)
        : col < 6
        ? (block = 5)
        : (block = 6)
      : col < 3
      ? (block = 7)
      : col < 6
      ? (block = 8)
      : (block = 9);
    return block;
  };

  const createHash = (sudoku) => {
    //initialize map object
    const map = {};
    //loop through each row
    for (let row = 0; row < 9; row++) {
      //loop through each column in each row
      for (let col = 0; col < 9; col++) {
        //retrieve the value from the sudoku array
        const value = sudoku[row][col];
        //ignore empty spaces
        if (value === ".") continue;
        //check if value has previously been added to hash map
        if (map[value]) {
          /* the key will be the number itself
                    under rows, the row number will be added as the key
                    with a value of true */
          map[value]["rows"][row] = true;
          //col added as key with value true
          map[value]["cols"][col] = true;
          //getBlockNumber is called so it can be added as a key
          map[value]["blocks"][getBlockNumber(row, col)] = true;
        } else {
          /*if the number has not been previously added then the 
                    number is added as a key and the row, cols, blocks objects
                    are initialized*/
          map[value] = {
            rows: {},
            cols: {},
            blocks: {},
          };
          //the row, col and block number keys are added with value of true
          map[value]["rows"][row] = true;
          map[value]["cols"][col] = true;
          map[value]["blocks"][getBlockNumber(row, col)] = true;
        }
      }
    }
    return map;
  };

  const canNumberBePlaced = (col, row, num, map) => {
    let inRow = map[num]["rows"][row]; //does number already exist in this row
    let inCol = map[num]["cols"][col]; //does number already exist in this col
    let inBlock = map[num]["blocks"][getBlockNumber(row, col)]; //does number already exist in this block
    return !inRow && !inCol && !inBlock; //number can be placed when all are false.
  };

  const checkSurroundings = (col, row, num, map) => {
    let rowEnd, colEnd;

    /*
            We start by setting the limits for our loop. We are only interested in
            going through the fields in our current block.
        */
    row < 3 ? (rowEnd = 3) : row < 6 ? (rowEnd = 6) : (rowEnd = 9); //set max for row loop
    col < 3 ? (colEnd = 3) : col < 6 ? (colEnd = 6) : (colEnd = 9); //set max for col loop

    for (let i = rowEnd - 3; i < rowEnd; i++) {
      //loop through each row
      for (let j = colEnd - 3; j < colEnd; j++) {
        //loop through each column
        const currentFieldValue = sudoku[i][j];

        //ignore the field we are currently in. We've already checked that field
        if (i === row && j === col) continue;

        //If there's already a numbere at this position, no need to check
        if (currentFieldValue !== "-") continue;

        const canBePlaced = canNumberBePlaced(j, i, num, map);

        /*
                if we can place our number in any other field we can return false so the
                solver can try the next number or posision.
                */
        if (canBePlaced) return false;
      }
    }
    /*If we made it through every field and the number has no other posibilities,
        we have found it a home. */
    return true;
  };

  //Call function to create our hash map. Ready to use it.
  const map = createHash(sudoku);

  for (let row = 0; row < 9; row++) {
    //loop through row
    for (let col = 0; col < 9; col++) {
      //loop through column

      const currentFieldValue = sudoku[row][col]; //retrieve value from current field in sudoku

      if (currentFieldValue !== "-") continue; //if a number exist in field move to next column

      for (let i = 1; i < 10; i++) {
        //checking numbers 1-9 one at a time in current position
        if (!map[i]) continue; //if not in map at all, move to next number.

        const canBePlaced = canNumberBePlaced(col, row, i, map); //true means number can be placed here

        if (!canBePlaced) continue; //if number can't be placed here, try next number

        const numberBelongs = checkSurroundings(col, row, i, map); //true means number can ONLY be placed here.

        if (canBePlaced && numberBelongs) {
          //if number can be placed here and nowhere else
          sudoku[row].splice(col, 1, i); //add number to our sudoku
          return solver(sudoku); //call solver function again and pass our updated sudoku array.
        }
      }
    }
  }
  return sudoku; //if no new number can be added we should have  solved puzzle.
};

function stringToSudokuArray(sudokuString) {
  const sudokuArray = [];
  for (let i = 0; i < sudokuString.length; i += 9) {
    const row = sudokuString.slice(i, i + 9).split("");
    sudokuArray.push(row);
  }
  return sudokuArray;
}

//Hashmap sample
const numbers = {
  1: {
    rows: {
      1: true,
      3: true,
    },
    cols: {
      1: true,
      3: true,
    },
    blocks: {
      1: true,
      3: true,
    },
  },
};

const sudokuString =
  "1-58-2----9--764-52--4--819-19--73-6762-83-9-----61-5---76---3-43--2-5-16--3-89--";
const sudokuArray = stringToSudokuArray(sudokuString);

function arrayToSudokuString(sudokuArray) {
  return sudokuArray
    .map((row) => row.map((num) => num.toString()).join(""))
    .join("");
}

function printSudokuTable(sudokuArray) {
  for (let i = 0; i < 9; i++) {
    let row = "";
    for (let j = 0; j < 9; j++) {
      row += sudokuArray[i][j] + " ";
      if ((j + 1) % 3 === 0 && j < 8) {
        row += "| ";
      }
    }
    console.log(row);
    if ((i + 1) % 3 === 0 && i < 8) {
      console.log("---------------------");
    }
  }
}

printSudokuTable(solver(sudokuArray));
