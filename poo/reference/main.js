/*
    En JS casi todo es un objeto excepto los primitivos: string, boolean, bigint, number, undefined y Symbol
*/

let number = 4;

function edit(num, value){
    num = value;
    console.log("El valor interno es: " + num);
}

edit(number, 10);
console.log("El valor externo es: " +number); //El valor sigue siendo 4 porque number es un primitivo. No se edita al ingresar a la función. Como es un tipo primitivo se pasa por copia y NO por referencia (como en Python)

/*
    Si envio una variable a una funcion y es primitiva -> Se pasa por copia.
    Si envio una variable a una funcion y NO es primitiva -> Se pasa por referencia.

    Esto es porque las primitivas suelen ser "pequeños" y no le duele al lenguaje copiarlos pero los que NO son primitivos puede ser que sea una lista ENORME y sea pesado y tedioso copiar esa lista.

*/

//Valores por referencia
class A{
    constructor(number){
        this.number = number;
    }
}

let a = new A(4);
//El objeto al NO ser primitivo se pasa por referencia.
function editObject(obj, value){
    obj.number = value; //Edito el valor de la clase "number". Estoy modificando directamente al atributo de la clase.
    console.log("El valor interno es: " + obj.number)
}


editObject(a, 10);
console.log("El valor externo es: " +a.number)