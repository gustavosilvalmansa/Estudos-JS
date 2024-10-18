
function calc(x1, x2, operator) {
    return eval(`${x1} ${operator} ${x2}`);
}


//Arrow function
let calcArrow = (x1, x2, operator) => {
    return eval(`${x1} ${operator} ${x2}`);
}
let resultado = calcArrow(10, 15, "*");

console.log(resultado);