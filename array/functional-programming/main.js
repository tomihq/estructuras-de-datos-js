//Función primera clase -> Cualquier función que se puede guardar en una variable.

function hi(){
    console.log("Hola");
}

//Función guardada en variable
const hiReference = hi;

//Ejecución de función
hiReference();

//Función primera clase con parámetros
function sum(a, b) {
    return a+b;
}

const s = sum;
console.log(sum(1, 2));

//Función de orden superior -> Se envían funciones en los parámetros.

function some(fn){
    console.log("se hace algo antes");
    fn();
    console.log("se hace algo después");
}

some(hi);

//Función de orden superior ejecuta funcion con parámetros

function some2(fn, num1, num2){
    console.log("se hace algo antes");
    const res = fn(num1, num2);
    console.log("El resultado es: ", res);
}

some2(sum, 2, 3);

//Función anónima
some2(function(a, b){
    return a * b;
}, 6, 2);

//Función anónima arrow function
some2((a, b) => {
    return a * b
}, 10, 2)

//Función anonima corta (una linea)
some2((a, b) => a * b, 10, 2)