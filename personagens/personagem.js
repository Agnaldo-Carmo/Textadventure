class personagem {

    constructor(vida) {

        this.vida = vida;
    }

    atacar() {

        console.log("ataque");

    }

    defender() {

        console.log("defende");


    }
}

module.exports = personagem;