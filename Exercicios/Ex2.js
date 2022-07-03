const generateValuesArray = require("../helpers");

// 2 – imprima o quadrado de cada número do array.
const numeros = generateValuesArray({ maxValue: 100 });

console.table(numeros);
