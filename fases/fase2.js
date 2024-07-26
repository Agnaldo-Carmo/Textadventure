const random = require("../random");
const fase3 = require("./fase3");

const prompt = require("prompt-sync")();


module.exports = (heroi) => {

    console.log("Ao chegar na segunda sala, voce ve um grande portão, mas ele parece estar trancado");
    console.log("");
    console.log("Na sua frente há uma tabuleta de pedra com algo escrito: ");
    console.log("");
    console.log(`${heroi.nome}` + " Agora chegou a hora de testar sua Inteligencia e Sabedoria");
    console.log("");
    console.log("Responda corretamente a charada a seguir para seguir para proxima etapa:");
    console.log("");

    //Vetores contendo todas as charadas e respectivas respostas
    const charadas = ["O que é, o que é? Feito para andar e não anda.",
        "O que é, o que é? Dá muitas voltas e não sai do lugar.",
        "O que é, o que é? Tem cabeça e tem dente, não é bicho e nem é gente."
    ];

    const respostas = ["A rua", "O relógio", "O alho"];

    //Sorteia uma chrada ara ser exibida
    let sorteio = random(0, 2);

    console.log(charadas[sorteio]);
    console.log("");


    //Exibe todas as opções de resposta
    respostas.forEach((element, index) => {

        console.log(`${index + 1}` + " - " + element);
        console.log("");

    });

    let resposta = parseInt(prompt("Qual sua resposta, 1 2 ou 3? "));
    console.log("");


    /*compara a resposta com o indice do sorteio , subtrai-se 1 visto que vetores começam no zero
      se a resposta estiver certa, o jogador prossegue para fase 3*/
    if ((resposta - 1) === sorteio) {
        console.log(`${heroi.nome}` + " voce se provou sábio");
        console.log("");
        console.log("O Portão se abre e vc segue em frente");
        console.log("");
        console.log("--------------------------------------------------------------------------------------------");
        console.log("");
        fase3(heroi);

    } else {
        console.log(`${heroi.nome}` + "você não possui o que e necessario para seguir em frente");
        console.log("");
        console.log("A sala onde você estava começa a ser inundada, crocodilos são liberados e você foi devorado");
        console.log("");
        console.log("GAME OVER");

    }

}






