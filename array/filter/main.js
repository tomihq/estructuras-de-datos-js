//.filter es una función inmutable. Devuelve un nuevo arreglo, no modifica el original.
const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

//Buscar los nombres que empiezan con A.
const regex = /^A/i

//forma estructurada
function filterNamesByRegex(names){
    let newNames = [];
    for(let name of names){
        if(regex.test(name)) newNames.push(name);
    }

    return newNames;
}

const namesStartWithA = filterNamesByRegex(names) //NO muta el array original. Sino que devuelve un nuevo array con los elementos que cumplan una condición dada.
console.log(namesStartWithA)

//usando funciones de js
const namesStartWithA2 = names.filter((name) =>regex.test(name)) //NO muta el array original. Sino que devuelve un nuevo array con los elementos que cumplan una condición dada.
console.log(namesStartWithA2)
