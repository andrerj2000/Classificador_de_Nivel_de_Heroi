/*Para que o prompt-sync funcione voce precisará instalar os seguintes npm:
  Open terminal and run:-
  Step 1: npm init
  Step 2: npm install prompt-sync*/

//Declarando as variaveis
let nameUserOfTheGame;
let scoreLarge;
let scoreSmall;
//let scoreGeral;

//Declaração para usar o promt
const prompt = require("prompt-sync")();

//Criando função para entrada de dados pelo usuario:

function enter(){
    nameUserOfTheGame = prompt("Entre com o nome: ");
    scoreLarge = prompt("Entre com o maior valor do Score: ");
    scoreSmall = prompt("Entre com o menor valor do Score: ");

}

function CalculateScoreGeral(){
    return scoreLarge - scoreSmall;
    
}

function listAllOfUsers(){
    console.log(`O jogador: ${nameUserOfTheGame} esta com o score: ${CalculateScoreGeral()}`);
}

//Executando funções
enter();
listAllOfUsers();

