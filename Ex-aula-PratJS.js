// 1. Variáveis e Operadores
let preco = 100;
let desconto = preco * 0.2;
let precoFinal = preco - desconto;
console.log(precoFinal);

// 2. Concatenando Strings
let nome = 'João';
let sobrenome = 'Silva';
let nomeCompleto = nome + ' ' + sobrenome;
console.log(nomeCompleto);

// 3. Arrays
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++) {
    console.log(numeros[i]);
}

// 4. Manipulação de Arrays
let frutas = ['maçã', 'banana', 'laranja'];
frutas.push('uva');
console.log(frutas);

// 5. Objetos
let pessoa = {
    nome: 'Ana',
    idade: 28,
    cidade: 'São Paulo'
};
console.log(pessoa.nome, pessoa.idade);

// 6. Manipulação de Objetos
pessoa.email = 'ana@example.com';
console.log(pessoa);

// 7. Arrays e Métodos
let numerosArray = [1, 2, 3, 4, 5];
let numerosDobrados = numerosArray.map(num => num * 2);
console.log(numerosDobrados);

// 8. Filtrando Arrays
let idades = [15, 22, 18, 30, 12];
let maioresDe18 = idades.filter(idade => idade > 18);
console.log(maioresDe18);

// 9. Looping em Arrays
let cores = ['vermelho', 'verde', 'azul'];
cores.forEach(cor => {
    console.log(cor);
});

// 10. Objetos Aninhados
let carro = {
    marca: 'Ford',
    modelo: 'Fiesta',
    especificacoes: {
        ano: 2020,
        cor: 'preto'
    }
};
console.log(carro.especificacoes.cor);

// 11. Desestruturação de Objetos
let usuario = { nome: 'João', idade: 30 };
let { nome: nomeUsuario, idade: idadeUsuario } = usuario;
console.log(nomeUsuario, idadeUsuario);

// 12. Contagem de Elementos em um Array
let animais = ['cachorro', 'gato', 'pássaro', 'gato'];
let countGato = animais.filter(animal => animal === 'gato').length;
console.log(countGato);

// 13. Operador Ternário
let nota = 8;
let resultado = nota >= 7 ? 'Aprovado' : 'Reprovado';
console.log(resultado);

// 14. Transformando Strings
let texto = "Olá, mundo!";
console.log(texto.toLowerCase());

// 15. União de Arrays
let array1 = [1, 2, 3];
let array2 = [4, 5, 6];
let uniao = [...array1, ...array2];
console.log(uniao);

// 16. Removendo Elementos de um Array
let numerosRemover = [10, 20, 30, 40];
numerosRemover.shift();
console.log(numerosRemover);

// 17. Verificação de Propriedades de Objetos
let produto = { nome: 'Notebook', preco: 2500 };
if ('preco' in produto) {
    console.log('A propriedade "preco" existe.');
}

// 18. Iterando com `for`
let numerosAleatorios = [3, 7, 1, 9, 5];
let soma = 0;
for (let i = 0; i < numerosAleatorios.length; i++) {
    soma += numerosAleatorios[i];
}
console.log(soma);

// 19. Clonando Objetos
let usuarioClone = Object.assign({}, usuario, { cidade: 'Rio de Janeiro' });
console.log(usuario);
console.log(usuarioClone);

// 20. Manipulação de Arrays com `reduce`
let numerosParaProduto = [1, 2, 3, 4];
let produtoFinal = numerosParaProduto.reduce((acc, num) => acc * num, 1);
console.log(produtoFinal);
