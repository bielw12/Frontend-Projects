let curso = "Desenvolvimento de Sistemas";  

switch (curso) {
  case "Desenvolvimento de Sistemas":
    console.log("Duração: 2 anos, Carga horária: 2000 horas");
    break;
  case "Logística":
    console.log("Duração: 1 ano, Carga horária: 1600 horas");
    break;
  case "Administração":
    console.log("Duração: 2 anos, Carga horária: 1800 horas");
    break;
  default:
    console.log("Curso não encontrado.");
}

///

let num1 = 10;  
let num2 = 5;   
let operacao = "+";  

switch (operacao) {
  case "+":
    console.log(`Resultado: ${num1 + num2}`);
    break;
  case "-":
    console.log(`Resultado: ${num1 - num2}`);
    break;
  case "*":
    console.log(`Resultado: ${num1 * num2}`);
    break;
  case "/":
    if (num2 !== 0) {
      console.log(`Resultado: ${num1 / num2}`);
    } else {
      console.log("Erro: Divisão por zero.");
    }
    break;
  default:
    console.log("Operação inválida.");
}

///

let idade = 25;  

switch (true) {
  case (idade >= 0 && idade <= 12):
    console.log("Classificação: Infantil");
    break;
  case (idade >= 13 && idade <= 17):
    console.log("Classificação: Adolescente");
    break;
  case (idade >= 18 && idade <= 59):
    console.log("Classificação: Adulto");
    break;
  case (idade >= 60):
    console.log("Classificação: Idoso");
    break;
  default:
    console.log("Idade inválida.");
}

////

let nota = 8.5;  

switch (true) {
  case (nota >= 0 && nota < 4):
    console.log("Classificação: Insuficiente");
    break;
  case (nota >= 4 && nota < 7):
    console.log("Classificação: Regular");
    break;
  case (nota >= 7 && nota < 9):
    console.log("Classificação: Bom");
    break;
  case (nota >= 9 && nota <= 10):
    console.log("Classificação: Excelente");
    break;
  default:
    console.log("Nota inválida.");
}

////

let dia = 3;  

switch (dia) {
  case 1:
    console.log("Domingo");
    break;
  case 2:
    console.log("Segunda-feira");
    break;
  case 3:
    console.log("Terça-feira");
    break;
  case 4:
    console.log("Quarta-feira");
    break;
  case 5:
    console.log("Quinta-feira");
    break;
  case 6:
    console.log("Sexta-feira");
    break;
  case 7:
    console.log("Sábado");
    break;
  default:
    console.log("Número inválido.");
}

////

let evento = "Festa Junina";  

switch (evento) {
  case "Festa Junina":
    console.log("Evento: Festa Junina - Diversão, música e comidas típicas!");
    break;
  case "Semana de Tecnologia":
    console.log("Evento: Semana de Tecnologia - Palestras e workshops sobre inovações tecnológicas.");
    break;
  case "Feira de Profissões":
    console.log("Evento: Feira de Profissões - Conheça os cursos e as oportunidades no mercado de trabalho.");
    break;
  default:
    console.log("Evento não encontrado.");
}

///

let mes = 4;  

switch (mes) {
  case 1:
    console.log("Janeiro");
    break;
  case 2:
    console.log("Fevereiro");
    break;
  case 3:
    console.log("Março");
    break;
  case 4:
    console.log("Abril");
    break;
  case 5:
    console.log("Maio");
    break;
  case 6:
    console.log("Junho");
    break;
  case 7:
    console.log("Julho");
    break;
  case 8:
    console.log("Agosto");
    break;
  case 9:
    console.log("Setembro");
    break;
  case 10:
    console.log("Outubro");
    break;
  case 11:
    console.log("Novembro");
    break;
  case 12:
    console.log("Dezembro");
    break;
  default:
    console.log("Mês inválido.");
}

///

let estacao = 2;  

switch (estacao) {
  case 1:
    console.log("Verão");
    break;
  case 2:
    console.log("Outono");
    break;
  case 3:
    console.log("Inverno");
    break;
  case 4:
    console.log("Primavera");
    break;
  default:
    console.log("Estação inválida.");
}

///

let unidade = "km";  
let valor = 1000;     

switch (unidade) {
  case "cm":
    console.log(`${valor} cm é igual a ${valor / 100} metros.`);
    break;
  case "m":
    console.log(`${valor} metros é igual a ${valor} metros.`);
    break;
  case "km":
    console.log(`${valor} km é igual a ${valor * 1000} metros.`);
    break;
  default:
    console.log("Unidade inválida.");
}

////

let conceito = "A";  

switch (conceito) {
  case "A":
    console.log("Faixa de notas: 90 a 100");
    break;
  case "B":
    console.log("Faixa de notas: 80 a 89");
    break;
  case "C":
    console.log("Faixa de notas: 70 a 79");
    break;
  case "D":
    console.log("Faixa de notas: 60 a 69");
    break;
  case "F":
    console.log("Faixa de notas: 0 a 59");
    break;
  default:
    console.log("Conceito inválido.");
}

///

let moeda = "USD";  
let valorReal = 100;  

switch (moeda) {
  case "USD":
    console.log(`${valorReal} BRL é igual a ${(valorReal / 5.25).toFixed(2)} USD.`);
    break;
  case "EUR":
    console.log(`${valorReal} BRL é igual a ${(valorReal / 5.50).toFixed(2)} EUR.`);
    break;
  case "GBP":
    console.log(`${valorReal} BRL é igual a ${(valorReal / 6.50).toFixed(2)} GBP.`);
    break;
  default:
    console.log("Moeda inválida.");
}

///

let tipoCurso = "Técnico";  

switch (tipoCurso) {
  case "Técnico":
    console.log("Curso Técnico: Formação profissional de nível médio.");
    break;
  case "Superior":
    console.log("Curso Superior: Formação acadêmica de nível universitário.");
    break;
  case "Extensão":
    console.log("Curso de Extensão: Aperfeiçoamento profissional.");
    break;
  default:
    console.log("Tipo de curso inválido.");
}

////

let prioridade = 2;  

switch (prioridade) {
  case 1:
    console.log("Prioridade: Alta");
    break;
  case 2:
    console.log("Prioridade: Média");
    break;
  case 3:
    console.log("Prioridade: Baixa");
    break;
  default:
    console.log("Prioridade inválida.");
}

///

let peso = 70;  
let altura = 1.75;  
let imc = peso / (altura * altura);  

switch (true) {
  case (imc < 18.5):
    console.log("Classificação: Baixo peso");
    break;
  case (imc >= 18.5 && imc < 24.9):
    console.log("Classificação: Peso normal");
    break;
  case (imc >= 25 && imc < 29.9):
    console.log("Classificação: Sobrepeso");
    break;
  case (imc >= 30):
    console.log("Classificação: Obesidade");
    break;
  default:
    console.log("Valor de IMC inválido.");
}

//

let documento = "RG";  

switch (documento) {
  case "RG":
    console.log("Documento: Registro Geral (RG) - Identificação civil.");
    break;
  case "CPF":
    console.log("Documento: Cadastro de Pessoa Física (CPF) - Identificação fiscal.");
    break;
  case "Passaporte":
    console.log("Documento: Passaporte - Identificação para viagens internacionais.");
    break;
  default:
    console.log("Documento inválido.");
}

//

let tipoPassageiro = "Estudante";  

switch (tipoPassageiro) {
  case "Estudante":
    console.log("Tarifa: 50% de desconto.");
    break;
  case "Trabalhador":
    console.log("Tarifa: Valor integral.");
    break;
  case "Idoso":
    console.log("Tarifa: 50% de desconto.");
    break;
  default:
    console.log("Tipo de passageiro inválido.");
}

//

let tempoExecucao = 5;  

switch (true) {
  case (tempoExecucao < 2):
    console.log("Desempenho: Rápido");
    break;
  case (tempoExecucao >= 2 && tempoExecucao < 5):
    console.log("Desempenho: Moderado");
    break;
  case (tempoExecucao >= 5 && tempoExecucao < 10):
    console.log("Desempenho: Lento");
    break;
  case (tempoExecucao >= 10):
    console.log("Desempenho: Muito Lento");
    break;
  default:
    console.log("Tempo inválido.");
}

//

let deficiencia = "Visual";  

switch (deficiencia) {
  case "Visual":
    console.log("Assistência: Leitura em braille, intérprete de libras.");
    break;
  case "Auditiva":
    console.log("Assistência: Intérprete de libras, legendas.");
    break;
  case "Motora":
    console.log("Assistência: Acessibilidade física, cadeiras de rodas.");
    break;
  default:
    console.log("Deficiência inválida.");
}

//

let notaNumerica = 85;  

switch (true) {
  case (notaNumerica >= 90 && notaNumerica <= 100):
    console.log("Conceito: A");
    break;
  case (notaNumerica >= 80 && notaNumerica < 90):
    console.log("Conceito: B");
    break;
  case (notaNumerica >= 70 && notaNumerica < 80):
    console.log("Conceito: C");
    break;
  case (notaNumerica >= 60 && notaNumerica < 70):
    console.log("Conceito: D");
    break;
  case (notaNumerica < 60):
    console.log("Conceito: F");
    break;
  default:
    console.log("Nota inválida.");
}

///


let clima = "Chuva";  

switch (clima) {
  case "Sol":
    console.log("Prepare-se para um dia quente e ensolarado!");
    break;
  case "Chuva":
    console.log("Leve um guarda-chuva!");
    break;
  case "Nublado":
    console.log("Possibilidade de chuva, fique preparado.");
    break;
  default:
    console.log("Clima inválido.");
}
