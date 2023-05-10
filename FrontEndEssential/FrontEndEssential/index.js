console.log("Ola Mundo")
// commentario e linha

let nome = "teste de variavel";

const pi = 3.1415;

let isRunning = false;

//let defini uma variavel normal

let cores = ["amarelo", "azul", "preto" , false, [1, 4 ,true, {}]]

const pessoa = {
    nome: "Franklin",
    idade: 24,


}

console.log(typeof nome)
console.log(typeof pi)
console.log(typeof isRunning)
console.log(typeof pessoa)
console.log("nome", pessoa.nome)

//Estrutura de Decisao
const pessoa1 = {
    nome: "Rafaela",
    idade: 25


}

if(pessoa1.idade >= 25){
    console.log("Maior da idade");
}

else{
    console.log("menor de idade");
}


//Operador Ternario

pessoa1.idade >= 25 ? console.log("maior de idade") : console.log("menor de idade");


// For While Do Wile

for (let index = 0; index < 10; index++ ){

}

//Funcoes

function imprime(){
    console.log("teste de funcão");
}
function imprime(frase){
    console.log(frase);
}

imprime();
imprime("teste de funcao frase");