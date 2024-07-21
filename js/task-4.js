// Напишіть функцію сheckCase, яка приймає рядок, як аргумент і повертає true, якщо у цьому рядку зустрілась хочаб одна велика літера, якщо  ні то повертає false
// console.log(сheckCase("javaScript"));

function checkCase(string) {
  for (let i = 0; i <= string.length - 1; i++) {
    if (string[i].toUpperCase() === string[i]) {
      return true;
    }
  }
  return false;
}
console.log(checkCase("javaScript"));
