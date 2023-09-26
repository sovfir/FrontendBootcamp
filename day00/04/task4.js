function one(callback) {
  if (callback) {
    return callback(1);
  }
  return 1;
}

function two(callback) {
  if (callback) {
    return callback(2);
  }
  return 2;
}

function three(callback) {
  if (callback) {
    return callback(3);
  }
  return 3;
}

function four(callback) {
  if (callback) {
    return callback(4);
  }
  return 4;
}

function five(callback) {
  if (callback) {
    return callback(5);
  }
  return 5;
}

function plus(x) {
  return function (y) {
    return x + y;
  };
}

function minus(x) {
  return function (y) {
    return x - y;
  };
}

function mult(x) {
  return function (y) {
    return x * y;
  };
}

function divide(x) {
  return function (y) {
    if (y !== 0) {
      return x / y;
    } else {
      throw new Error("Деление на ноль недопустимо.");
    }
  };
}
const result = four();
const result3 = one(mult(three(plus(four()))));
const result2 = five(mult(three()));

console.log(result);
console.log(result2);
console.log(result3);
