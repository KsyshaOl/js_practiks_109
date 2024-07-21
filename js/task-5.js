/**
 *? Дано рядок, що складається із символів, наприклад, 'abcde'.
 *? Перевірте, що першим символом цього рядка є буква 'a'.
 *? Якщо це так - виведіть 'так', інакше виведіть 'ні'.
 */

const value = 'abcde';
const firstValue = value[0];
if (firstValue=== "a") {
    console.log("так");
} else {console.log("ні"); }
console.log(firstValue);