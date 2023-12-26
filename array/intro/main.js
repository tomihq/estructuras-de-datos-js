/*Un array es una lista de elementos. Si nos vamos a la definición formal, un array tiene una longitud fija mientras que una lista o List tiene una longitud dinámica.
Acá en JS, los array son más parecidos a las listas.

Pueden tener varios tipos de dato.

El costo de encontrar un elemento en el peor caso es de o(n) porque hay que recorrer, en el peor de los casos n veces la lista hasta encontrarlo.

En JS, un Array es un objeto (NO es primitivo) por lo tanto, si lo mandamos a una función, pasa por referencia.
*/
let array = [1, 2, "pato", true];

function showArray1(array){
    console.log("------------------");
    //.length es un método de clase (función definida adentro del objeto)
    for(let i=0; i<array.length; i++){
        console.log(array[i])
    }
}

function showArray2(array){
    console.log("------------------");
    //.length es un método de clase (función definida adentro del objeto)
    for(let item of array){ //"Por cada item del array..."
        console.log(item)
    }
}

showArray1(array);
showArray2(array);

array.push("perro"); //Añadimos un ítem al array.
showArray2(array);

array = ["agua", "leche"]; //Sobreescribo el contenido del array por completo.
showArray2(array);

//const

const array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
array2.push(10); //Aunque el array2 sea una constante, puedo quitar y poner elementos. Lo que no puedo cambiar es la referencia del arreglo, por ejemplo, que array2 = 3 no se puede porque estoy cambiando su tipo de dato y array2 = [1, 2] estaría creando un nuevo objeto.