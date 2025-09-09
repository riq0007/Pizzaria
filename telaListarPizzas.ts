//* Importei a biblioteca readline que basicamente lê os inputs do usuário no console.
import * as readline from 'readline-sync';
//* Categorizei a variavel pizza como uma interface
interface Pizza {
    id: number;
    name: string;
    description: string;
    stock: boolean;
    status: PizzaPreparando;
}
enum PizzaPreparando{
EmPreparo = 'Em Preparo',
Pronta = 'Pronta' ,
Entregue = 'Entregue',
Cancelada = 'Cancelada',
}
const pizzas: Pizza [] = [];

function addPizza(pizza: Pizza){//*Nos parametros da função declarei que a variavel pizza representaria a Array Pizza,  devendo se comportar como a interface anteriormente projetada.
    pizzas.push(pizza)          
}
function listPizzas ():void{
    pizzas.forEach(u => console.log(`ID da pizza: ${u.id}\nNome da pizza: ${u.name}\nDescrição da pizza: ${u.description}\nA pizza está: ${u.status}!\n `));
}
function PizzaQueVaiSerAtualizada(): void{
    console.clear();
    const IDpizza = readline.questionInt(`Digite o Id da pizza que você deseja alterar:`)
    const encontrarPizza = pizzas.find(p => p.id === IDpizza);

    if(encontrarPizza){
        console.clear();
        console.log(`\n////////// A pizza tem os seguintes status: ////////// \n\nNome da pizza: ${encontrarPizza.name}\nStatus da pizza: ${encontrarPizza.status}`)
        console.log(`\n////////// Caso queira mudar o status, escolha uma das opções abaixo //////////\n`)
        const OpcoesDeStatus = Object.values(PizzaPreparando);
        const SelecaoDoStatus = readline.keyInSelect(OpcoesDeStatus,`Escolha o novo status:`)
        if(SelecaoDoStatus != -1){
            console.clear();
            const newStatus = OpcoesDeStatus[SelecaoDoStatus]
            encontrarPizza.status = newStatus as PizzaPreparando;
            console.log(`Perfeito! O status da pizza foi alterado para\n ${encontrarPizza.status}`)
              }else{
            console.log(`Operação cancelada`) }
                 
 }else{
console.log(`Pizza não encontrada`)
 }
}
function menu(): void{
    
    let running= true;
   while(running){
    console.clear();

    console.log(`------Menu Pizzaria------`)
    console.log(`1 - inserir pizzas`)
    console.log(`2 - Listar pizzas`)
    console.log(`3 - Procurar pizza por id`)
    console.log(`4 - Status das pizzas`)
    console.log(`5 - Sair`)

    

    const option: number = readline.questionInt(`Escolha uma opção: `) || 0;
    

    switch(option){
case 0:
    break;
case 1:
    console.clear();
            const id: number = readline.questionInt(`Id da pizza:`) || 0;
            const name = readline.question(`Nome da pizza:`);
            const description = readline.question(`Descrição da pizza:`);
            const stock: boolean = readline.keyInYN(`Stoque da pizza:`) === 'y';
            
            addPizza({id, name , description , stock, status: PizzaPreparando.EmPreparo})
            readline.keyInPause(`Pressione qualquer tecla para continuar...`)
            break;

case 2:
    console.clear();
            if(pizzas.length > 0 ){
            listPizzas();}
               
            else{
                    console.log(`Nenhuma pizza registrada!`)
            }
            readline.keyInPause(`Pressione qualquer tecla para continuar...`)
            break;
            
case 3:
    console.clear();
            
    let encontrada = false;
    
            const idEncontrarPizza = readline.questionInt(`Digite o ID da pizza que você quer encontrar:`)
            for(let i = 0; i < pizzas.length; i++){
                const pizza = pizzas[i];
                if(pizza && pizza.id == idEncontrarPizza){
                    console.log(`Id da pizza: ${pizza.id}\nNome da pizza: ${pizza.name}\nStatus: ${pizza.status}`)
                    encontrada = true;
                    readline.keyInPause(`Pressione qualquer tecla para continuar...`)
                    break;}
                }
                if(!encontrada){
                    console.log(`Pizza não foi encontrada`)       
                    readline.keyInPause(`Pressione qualquer tecla para voltar para o menu...`)
                    break;
                }
                break;
                
case 4:
console.clear();
PizzaQueVaiSerAtualizada();
break;





case 5:
    console.clear();
            running=false;
            console.log(`\nA sair do programa, volte logo`)
            break;
            
default:
    console.clear();
            console.log(`\nOpção invalida! Por favor, escolha um numero de 1 a 4. `)
            readline.keyInPause(`Pressione qualquer tecla para continuar...`)
            break;
        }
    } 
        
}
menu();  

