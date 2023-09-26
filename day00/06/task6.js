function fibo(n) {
  if (n < 0) {
    throw "Fibonacci not defined for negative numbers";
  }
  if (n < 2) {
    return n;
  }
  return fibo(n - 1) + fibo(n - 2);
}

// Пример использования:
const index = 21; // Индекс числа в ряде Фибоначчи (начиная с 0)

const result = fibo(index + 1);
console.log(`Число Фибоначчи с индексом ${index} равно ${result}`);
