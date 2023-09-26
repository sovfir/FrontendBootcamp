// // Напишите функцию банкомат которая принимает на вход число и возвращает объект в формате: {номинал_купюры : количество_купюр}.
// // Если банкомат не может выдать данную сумму, то выводится ошибка 'Incorrect value'.
// // Купюры должны выдаться оптимальным образом (вместо 5 купюр номиналом 1000 выдается одна 5000).
// // За раз банкомат может выдавать не более 20 купюр, если купюр для выдачи не хватает то выводится ошибка 'Limit exceeded'

function atm(amount) {
  const denominations = [5000, 2000, 1000, 500,200, 100, 50, 10];
  const result = {}; // Объект для хранения результата выдачи

  if (amount <= 0) {
    throw "Incorrect value";
  }

  if (amount > denominations[0] * 20) {
    throw "Limit exceeded";
  }

  let remainingAmount = amount;

  for (const denomination of denominations) {
    const count = Math.floor(remainingAmount / denomination);

    if (count > 0) {
      result[denomination] = count;
      remainingAmount -= denomination * count;
    }

    if (remainingAmount === 0) {
      break;
    }
  }

  if (remainingAmount !== 0) {
    throw "Incorrect value";
  }

  return result;
}

// Пример использования:
try {
  const amount = 8350;
  const withdrawal = atm(amount);
  console.log(withdrawal);
} catch (error) {
  console.error(error);
}
