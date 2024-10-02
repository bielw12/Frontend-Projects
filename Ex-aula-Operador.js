let nome1 = "gabriel pedro"
console.log(nome1)

//

let valor1 = 3;
let valor2 = 3;

console.log(valor1 == valor2)

//

let valor3 = 456;
console.log(valor3 >= 10)

//

let idade1 = 13
 
if (idade1 > 18) {
    console.log("parabens, adulto")
} else { console.log("menor de idade vagabundo")}

//

let idadeVotar = 14;

if (idadeVotar >= 16){
    console.log("vai bolsonaro")
} else { console.log("vota em ninguem")};

//

let valor4 = 89

if (valor4 < 50){
    console.log("Não esta entre")
} else { console.log("Está entre 50 e 100")}

// MEDIA COMPLEXIDADE

let idadeUser = 55
console.log(idadeUser >= 18)

//

let num3 = 18
let num4 = 13

if (num3 > num4){
    console.log(num3)
} else{ console.log(num4)}

//

let text1 = "Bolonaro";

if (text1.length > 9){
    console.log("Texto grande.")
} else { console.log("Texto pequeno.")};

//

let num = 13;
let par = num % 2 === 0;

console.log(par)

//

let salario = 3450;

console.log(salario >= 2000)

//

let linguagens = "JavaScrIpt, Css, Html, Java"

if (linguagens.includes = "JavaScript") {
    console.log("Tem JS")
} else {
    console.log("Não tem JS")
}

// ALTA COMPLEXIDADE



//

let nota1 = 3;
let nota2 = 1;
let nota3 = 10;

let mediaFinal = (nota1 + nota2 + nota3) / 3;

if (mediaFinal < 7){
    console.log("reprovado")
} else {console.log("aprovado")};

//

let num67 = 89;
let num68 = 88;
let num69 = 87;

if (num67 > num68, num69) {
    console.log("num67 é maior que os oturos.")
}
else if (num68 > num67,num69) {
    console.log("num68 é maior que os outros.")
}
else if (num69 > num67,num68) {
    console.log("num69 é maior que os outros.")
}
else {
    console.log("são iguais")
}

//

let ano = 2024
if (ano %4 === 0 && ano %100 !== 0){
    console.log("é bissexto")
} else{
    console.log("não é bisexto")
}

//

function login() {
    const usuarioCorreto = "usuario123";
    const senhaCorreta = "senha123";

    const usuario = prompt("Digite seu nome de usuário:");
    const senha = prompt("Digite sua senha:");

    if (usuario === usuarioCorreto && senha === senhaCorreta) {
        alert("Login bem-sucedido! Bem-vindo!");
    } else {
        alert("Nome de usuário ou senha incorretos. Tente novamente.");
    }
}

login();

//

