const fase1 = require("./fases/fase1");
const fase2 = require("./fases/fase2");
const fase3 = require("./fases/fase3");
const Heroi = require("./personagens/heroi");
const prompt = require("prompt-sync")();

//Apresentação Inicial e Explicação das regras
console.log("Masmorra");
console.log("");
console.log("Bem-Vindo Jogador, vc irá participar de uma jogo que ira testar sua sorte,inteligência e força.");
console.log("");
console.log("Eis as regras: " + "\r\n" +
    "1-Na primeira Etapa voce deve escolher passar por 1 etre 3 portas e so uma e a correta." + "\r\n" +

    "2-Na segunda etapa voce devera responder uma charada antes de avançar" + "\r\n" +

    "3-Na terceira Etapa voce enfrentara um chefe e se vencer poderá sair da Masmorra."

);

console.log("");

//Construção do personagem
let nome;

nome = prompt("Diga o nome do seu personagem:");
console.log("");
console.log("--------------------------------------------------------------------------------------------");
console.log("");

const heroi = new Heroi(100, 20, nome);

//Chama fase 1 e inicia o jogo
fase1(heroi);