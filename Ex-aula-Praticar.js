//baixa complexidade 1

let num = 13;
let par = num % 2 === 0;

console.log(par)

//baixa complexidade 2

let anoNasc = 2007
let anoAtual = 2024

let idadeFinal = anoAtual - anoNasc
console.log(idadeFinal)

//baixa complexidade 3

let nota1 = 8.5;
let nota2 = 6.8;
let nota3 = 5.5;

let notaFinal = (nota1 + nota2 + nota3) / 3;

if (notaFinal > 7){
    console.log("Aprovado!")
} else {
    console.log("Reprovado!")
};

//baixa complexidade 4

let idadeAt = 2007;
let anoA = 2024;

let idade = anoA - idadeAt;

if (idadeAt > 16){
    console.log("22 na cabeça.")
}else{
    console.log("Não vai votar.")
};

//baixa complexidade 5

let numX = 34
let numY = 12

if (numX > numY){
    console.log(numX)
}else{
    console.log(numY)
}

//baixa complexidade 6

let horasTrab = 37
console.log(horasTrab > 40)

//baixa complexidade 7

let valor4 = 89

if (valor4 < 50){
    console.log("Não esta entre")
} else { console.log("Está entre 50 e 100")}

//baixa complexidade 8

let letra1 = "A"

if ('aeiouAEIOU'.includes(letra1)){
    console.log("É UMA VOGAL.")
}else {
    console.log("É UMA CONSOANTE.")
}

//baixa complexidade 9

let férias = "Julho"
if ('Janeiro Julho Dezembro'.includes(férias)){
    console.log("É FÉRIAS.")
}else {
    console.log("NÃO É FÉRIAS.")
}

//baixa complexidade 10

let notaAluno = 3;
if(notaAluno >= 6){
    console.log("Nota A.")
}else {
    console.log("Nota B.")
}


//média complexidade 1

let numA = 89;
let numB = 88;
let numC = 87;

if (numA > numB, numC) {
    console.log("numA é maior que os oturos.")
}
else if (numB > numA,numC) {
    console.log("numB é maior que os outros.")
}
else if (numC > numA,numB) {
    console.log("numC é maior que os outros.")
}
else {
    console.log("são iguais")
}

//média complexidade 2

let str = "Exemplo";

if (str.charAt(0) >= 'A' && str.charAt(0) <= 'Z') {
    console.log("O primeiro caractere é uma letra maiúscula.");
} else {
    console.log("O primeiro caractere é uma letra minúscula.");
}


//média complexidade 3

let temp = 31

if (temp < 15){
    console.log("Está frio.")
}else if (temp > 15){
    console.log("Está ameno.")
}else if (temp >= 30){
    console.log("Está calor.")
}

//média complexidade 4

let ano = 2024
if (ano %4 === 0 && ano %100 !== 0){
    console.log("é bissexto")
} else{
    console.log("não é bisexto")
}

//média complexidade 5

let x = 30;
let y = 20;
if(x %5 === 0 && y %5 === 0){
    console.log("Todos são divíveis por 5");
}else if(x %5 === 0 && y %5 !== 0){
    console.log("Só o primeiro da por 5");
}else if (x %5 !== 0 && y %5 === 0){
    console.log("Só o segundo da por 5");
}else{
    console.log("Ninguém da por 5 :(")
}

//média complexidade 6

let corSemaforo = "vermelho"
if (corSemaforo === 'verde') {
    console.log("Siga");
} else if (corSemaforo === 'amarelo') {
    console.log("Aguarde")
} else if (corSemaforo === 'vermelho') {
    console.log("Pare");
} else {
    console.log("Quebrado")
}

//média complexidade 7

let numero = 29;
let primos = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97];

if (primos.includes(numero)) {
    console.log("O número está na lista de primos.");
} else {
    console.log("O número não está na lista de primos.");
}
console.log("O maior número é:", maior);


//média complexidade 8

let num45 = 6;
let somaDivisores = 0;

for (let i = 1; i < num45; i++) {
    if (num45 % i === 0) {
        somaDivisores += i;
    }
}

if (somaDivisores === num45) {
    console.log("O número é perfeito.");
} else {
    console.log("O número não é perfeito.");
}


//média complexidade 9

let numero34 = 16;
let raiz = Math.sqrt(numero34);

if (raiz % 1 === 0) {
    console.log("O número é um quadrado perfeito.");
} else {
    console.log("O número não é um quadrado perfeito.");
}

//média complexidade 10


//alta complexidade 1

let nota67 = 3;
let nota76 = 1;
let nota667 = 10;

let mediaFinal = (nota67 + nota76 + nota667) / 3;

if (mediaFinal < 7){
    console.log("reprovado")
} else {console.log("aprovado")};

//alta complexidade 2

let lado1 = 45
let lado2 = 45
let lado3 = 45

//alta complexidade 3



//alta complexidade 4



//alta complexidade 5



//alta complexidade 6



//alta complexidade 7



//alta complexidade 8



//alta complexidade 9



//alta complexidade 10