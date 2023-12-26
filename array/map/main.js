//.map es una función inmutable. Devuelve un nuevo arreglo, no modifica el original.
const numbers = [1, 2, 3, 4, 5];

function sumNumbers(numbers, number){
    return numbers.map((n) => n + number); //Devuelvo una nueva lista que contiene los mismos numeros del array number, pero sumados "number" unidades.
}

const numbersSum = sumNumbers(numbers, 6);
console.log(numbersSum)
console.log(numbers) // No se modifica.