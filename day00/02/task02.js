function killSymbol(string, tokill) {
  // Здесь new RegExp(symbolToRemove, "g") создает регулярное выражение, которое соответствует всем вхождениям
  // символа "с" с флагом g, что означает "глобально", что позволяет найти и удалить все вхождения символа "с" в строке.
  const pureString = string.replace(new RegExp(tokill, "g"), "");
  return pureString;
}

console.log(killSymbol("Большое и интересное сообщение", "о"));
console.log(killSymbol("Hello world!", "z"));
console.log(killSymbol("А роза азора", "А"));
