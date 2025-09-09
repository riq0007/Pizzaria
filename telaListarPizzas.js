"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//* Importei a biblioteca readline que basicamente lê os inputs do usuário no console.
var readline = require("readline-sync");
var PizzaPreparando;
(function (PizzaPreparando) {
    PizzaPreparando["EmPreparo"] = "Em Preparo";
    PizzaPreparando["Pronta"] = "Pronta";
    PizzaPreparando["Entregue"] = "Entregue";
    PizzaPreparando["Cancelada"] = "Cancelada";
})(PizzaPreparando || (PizzaPreparando = {}));
var pizzas = [];
function addPizza(pizza) {
    pizzas.push(pizza);
}
function listPizzas() {
    pizzas.forEach(function (u) { return console.log("ID da pizza: ".concat(u.id, "\nNome da pizza: ").concat(u.name, "\nDescri\u00E7\u00E3o da pizza:").concat(u.description, "\nA pizza est\u00E1: ").concat(u.status, "!\n ")); });
}
function PizzaQueVaiSerAtualizada() {
    console.clear();
    var IDpizza = readline.questionInt("Digite o Id da pizza que voc\u00EA deseja alterar");
    var encontrarPizza = pizzas.find(function (p) { return p.id === IDpizza; });
    if (encontrarPizza) {
        console.clear();
        console.log("\n////////// A pizza tem os seguintes status: ////////// \n\nNome da pizza:->".concat(encontrarPizza.name, "<-\nStatus da pizza: ->").concat(encontrarPizza.status, "<-"));
        console.log("\n////////// Caso queira mudar o status, escolha uma das op\u00E7\u00F5es abaixo //////////\n");
        var OpcoesDeStatus = Object.values(PizzaPreparando);
        var SelecaoDoStatus = readline.keyInSelect(OpcoesDeStatus, "Escolha o novo status:");
        if (SelecaoDoStatus != -1) {
            console.clear();
            var newStatus = OpcoesDeStatus[SelecaoDoStatus];
            encontrarPizza.status = newStatus;
            console.log("Perfeito! O status da pizza foi alterado para\n ".concat(encontrarPizza.status));
        }
        else {
            console.log("Opera\u00E7\u00E3o cancelada");
        }
    }
    else {
        console.log("Pizza n\u00E3o encontrada");
    }
}
function menu() {
    var running = true;
    while (running) {
        console.clear();
        console.log("------Menu Pizzaria------");
        console.log("1 - inserir pizzas");
        console.log("2 - Listar pizzas");
        console.log("3 - Procurar pizza por id");
        console.log("4 - Status das pizzas");
        console.log("5 - Sair");
        var option = readline.questionInt("Escolha uma op\u00E7\u00E3o: ") || 0;
        switch (option) {
            case 0:
                break;
            case 1:
                console.clear();
                var id = readline.questionInt("Id da pizza:") || 0;
                var name_1 = readline.question("Nome da pizza:");
                var description = readline.question("Descri\u00E7\u00E3o da pizza:");
                var stock = readline.keyInYN("Stoque da pizza:") || false;
                addPizza({ id: id, name: name_1, description: description, stock: stock, status: PizzaPreparando.EmPreparo });
                readline.keyInPause("Pressione qualquer tecla para continuar...");
                break;
            case 2:
                console.clear();
                if (pizzas.length > 0) {
                    listPizzas();
                }
                else {
                    console.log("Nenhuma pizza registrada!");
                }
                readline.keyInPause("Pressione qualquer tecla para continuar...");
                break;
            case 3:
                console.clear();
                var encontrada = false;
                var idEncontrarPizza = readline.questionInt("Digite o ID da pizza que voc\u00EA quer encontrar:");
                for (var i = 0; i < pizzas.length; i++) {
                    var pizza = pizzas[i];
                    if (pizza && pizza.id == idEncontrarPizza) {
                        console.log("".concat(pizza.id, " - ").concat(pizza.name, " - ").concat(pizza.status));
                        encontrada = true;
                        readline.keyInPause("Pressione qualquer tecla para continuar...");
                        break;
                    }
                }
                if (!encontrada) {
                    console.log("Pizza n\u00E3o foi encontrada");
                    readline.keyInPause("Pressione qualquer tecla para voltar para o menu...");
                    break;
                }
                break;
            case 4:
                console.clear();
                PizzaQueVaiSerAtualizada();
                break;
            case 5:
                console.clear();
                running = false;
                console.log("\nA sair do programa, volte logo");
                break;
            default:
                console.clear();
                console.log("\nOp\u00E7\u00E3o invalida! Por favor, escolha um numero de 1 a 4. ");
                readline.keyInPause("Pressione qualquer tecla para continuar...");
                break;
        }
    }
}
menu();
