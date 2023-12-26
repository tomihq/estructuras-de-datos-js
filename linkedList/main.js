/*
LinkedList -> Single Linked List.
Son la base de sistemas distribuidos y se usan bastante en blockchain.

Conjunto de nodos. Se forma de tres elementos: HEAD (primer elemento), siguiente elemento, si no hay mas, se llega al null. En C, null sería una posición de memoria que no tiene nada pero está reservada.

A (HEAD) -> B -> C -> null

A medida que recorremos la linkedlist va cambiando el HEAD y NO podemos volver hacia atrás.

Las LinkedList se recorren siempre y cuando el siguiente elemento al nodo actual NO es nulo.
Es decir, para ir recorriendo hay que ir cambiando el currentNode.

Es una especie de hilo, si o si tengo el primer valor, luego el segundo pero si ya el primero es nulo, no existe un segundo.

Ejemplos de uso: Cuando estas viendo un curso, o una serie que te dice cual es el capitulo que sigue.

*/

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }

}

class LinkedList {
    constructor(){
        this.head = null;
    }

    //Hay dos opciones: Cuando la linked list esta vacia. Cuando la linked list no esta vacia.
    add(value){
        const node = new Node(value);
        if(this.head === null){
            this.head = node;
        }else{
            let currentNode = this.head;

            while(currentNode.next !== null){
                currentNode = currentNode.next;
            }

            currentNode.next = node;
        }
    }

    show(){
        let currentNode = this.head;
        while(currentNode !== null){
            console.log(currentNode.value)
            currentNode = currentNode.next;
        }
    }

    size(){
        let count = 0;
        let currentNode = this.head;
        while(currentNode !== null){
            count++;
            currentNode = currentNode.next;
        } 
        return count;
    }

    clear(){
        this.head = null;
    }

    //Hay dos opciones: Cuando el elemento a eliminar es la cabeza. Cuando el elemento a eliminar No es la cabeza
    delete(value){
        if(this.head.value === value){
            this.head = this.head.next;
        }else{
            let currentNode = this.head;
            while(currentNode.next !== null){
                if(currentNode.next.value === value){
                    currentNode.next = current.next.next;
                    break;
                }

                currentNode = currentNode.next;
            }
        }
    }
}

const linkedList = new LinkedList();
linkedList.add("A")
linkedList.add("B")
linkedList.add("C")
linkedList.show()
console.log(linkedList.size())
linkedList.delete("A");
linkedList.show()


//Ejemplo de uso
const title = document.getElementById("title");
const image = document.getElementById("image");
const divNext = document.getElementById("next");


const moviesLinkedList = new LinkedList();
moviesLinkedList.add({name: "Spiderman", picture: 'images/red.png'});
moviesLinkedList.add({name: "Blue", picture: 'images/blue.png'});
moviesLinkedList.add({name: "Black", picture: 'images/black.png'});

function showMovie(){
    const movie = moviesLinkedList.head.value;

    title.innerHTML = movie.name;
    image.src = movie.picture;

    if(moviesLinkedList.head.next){ //es lo mismo que !== null
        const movieNext = moviesLinkedList.head.next.value;
        divNext.innerHTML = 'Siguiente: ' +movieNext.name;
    }else{
        divNext.innerHTML = 'No hay más peliculas'
    }
}

function nextMovie(){
    if(moviesLinkedList.head.next){
        moviesLinkedList.delete(moviesLinkedList.head.value);
        showMovie();
    }
}

showMovie();