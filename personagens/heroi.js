const random = require("../random");
const personagem = require("./personagem");

class heroi extends personagem {


    constructor(vida, forca, nome) {

        super(vida);
        this.forca = forca;
        this.nome = nome;

    }

    atacar() {
        //Valor do ataque do heroi recebe um multiplicador somado a sua força
        return random(1, 5) * this.forca;

    }

    defender(golpe) {

        //Subtrai o golpe recebido da vida
        this.vida -= golpe;
    }

}

module.exports = heroi;