const generateValuesArray = require("../helpers");

// 4 – Exiba quantas pessoas são maior de idade (18 anos) e quantas são menores.
const idades = generateValuesArray({ maxValue: 70 });

console.table(idades);
