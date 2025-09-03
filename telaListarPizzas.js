"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var readline = require("readline-sync");
function menu() {
    console.log("------Menu Pizzaria------");
    console.log("1 - inserir pizzas");
    console.log("2 - Listar pizzas");
    console.log("3 - Procurar pizza por id");
    console.log("4 - Sair");
    var option = readline.questionInt("Escolha uma op\u00E7\u00E3o: \"");
    switch (option) {
        case 1:
            var id = readline.questionInt("Id da pizza:");
            var name_1 = readline.questionInt("Nome da pizza:");
            var description = readline.questionInt("Descri\u00E7\u00E3o da pizza:");
            var stock = readline.questionInt("Stoque da pizza (quantas tem)");
            break;
    }
}
var pizzas = [];
function addPizza(pizza) {
    pizzas.push(pizza);
}
function listPizzas() {
    pizzas.forEach(function (u) { return console.log("".concat(u.id, " ").concat(u.name, " ").concat(u.description, " ").concat(u.stock)); });
}
addPizza({ id: 1, name: "Marguerita", description: "Pizza com molho de tomate", stock: true });
listPizzas();
