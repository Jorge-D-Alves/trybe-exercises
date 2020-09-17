/* Descubra quantos valores ímpares existem no array e imprima o resultado. Caso não exista nenhum, imprima a mensagem: "nenhum valor ímpar encontrado";
 */
let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let impares = [];
let pares = [];

for (let index = 0; index < numbers.length; index++) {
if (numbers[index] % 2 !== 0) {
    impares.push(numbers[index])
} else {
    pares.push(numbers[index]);
}
}

if (impares !== 0) {
    console.log(' Existem ' + impares.length + ' múmeros impares');
    } else {
        console.log('nenhum valor impar encontrado');
    }