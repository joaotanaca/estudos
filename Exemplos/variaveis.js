// Exemplos de declarações e tipagem. ex: const, var, let; imutavel e mutavel

const palavra = {};
const palavra1 = [];

function trocarOsNomes() {
    palavra.nome = "miguel";
    palavra1.push(`joao ${palavra.nome}`);
}

trocarOsNomes();

console.log(palavra, palavra1);
