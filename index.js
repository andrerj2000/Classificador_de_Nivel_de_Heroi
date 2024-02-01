/*Para que o prompt-sync funcione voce precisará instalar os seguintes npm:
  Open terminal and run:-
  Step 1: npm init
  Step 2: npm install prompt-sync*/

//Declarando as variaveis
let nameUserOfTheGame;
let scoreLarge;
let scoreSmall;
let scoreGeral;

//Declaração para usar o promt
const prompt = require("prompt-sync")();

//Criando função para entrada de dados pelo usuario:

function enter(){
    nameUserOfTheGame = prompt("Entre com o nome: ");
    scoreLarge = prompt("Entre com o maior valor do Score: ");
    scoreSmall = prompt("Entre com o menor valor do Score: ");

}

//Calculando a quantidade de XP
function calculateScoreGeral(){
    return scoreLarge - scoreSmall;
    
}

//Verificador de categoria
function verificPositionsHanking(){
    scoreGeral = calculateScoreGeral();
    if(scoreGeral <= 1000){
        return `Ferro com ${scoreGeral}`;
    }else if(scoreGeral <= 2000) {
        return `Bronze com ${scoreGeral}`;
    }
    else if(scoreGeral <= 5000) {
        return `Prata com ${scoreGeral}`;
    }
    else if(scoreGeral <= 7000) {
        return `Ouro com ${scoreGeral}`;
    }
    else if(scoreGeral <= 8000) {
        return `Platina com ${scoreGeral}`;
    }
    else if(scoreGeral <= 9000) {
        return `Ascendente com ${scoreGeral}`;
    }
    else if(scoreGeral <= 10000) {
        return `Imortal com ${scoreGeral}`;
    }
    else {
        return `Radiante com ${scoreGeral}`;
    }
}

//Lista o jogador e quantidade de XP e sua categoria.
function listAllOfUsers(){
    console.log(`O Herói de nome ${nameUserOfTheGame} está no nível ${verificPositionsHanking()} xp`);
}

//Executando funções
enter();
listAllOfUsers();

