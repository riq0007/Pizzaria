import * as readline from 'readline-sync';

enum StatusPizza{
    Pronto = 'Pronto',
    EmPreparo = 'Em preparo',
    Entregue = 'Entregue',
    Cancelada = 'Cancelada',
}
const pizzasArray = Object.values(StatusPizza);

const classePizza = readline.question(`Estado da pizza a procurar:`);

if (pizzasArray.includes(classePizza)){
    console.log(`${classePizza}`);
}else{
    console.log(`Null`);
}