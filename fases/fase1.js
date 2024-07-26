const random = require("../random");
const fase2 = require("./fase2");

const prompt = require("prompt-sync")();

module.exports = (heroi) => {

    let portaEscolhida;

    //Porta certa e decidida radomicamente
    let portaCerta = random(1, 4);

    console.log("Você acorda em uma caverna escura, sem se lembrar de nada do que aconteceu, começa a vagar");
    console.log("");
    console.log("Você encontra uma lamparina e decide acende-la, a sua frente você agora vê 3 Portas e uma perguta: ");
    console.log("");

    portaEscolhida = parseInt(prompt(`${heroi.nome}` + " Qual porta deseja atravessar, 1  2 ou 3? , escolha com sabedoria: "));


    //Se a porta certa foi escolhida o jogador prossegue para fase 2, senão game over
    if (portaEscolhida === portaCerta) {

        console.log("");
        console.log(`${heroi.nome}` + " Você escolheu bem, agora poderá avançar para proxima etapa");
        console.log("");
        console.log("A porta se abre e voce atravessa");
        console.log("");
        console.log("--------------------------------------------------------------------------------------------");
        console.log("");

        fase2(heroi);

    } else {

        console.log("");
        console.log(`${heroi.nome}` + " Você falhou no teste de sorte");
        console.log("");
        console.log("O chão se abre sob seus pés, vc caiu em uma armadilha!");
        console.log("GAME OVER");
        console.log("");

    }

}





