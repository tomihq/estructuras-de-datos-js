/* El delete sería lo mismo que un filter */
const names = ["Ana", "Alejandro", "Francisco", "Héctor", "Javier", "Jesús", "Sergio", "Víctor", "Armando"];

//forma estructurada
function removeName(collection, name){
    let newNames = [];
    for(let nameCollection of collection){
        if(nameCollection !== name) newNames.push(nameCollection)
    }
    return newNames;
}

console.log(removeName(names, 'Alejandro'));

const namesFilter = names.filter((name) => name !== 'Alejandro');
console.log(namesFilter)