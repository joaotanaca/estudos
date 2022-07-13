import generatePokemons from "./generatePokemons.js";

export const main = document.createElement("main");

generatePokemons();

document.querySelector("#root").appendChild(main);
