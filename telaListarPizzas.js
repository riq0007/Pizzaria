"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
var pizzas = [];
function addPizza(pizza) {
    pizzas.push(pizza);
}
function listPizzas() {
    pizzas.forEach(function (u) { return console.log("".concat(u.id, " ").concat(u.name, " ").concat(u.description, " ").concat(u.stock)); });
}
function menu() {
    console.log("------Menu Pizzaria------");
    console.log("1 - inserir pizzas");
    console.log("2 - Listar pizzas");
    console.log("3 - Procurar pizza por id");
    console.log("4 - Sair");
    var option = readline.questionInt("Escolha uma op\u00E7\u00E3o: \"") || 0;
    switch (option) {
        case 1:
            var id = readline.questionInt("Id da pizza:") || 0;
            var name_1 = readline.question("Nome da pizza:");
            var description = readline.question("Descri\u00E7\u00E3o da pizza:");
            var stock = readline.keyInYN("Stoque da pizza (quantas tem):") || false;
            addPizza({ id: id, name: name_1, description: description, stock: stock });
            break;
        case 2:
            listPizzas();
            break;
        case 3:
            var encontrada = false;
            var idEncontrarPizza = readline.questionInt("Digite o ID da pizza que voc\u00EA quer encontrar:");
            for (var i = 0; i < pizzas.length; i++) {
                if (pizzas[i].id == idEncontrarPizza) {
                    console.log("".concat(pizzas[i].id, " - ").concat(pizzas[i].name, " - ").concat(pizzas[i].stock));
                    encontrada = true;
                    break;
                }
            }
            if (!encontrada) {
                console.log("Pizza n\u00E3o foi encontrada");
            }
    }
}
addPizza({ id: 1, name: "Marguerita", description: "Pizza com molho de tomate", stock: true });
listPizzas();
