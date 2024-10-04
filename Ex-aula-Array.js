//1 fácil
let numero = [21, 32, 54];

console.log(numero);

//2 fácil
const arr = [10, 20, 30, 40];
console.log(arr[0]);

//3 fácil
const arra = [10, 20, 30, 40];
console.log(arra[1] = 100);

//4 fácil
const palavra = [`abc`, `dfg`, `hij`, `klm`];
console.log(palavra.length);

//5 fácil
const nmr = [2, 4, 6, 8];
const soma = nmr.reduce((total, num) => total + num, 0);

console.log(soma)

//6 fácil
const rmv = [8, 3, 7, 2];
rmv.pop(3);
console.log(rmv);

//7 fácil
const add = [8, 3, 7, 2];
add.unshift(3);
console.log(add);

//8 fácil
const first = [2, 4, 6, 8];
const second = [1, 3, 5, 7];
const cont = first.concat(second);
console.log(cont);

//2 médio
const livros = [
    { nome: 'O Alquimista', autor: 'Paulo Coelho' },
    { nome: 'Dom Casmurro', autor: 'Machado de Assis' },
    { nome: '1984', autor: 'George Orwell' },
    { nome: 'A Revolução dos Bichos', autor: 'George Orwell' },
    { nome: 'O Pequeno Príncipe', autor: 'Antoine de Saint-Exupéry' }
];

for (let i = 0; i < livros.length; i++) {
    console.log(livros[i].nome);
}

//3 médio
let xique = [2,]