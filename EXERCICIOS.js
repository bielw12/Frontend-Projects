//divisão dos códigos

const num1 = '10';
const num2 = '20';

const somaFinal = num1 + num2;
console.log('somafinal')

//divisão dos códigos

let idade = 25; 

let maiordeIdade = idade >= 18;
console.log(maiordeIdade);

//divisão des códigos

const A = 1;
const B = 5;
const C = 8;

const valorFinal = (A + B + C) / 3;
console.log(valorFinal);

//divisão dos códigos

let preco = 100; 

preco += preco * 0.10; ///////+= é operador de atribuição que permite adicionar valor a uma variável =)////
console.log(preco);

//divisão de cidigos

let anoNascimento = 1988;

const idadeFinal = 2024 - anoNascimento;
console.log(idadeFinal);

//divisão dos códigos

const n = 121;
const isPar = n % 2 === 0;
console.log(isPar);

//divisão dos codigo

let salario = 2500;

if (salario > 2000) {
    salario *= 0.10; 
} else {
    salario *= 0.05; 
}

console.log(salario); 

//divisao dos codigos

function calcularPerimetro(r) {
    return 2 * Math.PI * r;
    
}

const raio = 30;
const perimetro = calcularPerimetro(raio);
console.log(perimetro);

//divisão do código

let num3 = 2367;
let num4 = 234;

if (num3 > num4) {
    console.log(num3 + "é maior que" + num4)
} else if (num3 < num4) {
    console.log(num4 + "é maior que" + num3)
} else {
    console.log("os dois números são iguais")
}

//divisão dos códigos

function celsiusToFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const resultado = celsiusToFahrenheit(20);
console.log(`20°C é igual a ${resultado}°F`);

//divisoa dos codigos

let a = 5;
let b = 10;

a = a + b;  
b = a - b;  
a = a - b;  

console.log("a:", a);  
console.log("b:", b);  


//DIFICIL

let num = 15; 

if (num % 3 === 0 && num % 5 === 0) {
    console.log(num + " é divisível por 3 e por 5.");
} else {
    console.log(num + " não é divisível por 3 e por 5 ao mesmo tempo.");
}

//divisao

let P = 5; 
let fatorial = 1;

for (let i = 1; i <= P; i++) {
    fatorial *= i;
}

console.log("O fatorial de " + P + " é " + fatorial + ".");

//divisao


//divisao


let x = parseInt(prompt("Digite um número inteiro:"));

if (x >= 10 && x <= 20) {
    console.log("O número está dentro do intervalo [10, 20].");
} else {
    console.log("O número está fora do intervalo [10, 20].");
}

//divisao


function ehBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

let ano = parseInt(prompt("Digite um ano:"));

if (ehBissexto(ano)) {
    console.log(`O ano ${ano} é bissexto.`);
} else {
    console.log(`O ano ${ano} não é bissexto.`);
}

//divisao


let num5 = parseFloat(prompt("Digite o primeiro número:"));
let num6 = parseFloat(prompt("Digite o segundo número:"));

let maior = Math.max(num5, num6);

console.log(`O maior número é: ${maior}`);

//divisao


let num8 = parseFloat(prompt("Digite o primeiro número:"));
let num9 = parseFloat(prompt("Digite o segundo número:"));

let diferenca = num8 - num9;

let quadradoDiferenca = diferenca ** 2;

console.log(`O quadrado da diferença entre ${num8} e ${num9} é: ${quadradoDiferenca}`);

//divisao


let nota1 = parseFloat(prompt("Digite a primeira nota (peso 2):"));
let nota2 = parseFloat(prompt("Digite a segunda nota (peso 3):"));
let nota3 = parseFloat(prompt("Digite a terceira nota (peso 5):"));

let peso1 = 2;
let peso2 = 3;
let peso3 = 5;

let mediaPonderada = (nota1 * peso1 + nota2 * peso2 + nota3 * peso3) / (peso1 + peso2 + peso3);

console.log(`A média ponderada é: ${mediaPonderada}`);


