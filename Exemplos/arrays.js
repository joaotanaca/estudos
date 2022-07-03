// Arrays e seus metodos `slice, `push, `reduce, `filter, `find, `findeIndex, `map, `includes, sort, `some
const nomes = ["joao", "miguel", "alison"];

// console.log("Slice:");
// console.table(nomes.slice(0, 2));

nomes.push("rodrigo");

// console.log("Push:");
// console.table(nomes);

nomes.unshift("palinkas");

// console.log("Unshift:");
// console.table(nomes);

// console.log("find:");
// console.log(nomes.find((nome) => nome === "rodrigo"));

// console.log("findIndex:");
// console.log(nomes.findIndex((nome) => nome === "palinkas"));

// console.log("includes:");
// console.log(nomes.includes("rodrigo"));

// console.log("some:");
// console.log(nomes.some((nome) => nome === "rodrigo"));

// console.log("some:");
// console.log(nomes.some((nome) => nome === "rodrigo"));

// console.log("reduce:");
// console.log(
//     nomes
//         .slice(1)
//         .reduce(
//             (prevValue, currentValue) => `${prevValue}:${currentValue}`,
//             nomes[0],
//         ),
// );

// console.table(nomes.filter((nome) => nome !== "alison"));

// console.log(
//     nomes.map((nome) => ({
//         nome: nome,
//     })),
// );

// console.log(
//     [
//         {
//             color: "purple",
//             type: "minivan",
//             registration: new Date("2017-01-03"),
//             capacity: 7,
//             nome: "alison",
//         },
//         {
//             color: "red",
//             type: "station wagon",
//             registration: new Date("2018-03-20"),
//             capacity: 5,
//             nome: "rodrigo",
//         },
//         {
//             color: "yellow",
//             type: "station wagon",
//             registration: new Date("2018-03-12"),
//             capacity: 2,
//             nome: "miguel",
//         },
//         {
//             color: "blue",
//             type: "station wagon",
//             registration: new Date("2018-03-01"),
//             capacity: 9,
//             nome: "joao",
//         },
//     ]
//         .sort((a, b) => {
//             if (a.registration > b.registration) {
//                 return 1;
//             } else if (a.registration < b.registration) {
//                 return -1;
//             } else {
//                 return 0;
//             }
//         })
//         .map((carro) => carro.nome),
// );
