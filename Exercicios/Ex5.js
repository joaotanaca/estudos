// 5 – Imprima na tela quantas pessoas são do sexo masculino e quantas pessoas são do sexo feminino.
// Mostre também qual é a maior altura e se essa altura é de um homem ou uma mulher.
const pessoas = [];

for (let index = 0; index < 5; index++) {
    const altura = (Math.random() * 1 + 1).toFixed(2);
    const sexo = Math.floor(Math.random() * 2) + 1 === 1 ? "F" : "M";
    pessoas.push({ sexo, altura });
}

console.table(pessoas);
