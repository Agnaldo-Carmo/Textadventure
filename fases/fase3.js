const Heroi = require("../personagens/heroi");
const Vilao = require("../personagens/vilao");
const prompt = require("prompt-sync")();

function lutar(heroi) {

    const vilao = new Vilao(100, 20, "ONI");

    //repete ataques alternados até que a vida de um dos lutadores seja 0
    while(heroi.vida > 0 && vilao.vida > 0) {

        vilao.defender(heroi.atacar());
        heroi.defender(vilao.atacar());
        console.log(`Vida do ${heroi.nome}: ${heroi.vida}`);
        console.log(`Vida do Oni: ${vilao.vida}`);
        console.log("");

    }

    //exibe o resultado da luta
    if (heroi.vida < 1) {
        console.log("ONI venceu");
        console.log("");

        return false;
    } else {
        console.log(`${heroi.nome} venceu`);
        console.log("");
        return true;
    }

}
 module.exports = (heroi) => {
  console.log("Ao chegar na ultima sala você ouve um enorme rugido, parece ser um monstro gigante!");
  console.log("");
  console.log("Um ONI apareceu, ele quer te impedir de sair.")
  console.log("");

  let escolha = prompt("Você quer lutar? Sim ou Não? ");
  console.log("");
  console.log("Antes que você tivesse sequer a chance de pensar, o ONI ataca, lute pela sua vida");
  console.log("");

  let luta = lutar(heroi);

    //Mensagem final para o jogador
    if(luta){

        console.log(`${heroi.nome}`+" você lutou bravamente e conseguiu sair da masmorra são e salvo.");
        console.log("");

    }else{
 
        console.log("Você perdeu a luta e foi mutilado pelo ONI");
        console.log("");
        console.log("GAME OVER");

    }

}

