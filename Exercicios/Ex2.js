import { generateValues as generateValuesArray } from "../helpers";

// 2 – Faça um programa que entre com cinco números e imprima o quadrado de cada número.
const numeros = generateValuesArray({ maxValue: 100 });

console.table(numeros);
