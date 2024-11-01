//Exercício 1: Cálculo de Média de Notas
let nota1 = 6;
let nota2 = 7;
let nota3 = 5;

let somaMedia =  (nota1 + nota2 + nota3) / 3;

if (somaMedia >=6) {
    console.log("Aprovado");
} else  { 
    console.log("Reprovado");
    }

//Exercício 2: Cadastro de Aluno no Sistema
let idadeAluno =  15;

if (idadeAluno > 16) {
    console.log('Parabens, sua idade é aceita no Senai.');
} else {
    console.log('Sua idade não é aceita no Senai.');
}

//Exercício 3: Desconto para Alunos em Material Didático
let valorMat = 78;

if (valorMat > 50){
    let  desconto = valorMat * 0.1;
    console.log(desconto.toFixed(1));
} else {
    console.log('Não há desconto.')}


//Exercício 4: Verificação de Presença
let presenca = 89;

        if (presenca > 75) 
            {
                console.log('A presença do aluno está boa.');
                } else {
                    console.log('A presença do aluno está ruim.');
                    }

//Exercício 5: Identificação de Turno de Aula
let periodo = 'V'

if (periodo === "M"){
    console.log("Periodo Matituno");
}else if (periodo === "V"){
    console.log("Periodo Vespertino");
}else if (periodo === "N"){
    console.log("Periodo Noturno");
} else { 
    console.log("Adicione um Periodo Valido")
}

//Exercício 7: Gerenciamento de Estoque de Laboratório
let equipamentos = 56

if  (equipamentos > 50) {
    console.log('O estoque de equipamentos está completo.');
    } else {
        console.log('O estoque de equipamentos está baixo.');}

//Exercício 8: Classificação de Alunos por Rendimento
let notaQ = 6.9

if (notaQ > 8){
    console.log('Excelente');
} else if (notaQ < 6){
    console.log('Bom')
} else {
    console.log('Regular')
}

//Exercício 9: Cálculo de Desconto para Curso de Extensão
let matricula = "Matriculado";
let curso = 1000;
let dessconto = curso * 0.20;
if(matricula === "Matriculado"){
    console.log(`O valor do curso será ${curso - dessconto}R$`);
}else{(console.log(`O valor do curso será ${curso}R$`))};

//Exercício 10: Sistema de Avaliação de Projetos

// Funcionalidade
let funcionalidade = 9;
if (funcionalidade >=8){
    console.log("A funcionalidade está excelente");
}
else if (funcionalidade >= 6 && funcionalidade <= 7.9){
    console.log("A funcionalidade está boa");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Design
let desing = 6;
if (desing >=8){
    console.log("O desing está excelente");
}
else if (desing >= 6 && desing <= 7.9){
    console.log("O desing está bom");
} else {(console.log("A funcionalidade precisa melhorar"))};

// Documentação
let documentação = 2;
if (documentação >=8){
    console.log("A documentação está excelente");
}
else if (documentação >= 6 && documentação <= 7.9){
    console.log("A documentação está boa");
} else {(console.log("A documentação precisa melhorar"))};

// 11 Frequência e Notas
let presença = 75;
if (presença >= 75){
    console.log("Parabéns, você passou!");
} else {
    console.log("Venha com mais frequência no próximo ano!");
}let notas1 = 1;
let notas2 = 3;
let notas3 = 6.3;
let divisão = (notas1 + notas2 + notas3) /3;
if( divisão >= 6) {
    console.log("Parabéns, boas notas");
} else {console.log("Estude mais e se dedique da próxima vez")};

// 12 Laboratório informática
let val = "cartão inativo"
console.log("Possui cartão valido?")
if ( val === "cartão ativo"){
    console.log("Entrada liberada")
}else{(console.log("Acesso negado"))}

// 13 Alocação de recursos
let recursos = 100;
if (recursos <100){
    console.log("Recursos insuficientes, reserve uma data!")
} else {(console.log("Retire seus recursos no estoque!"))}

// 14 Obrigatórias/eletivas
const disciplina = "obrigatória";
const vagasDisponiveis = true;

if (disciplina === "obrigatória") {
    console.log("Você foi matriculado na disciplina obrigatória.");
} else if (disciplina === "eletiva") {
    if (vagasDisponiveis) {
        console.log("Você foi matriculado na disciplina eletiva.");
    } else {
        console.log("Você está na lista de espera para a disciplina eletiva.");
    }
} else {
    console.log("Opção inválida. Por favor, escolha entre obrigatória ou eletiva.");
}

//Exercício 15: Simulador de Desempenho em Provas
const prova23 = 7;
const prova24 = 8;
const prova35 = 5;

const media = (prova23 + prova24 + prova35) / 3;

if (media >= 6) {
    console.log("Você passou!");
    if (media > 8) {
        console.log("Excelente desempenho!");
    }
} else if (media >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}


//Exercício 16: Sistema de Verificação de Pontos na Carteira de Motorista
let infrações = [5, 3, 7];
let totalPontos = 0;

for (let pontos of infrações) {
    totalPontos += pontos;
}

if (totalPontos >= 20) {
    console.log("Sua carteira de motorista está suspensa.");
} else {
    console.log(`Você ainda pode acumular ${20 - totalPontos} pontos.`);
}


//Exercício 17: Simulador de Empréstimo Bancário
let valorEmprestimo = 1000;
let numeroParcelas = 12;
let taxaJuros = 0.05;

const valorTotal1 = valorEmprestimo * Math.pow(1 + taxaJuros, numeroParcelas);
console.log(`O valor total a ser pago ao final do empréstimo é: R$ ${valorTotal1.toFixed(2)}`);


//Exercício 18: Sistema de Cálculo de Desempenho Escolar com Atividades Extras
let prova1 = 6;
let prova2 = 7;
let prova3 = 8;
let atividadesExtras = true;

let media3 = (prova1 + prova2 + prova3) / 3;

if (atividadesExtras) {
    media3 *= 1.05;
}

if (media3 >= 6) {
    console.log("Você passou!");
} else if (media3 >= 4) {
    console.log("Você ficou de recuperação.");
} else {
    console.log("Você foi reprovado.");
}


//Exercício 19: Classificação de Produtos com Base na Qualidade e Preço
let qualidade = 9;
let preco = 45;

let classificacao;

if (qualidade >= 8 && preco < 50) {
    classificacao = "Ótimo Custo-Benefício";
} else if (qualidade >= 6) {
    classificacao = "Bom";
} else if (qualidade >= 4) {
    classificacao = "Regular";
} else {
    classificacao = "Ruim";
}

console.log(`Classificação do produto: ${classificacao}`);


//Exercício 20: Calculadora de Consumo de Energia e Faixas de Cobrança
let consumo = 150;
let valorTotal = 0;

if (consumo <= 100) {
    valorTotal = consumo * 0.50;
} else if (consumo <= 200) {
    valorTotal = 100 * 0.50 + (consumo - 100) * 0.75;
} else {
    valorTotal = 100 * 0.50 + 100 * 0.75 + (consumo - 200) * 1.00;
}

console.log(`O valor total da conta de energia é: R$ ${valorTotal.toFixed(2)}`);
