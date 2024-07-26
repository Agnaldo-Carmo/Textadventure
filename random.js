
//Função usada para randomizar numeros inteiros usados em varias partes do jogo
module.exports = (min, max) => {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}