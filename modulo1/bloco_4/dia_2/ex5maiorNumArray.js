/* Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let index = 0; index < numbers.length; index++) {
    
    if (numbers[index] > numbers[index+1]) {
        maior = numbers[index]
    } else {
        maior = numbers[index +1]
    } ;
    
}
console.log(maior);
