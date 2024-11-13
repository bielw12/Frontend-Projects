// 1 Cadastro alunos
/*const prompt = require('prompt-sync')();
let cadastroDeAlunos = [];
let continuar ;
do{
    let nome = prompt("Digite seu nome: ");
    let idade = prompt("Digite sua idade: ");
    cadastroDeAlunos.push({nome: nome, idade: idade});
    continuar = prompt("Deseja cadastrar novo aluno? (s/n):");

} while(continuar.toLowerCase() ==='s');

console.log("Alunos cadastrados", cadastroDeAlunos);*/

// Exercício 2: Simulador de Notas//
function simuladorDeNotas() {
    do {
        let nota1 = prompt("Digite a nota da primeira prova:");
        let nota2 = prompt("Digite a nota da segunda prova:");
        let nota3 = prompt("Digite a nota da terceira prova:");

        let media = (nota1 + nota2 + nota3) / 3;

        console.log(`A média das provas é: ${media.toFixed(2)}`);
    
        var continuar = prompt("Deseja simular mais notas? (sim/não)").toLowerCase();

    } while (continuar === "sim");

    console.log("Obrigado por usar o simulador de notas!");
}

simuladorDeNotas();

// Exercício 3: Tentativas de Login
const prompt = require('prompt-sync')();
let suaSenha = [];
let continuar ;
do{
    let senha = prompt("Digite sua senha: ");
    suaSenha.push({senha});
    continuar = prompt("Deseja cadastrar essa senha? (s/n):");

} while(continuar.toLowerCase() ==='s');

console.log("Alunos cadastrados", suaSenha);

// 


