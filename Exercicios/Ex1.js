const generateValuesArray = require("../helpers");

// 1 – Calcule a média de diversas notas pelo usuário.
const notas = generateValuesArray({ length: 10 });



console.table(notas);
console.log(
    notas
        .reduce(
            (prevValue, currentValue) => (prevValue + currentValue), notas[0]
        ) / notas.length,

);