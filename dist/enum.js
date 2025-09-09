import * as readline from 'readline-sync';
var StatusPizza;
(function (StatusPizza) {
    StatusPizza["Pronto"] = "Pronto";
    StatusPizza["EmPreparo"] = "Em preparo";
    StatusPizza["Entregue"] = "Entregue";
    StatusPizza["Cancelada"] = "Cancelada";
})(StatusPizza || (StatusPizza = {}));
const pizzasArray = Object.values(StatusPizza);
const classePizza = readline.question(`Estado da pizza a procurar:`);
if (pizzasArray.includes(classePizza)) {
    console.log(`${classePizza}`);
}
else {
    console.log(`Null`);
}
//# sourceMappingURL=enum.js.map