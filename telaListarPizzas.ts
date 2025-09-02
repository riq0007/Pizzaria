import * as readline from 'readline-sync';
function menu(): void{
    console.log(`------Menu Pizzaria------`)
    console.log(`1 - inserir pizzas`)
    console.log(`2 - Listar pizzas`)
    console.log(`3 - Procurar pizza por id`)
    console.log(`4 - Sair`)

}
interface Pizza {
    id: number;
    name: string;
    description: string;
    stock: boolean;
}
const pizzas: Pizza [] = [];

function addPizza(pizza: Pizza){
    pizzas.push(pizza)
}
function listPizzas ():void{
    pizzas.forEach(u => console.log(`${u.id} ${u.name} ${u.description} ${u.stock}`));
}
addPizza({id: 1, name: "Marguerita", description: "Pizza com molho de tomate", stock: true})

listPizzas();