//  *? Напишіть цикл, який виводить у консоль
//   *? усі парні числа від min до max
const max = 50;
const min = 23;
let  result = 0;
for (let i = max; i >= min; i-- ) {
    if (i%2 === 0){
        result +=i
        console.log(i)
    }
        
}
console.log(result);