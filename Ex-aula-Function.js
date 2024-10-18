// 1- Função de Saudação
function salve (){
    let salve1= "Salve";
}
console.log(salve);

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
    return palavra.repeat(numeroDeRepeticoes);
  }
  
  let resultado = repetirPalavra("pinga", 3);
  console.log(resultado);