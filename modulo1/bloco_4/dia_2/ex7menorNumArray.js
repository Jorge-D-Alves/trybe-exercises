/* Utilizando for, descubra qual o menor valor contido no array e imprima-o; */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let menor = 200;
for (let index = 0; index < numbers.length-1; index++) {
    
    if (numbers[index] < numbers[index+1]) {
        if (menor >  numbers[index]) {  
            menor = numbers[index]   
        }
    } else {
        if (menor >  numbers[index+1]) {  
            maior = numbers[index+1]   
        }
    } ;
    
}
console.log(menor);
