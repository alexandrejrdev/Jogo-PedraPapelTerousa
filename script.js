let resultadotextoplay1 = document.getElementById("resultadotextoplay1")
let resultadotextoplay2 = document.getElementById("resultadotextoplay2")
const opcoes = ['pedra', 'papel', 'tesoura'];

let escolhaplay1 = '';
let escolhaplay2 = '';


function jogar1 (escolhaJogador1) {
    escolhaplay1 = escolhaJogador1;
    console.log(escolhaplay1)
}

function jogar2 (escolhaJogador2) {
    escolhaplay2 = escolhaJogador2;
    console.log(escolhaplay2)
}


function resultadoplay1 () {

    if (escolhaplay1 === escolhaplay2) {
        resultadotextoplay1.textContent = "DEU EMPATE O JOGADOR 2 TAMBEM ESCOLHEU";
    } else {
        resultadotextoplay1.textContent = "NAO FOI EMPATE";
    }

}

function resultadoplay2 () {

    if (escolhaplay2 === escolhaplay1) {
        resultadotextoplay2.textContent = "DEU EMPATE O JOGADOR 2 TAMBEM ESCOLHEU";
    } else {
        resultadotextoplay2.textContent = "NAO FOI EMPATE";
    }
    
}

