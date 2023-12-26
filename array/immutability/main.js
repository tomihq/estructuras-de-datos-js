/*
    Método mutable: Algo que modifica algo.
    Método inmutable: Te devuelve una copia.
*/
const numbers = [1, 2, 3, 4, 5]; //No primitivo -> Objeto
const numbers2 = [1, 2, 3, 4, 5]; //No primitivo -> Objeto

function mulMutable(collection, num){
    //Método de clase del objeto. .length
    for(let i=0; i<collection.length; i++){
        collection[i] *= num //Modifica directamente que se encuentre en el indice "i", multiplica por NUM. Modifica el array original.
    }

    return collection
}

const newArray = mulMutable(numbers, 2)

console.log(newArray);
console.log(numbers); 

//Funcion inmutable.
function mulImmutable(collection, num){
    const newNumbers = [];
    for(let item of collection){
        newNumbers.push(item * num)
    }
    return newNumbers;
}

const newArray2 = mulImmutable(numbers2, 2);
console.log(newArray2);
console.log(numbers2);

//Immutabilidad en objetos
class Beer{
    constructor(name, price){
        this.name = name;
        this.price = price;
    }
}

//modifca el objeto original -> El objeto se pasa por referencia porque NO es primitivo.
function toUpperMutable(beer){
    beer.name = beer.name.toUpperCase();
    return beer; 
}

const beer = new Beer('delirium', 6);
const newBeer = toUpperMutable(beer);
console.log(newBeer);
console.log(beer) //También se modifica

//no modifica el objeto original -> hay que clonar el objeto. Una nueva implementacion de JS es structuredClone, existe la forma de JSON.parse(JSON.stringify), spread operator y más.
function toUpperImmutable(beer){
    const newBeer = {...beer};
    newBeer.name = newBeer.name.toUpperCase();
    return newBeer;
}

const beer2 = new Beer('delirium2', 6);
const newBeer2 = toUpperImmutable(beer2);
console.log(newBeer2);
console.log(beer2) //No se modifica


//ojo. algunos navegadores no lo soportan el structuredClone. 
function toUpperImmutableStructuredClone(beer){
    const newBeer = structuredClone(beer);
    newBeer.name = newBeer.name.toUpperCase();
    return newBeer;
}

const beer3 = new Beer('delirium3', 6);
const newBeer3 = toUpperImmutableStructuredClone(beer3);
console.log(newBeer3);
console.log(beer3) //No se modifica