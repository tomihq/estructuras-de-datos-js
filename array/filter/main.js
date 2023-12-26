const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

//Buscar los nombres que empiezan con A.
const regex = /^A/i
const namesStartWithA = names.filter((name) =>regex.test(name))