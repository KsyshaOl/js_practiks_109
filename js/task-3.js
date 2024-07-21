/**
 *? Напишіть програму, яка отримає від користувача
 *? число (кількість хвилин) та виведе в консоль
 *? рядок у форматі годин та хвилин
 *? 70 === 01:10
 */
const globalMinutes = 70;
const hour = Math.floor(globalMinutes / 60);
const minutes = globalMinutes % 60;
const modHour =  String(hour).padStart(2, "0");
const modMinutes = String(minutes).padStart(2, "0");
console.log(`${modHour}:${modMinutes}`);