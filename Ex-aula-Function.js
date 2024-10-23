// 1- Função de Saudação
function salve (nome){
    return nome;
}
const teste = ("salve")
console.log(teste
);

// 2- Função de Soma
function soma (somar){
    console.log(21 + 69);
};

soma();


// 3- Função para Verificar Par ou Ímpar
function parOuImpar (){
    let numerrr = 2
    let parouimpa = numerrr % 2 === 0
    console.log(parouimpa);
};

parOuImpar();


// 4- Função de Multiplicação
function Multiplica () {
    let n1 = 7;
    let n2 = 4;
    console.log( n1 * n2);
}
Multiplica()


// 5- Função para Converter Celsius em Fahrenheit
function celsiusParaFahrenheit(celsius) {
    return (celsius * 9/5) + 32;
}

const temperaturaCelsius = 25;
const temperaturaFahrenheit = celsiusParaFahrenheit(temperaturaCelsius);

console.log(`${temperaturaCelsius} °C é igual a ${temperaturaFahrenheit} °F`);


// 6- Função para Calcular a Média
function calculaMedia () {
    let a = 190;
    let b = 398;
    let c = 560; 
    let conta1= (a + b + c) /3;
    return conta1;
}   
let media = calculaMedia();
console.log(media);

// 7- Função para Converter Minutos em Segundos
function minutoParasegundos () {

    let min = 10;
    let seg = min * 60;
    return seg;
}
let tempo = minutoParasegundos();
console.log(tempo);


// 8-Função para Verificar se um Número é Positivo
function ePositivo (){
    let num1 = 23
    
    if (num1 > 1){
        console.log("Seu número é positivo!")
    } else {
        console.log("Seu numero é negativo!")
    }
}


// 9- Função para Repetir uma Palavra
function repetirPalavra(palavra, numeroDeRep) {
    return palavra.repeat(numeroDeRep);
  }

  let resultado = repetirPalavra("pinga", 3);
  console.log(resultado);

// 10- Função área do retângulo
function calcularAreaRetangulo(){
    baser = 10;
    altr = 12;
    ret = baser * altr;
    return ret;
  }
  let retangulo = calcularAreaRetangulo();
  console.log(retangulo)


 ////1. Função para Verificar Palíndromo
 function verificaPalindromo(palavra) {
    const palavraLimpa = palavra.replace(/\s+/g, '').toLowerCase();
    return palavraLimpa === palavraLimpa.split('').reverse().join('');
  }
console.log(verificaPalindromo('A man a plan a canal Panama'));


//// 2. Função de Fatorial
function fatorial(n) {
    
    if (n < 0) {
        return "O fatorial não está definido para números negativos.";
    }
    if (n === 0 || n === 1) {
        return 1; 
    }

    let resultado = 1; 
    for (let i = 2; i <= n; i++) {
        resultado *= i; 
    }
    return resultado; 
}

console.log(fatorial(5)); 


//// 3. Função para Filtrar Números Pares
function filtraPares(numeros) {
    let pares = [];
    for (let i = 0; i < numeros.length; i++) {
        if (numeros[i] % 2 === 0) {
            pares.push(numeros[i]); 
        }
    }
    return pares; 
}

console.log(filtraPares([1, 2, 3, 4, 5, 6])); // Saída: [2, 4, 6]


//// 4. Função de Contagem de Vogais


//// 5. Função de Ordenação de Strings
function ordenaStrings(arr) {
    return arr.sort();
}

const strings = ["banana", "maçã", "laranja", "abacaxi"];
const stringsOrdenadas = ordenaStrings(strings);
console.log(stringsOrdenadas); 

JJKKJJKK