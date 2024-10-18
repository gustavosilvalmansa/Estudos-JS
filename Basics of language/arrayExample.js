let carros = ["palio 98", "toro", "uno", "fusca", 10, true, new Date(), function(){}];

//forEach
carros.forEach(function(value, index){console.log(index, value)});


console.log(carros[0]);
console.log(carros[6].getFullYear());