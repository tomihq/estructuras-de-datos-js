/*Promesa: Proceso el cual está en espera, una vez que se termina, pasa a completarse o rechazarse. Puede quedarse por siempre pendiente, por lo tanto hay que controlarlas.*/

//Promise es un objeto que recibe como parámetro una función de primera clase, osea, una función que NO recibe funciones.
function hacerAlgo(numero){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            console.log("se ejecuta la promesa");
            numero % 2 == 0?reject("error, algo pasó"):resolve("pato")
            
        }, 1000);
    })
}

const myPromise = hacerAlgo(1);
/* .then es una funcion de orden superior, es decir, recibe una funcion, y esta es de primera clase. */
myPromise
    .then((result) => console.log("El dato retornado por la promesa es: " + result))
    .catch((err) => console.error(err))


const myPromise2 = hacerAlgo(2);
    /* .then es una funcion de orden superior, es decir, recibe una funcion, y esta es de primera clase. */
    myPromise2
        .then((result) => console.log("El dato retornado por la promesa es: " + result))
        .catch((err) => console.error(err))

// fetch es una promesa

fetch("https://jsonplaceholder.typicode.com/users")
    .then(data => data.json())
    .then(response => console.log(response))
    .catch(error => console.error(error))