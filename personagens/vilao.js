const random = require("../random");
const personagem = require("./personagem");

class vilao extends personagem {

    constructor(vida, forcaSPatk, classe) {

        super(vida);
        this.forcaSPatk = forcaSPatk;
        classe = this.classe;
    }

    atacar() {

        //Valor do ataque do vilao recebe um multiplicador somado a sua força de ataque especial
        return random(1, 5) * this.forcaSPatk;

    }

    defender(golpe) {

        //Subtrai o golpe recebido da vida
        this.vida -= golpe;
    }
}

module.exports = vilao;