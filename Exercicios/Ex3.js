const generateValuesArray = require("../helpers").generateValues;

// 3 – Verifique qual é o maior número e exiba-o.
const numeros = generateValuesArray({ maxValue: 100 });

console.table(numeros);
