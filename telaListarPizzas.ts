import * as readline from 'readline-sync';
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
function menu(): void{
    console.log(`------Menu Pizzaria------`)
    console.log(`1 - inserir pizzas`)
    console.log(`2 - Listar pizzas`)
    console.log(`3 - Procurar pizza por id`)
    console.log(`4 - Sair`)
    

    const option: number = readline.questionInt(`Escolha uma opção: "`) || 0;

    switch(option){
        case 1:
            const id: number = readline.questionInt(`Id da pizza:`) || 0;
            const name = readline.question(`Nome da pizza:`);
            const description = readline.question(`Descrição da pizza:`);
            const stock: boolean = readline.keyInYN(`Stoque da pizza (quantas tem):`) || false;
            addPizza({id, name , description , stock})
            break;
            
            case 2:
                listPizzas();
                break;
            
            case 3:
                let encontrada = false;
    
                const idEncontrarPizza = readline.questionInt(`Digite o ID da pizza que você quer encontrar:`)
                for(let i = 0; i < pizzas.length; i++){
                    if(pizzas[i].id == idEncontrarPizza){
                        console.log(`${pizzas[i].id} - ${pizzas[i].name} - ${pizzas[i].stock}`)
                        encontrada = true;
                        break;
                    }
                    
                }
                    if(!encontrada){
                        console.log(`Pizza não foi encontrada`)
                        
                }
    
        
        }   
    }

addPizza({id: 1, name: "Marguerita", description: "Pizza com molho de tomate", stock: true})

listPizzas();