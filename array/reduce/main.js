/* .reduce() ejecuta un proceso sobre todos los elementos y devuelve un numero escalar, es decir, un primitivo. */

const numbers = [1, 2, 3, 4, 5, 6];

//forma estructurada
function sumNumbers(collection){
    let acum = 0;

    for(let item of collection){
        acum += item;
    }

    return acum; 
}

//usando funciones de js
function sumNumbers2(collection){
    return collection.reduce((acum, item) => acum + item, 0); 
    //Empieza a sumar desde 0, es decir, acum = 0 inicialmente.
    //acum tiene la suma de los elementos por cada vez que cambia el "indice". 
    //item va teniendo cada uno de los valores que tiene el array sobre el que se itera. 
}
console.log(sumNumbers(numbers));
console.log(sumNumbers2(numbers));