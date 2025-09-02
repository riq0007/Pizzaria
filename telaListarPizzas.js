var pizzas = [];
function addPizza(pizza) {
    pizzas.push(pizza);
}
function listPizzas() {
    pizzas.forEach(function (u) { return console.log("".concat(u.id, " ").concat(u.name, " ").concat(u.description, " ").concat(u.stock)); });
}
addPizza({ id: 1, name: "Marguerita", description: "Pizza com molho de tomate", stock: true });
listPizzas();
