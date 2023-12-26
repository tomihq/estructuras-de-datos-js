//.filter es una función inmutable. Devuelve un nuevo arreglo, no modifica el original.
const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

//Buscar los nombres que empiezan con A.
const regex = /^A/i
const namesStartWithA = names.filter((name) =>regex.test(name)) //NO muta el array original. Sino que devuelve un nuevo array con los elementos que cumplan una condición dada.