const root = document.querySelector("#root");
const button = document.createElement("button");

const menuItems = [
    "acelerar a nave 5km/s",
    "desacelerar a menos 5km/s",
    "mostrar nome do piloto",
    "sair do programa",
];

// Cria um programa, pegar nome do piloto, apresentar um menu, 4 opçoes, 1- acelerar a nave 5km/s, 2- desacelerar a menos 5km/s, 3-mostrar nome do piloto, 4-sair do programa
function menu() {
    let velocidade = 0;
    let piloto = "";
    let message = menuItems.reduce(
        (prev, current, index) => `${prev}${index + 1}-${current}, `,
        "",
    );
    let select;

    function velocidadeNave(tipo = "acelerar") {
        if (tipo === "acelerar") {
            velocidade += 5;
        } else if (tipo === "desacelerar" && velocidade !== 0) {
            velocidade -= 5;
        }
    }

    piloto = prompt("Digite o nome do piloto");

    do {
        select = prompt(message);
        switch (select) {
            case "1":
                velocidadeNave();
                break;
            case "2":
                velocidadeNave("desacelerar");
                break;
            case "3":
                alert(`Piloto: ${piloto}\nVelocidade: ${velocidade}`);
                break;
        }
    } while (Number(select) !== 4);
}

button.innerText = "inicie a avaliação";

// function mostraMenuSelecionado() {
//     const menuSelecionado = menu();
//     console.log(
//         `%c${menuSelecionado}`,
//         "color:red; font-size:64px; font-family: Times",
//     );
// }

button.onclick = menu;

root.appendChild(button);
