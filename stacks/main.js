/*
    Un stack/pila o LIFO (Last In First Out) es una estructura de datos que básicamente es un tipo abstracto de datos porque se puede armar con arrays, pero el significado de manejarlo como un stack se lo damos nosotros. Es decir, nos ponemos de acuerdo para que el stack sea usado como un stack pero internamente es un array. Para poder hacer un stack podemos hacer una clase Stack que tenga los métoods de apilar y desapilar donde apilar coloca un elemento en la ultima posición y desenpilar quita el último elemento que ingresó.
    Si se quiere obtener un elemento, solo se obtiene el último, es decir, el ultimo que ingresó.

    Un ejemplo de stack puede ser cuando en el celular vemos las tareas en segundo plano, estas son un stack porque la ultima que abrimos es la primera que vemos.

    En JS, para agregar un elemento a un array usamos push y para quitar el ultimo pop.

    No se puede recorrer una pila, porque la idea siempre es ir sacando elemento a elemento. Por lo tanto si habria que "recorrer" la pila, tendriamos que ir sacando los elementos uno a uno para ir mostrandolos. Porque tenemos que: muestro - saco - muestro - saco, osea peek() - pop() - peek() - pop()
*/

class Stack{
    items = [];

    constructor(items){
        this.items = items;
    }
    
    //añadir
    push(elemento){
        this.items.push(elemento);
    }

    //eliminar
    pop(){
        this.items.pop()
    }

    //último elemento
    peek(){
        return this.items[this.items.length-1]
    }
    
    //longitud
    size(){
        return this.items.length;
    }

    //devuelve si está vacio el stack.
    isEmpty(){
        return this.items.length == 0
    }
}

//No podemos hacerle más nada al stack más que añadir, eliminar, ver el último elemento o la longitud.

const stack = new Stack([1, 2]);
console.log(stack)
stack.push(3);
console.log(stack);
stack.pop();
console.log(stack);
console.log(stack.peek())

console.log(stack.isEmpty())