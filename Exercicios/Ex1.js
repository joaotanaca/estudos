import { generateValues as generateValuesArray } from "../helpers";

// 1 – Calcule a média de diversas notas pelo usuário.
const notas = generateValuesArray({ length: 10 });

console.table(notas);
