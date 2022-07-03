// string, number, object, array

"", 0, {}, [];
const nomes = { joao: "joao", miguel: "joao" };
const nomesArrays = ["joao"];

console.log(
    Object.keys(nomes).map((key) => {
        const value = nomes[key];
        return `${key}:${value}`;
    }),
);
