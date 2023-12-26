/*
    Una queue/cola o FIFO (First In First Out) es una estructura de datos que básicamente es un tipo abstracto de datos porque se puede armar con arrays, pero el significado de manejarlo como una queue se lo damos nosotros.
    Es decir, nos ponemos de acuerdo para que la queue sea utilizada como queue pero internamente es un array. 
    Para poder hacer una queue podemos hacer una clase Queue que tenga los metodos de encolar y desencolar donde encolar coloca un elemento en la ultima posicion y desenpilar quita el primer elemento de la cola.

    Un ejemplo de cola puede ser cuando estamos en el supermercado, en el banco..

    En JS, para agregar un elemento a la cola usamos enqueue y para sacar el primero usamos shift. Al usar shift

    Importante: Cuando eliminamos un elemento de una queue, hay que retornar cual fue el eliminado.

*/


class Queue{
    items = [];

    //añadir
    enqueue(elemento){
        this.items.push(elemento);
    }

    //eliminar
    dequeue(){
        return this.items.shift()
    }

    //primero en la fila
    peek(){
        return this.items[0]
    }
    
    //longitud
    size(){
        return this.items.length;
    }

    //devuelve si está vacio el queue.
    isEmpty(){
        return this.items.length == 0
    }
}

//No podemos hacerle más nada al queue más que añadir, eliminar, ver el último elemento o la longitud.

const queue = new Queue();
queue.enqueue("Tomi");
queue.enqueue("Lucas")
console.log(queue)
queue.enqueue("Martin");
console.log(queue);
queue.dequeue();
console.log(queue);
console.log(queue.peek())
console.log(queue.isEmpty())

while(!queue.isEmpty()){
    console.log(queue.peek());
    queue.dequeue()
}
