/*
Estructuras de datos -> Sirven para organizar información.
Clase -> Plantilla / Molde para crear objetos. Nos ayudan a encapsular las funcionalidades de un sujeto específico.
Objeto -> Entidad abstracta que representa algo. Una persona, un auto. Los objetos tienen propiedades y funciones.

Se pueden crear objetos sin usar clases en JS.
*/

const juan = new Object(); //Creamos un objeto
juan.name = 'Juan'; //Atributo de objeto
juan.age = 21; //Atributo de objeto


//Clases

class People{
    constructor(name, lastName){ //Se invoca al crear un objeto.
        this.name = name;
        this.lastName = lastName;
    }
    //El this hace referencia a las propiedades del objeto en donde estamos parados. Es decir, en el ámbito de la clase.

    hi(){
        return "Hola, soy " + this.name + " " + this.lastName; 
    }

    fullName(){
        return this.name + " " + this.lastName
    }
}

const tomi = new People('tomi', 'hq'); //Objeto tomi de la clase People
console.log(tomi);
console.log(tomi.hi()) //Llamo a la función de clase hi()


const hector = new People('hector', 'hq') //Objeto hector de la clase People.

class Student extends People {
    constructor(name, lastName, career){
        super(name, lastName); //Hacemos referencia a los atributos del padre. Llamo a su constructor.
        this.career = career;
    }

    hi(){
        return super.hi() + " es estudiante de " + this.career //Accedo al hi del objeto padre (People) y le agrego algo propio.
    }

    careerDetail(){
        return "Estudia " + this.career
    }
}

const maria = new Student("Maria", "López", "Ing. Civil"); //Objeto maria de la clase Student. Hereda las funcionalidades de People.
console.log(maria.hi())
console.log(maria.careerDetail())