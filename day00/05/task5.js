function pascalsTriangle(n, k) {
  if (k === 0 || k === n) {
    return 1; // Базовый случай: крайние значения всегда равны 1
  } else {
    // Рекурсивно вычисляем значение как сумму двух чисел выше и слева от текущей позиции
    return pascalsTriangle(n - 1, k - 1) + pascalsTriangle(n - 1, k);
  }
}

// Пример использования:
const n = 5; // Номер строки
const k = 4; // Номер столбца

const result = pascalsTriangle(n, k);
console.log(
  `Значение в треугольнике Паскаля на координатах [${n},${k}] равно ${result}`
);
