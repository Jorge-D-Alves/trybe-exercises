/* Utilizando for, descubra qual o maior valor contido no array e imprima-o;
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let maior = 0;

for (let index = 0; index < numbers.length-1; index++) {
    
    if (numbers[index] > numbers[index+1]) {
        if (maior <  numbers[index]) {  
            maior = numbers[index]   
        }
  
    } else {
        if (maior <  numbers[index+1]) {  
            maior = numbers[index+1]   
        }
    } ;
    
}
console.log(maior);
