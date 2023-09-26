function counter() {
    let count = -3; // Начальное значение счетчика, чтобы первый вызов вернул 0
  
    // Внутренняя функция, которая увеличивает счетчик и возвращает его значение
    function increment() {
      count += 3;
      return count;
    }
  
    return increment; // Возвращаем внутреннюю функцию
  }
  
  const incrementCounter = counter();
  
  console.log(incrementCounter()); // Вывод: 0
  console.log(incrementCounter()); // Вывод: 3
  console.log(incrementCounter()); // Вывод: 6
  console.log(incrementCounter()); // Вывод: 9