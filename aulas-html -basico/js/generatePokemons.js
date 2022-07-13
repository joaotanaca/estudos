import { createElement } from "./helpers.js";
import { main } from "./index.js";
import api from "./service.js";

const generatePokemons = async () => {
    try {
        const { results } = await api("/pokemon");

        const lista = createElement("ul");
        const imgContainer = createElement("div", { id: "img-container" });

        results.forEach(({ name, url }) => {
            const link = createElement("a", {
                innerText: name,
                onclick: async () => {
                    const img = createElement("img");
                    const imgCount =
                        imgContainer.querySelectorAll("img").length;

                    if (imgCount >= 5) {
                        imgContainer.innerText = "";
                    }

                    const urlSplit = url.split("/");
                    const id = urlSplit.at(-1) || urlSplit.at(-2);
                    const { sprites } = await api("/pokemon" + "/" + id);
                    img.src = sprites.front_default;
                    imgContainer.appendChild(img);
                },
            });

            const li = createElement("li", { appendChild: link });

            lista.appendChild(li);
        });

        main.appendChild(lista);
        main.appendChild(imgContainer);
    } catch (e) {
        console.error(e);
    }
};

export default generatePokemons;
