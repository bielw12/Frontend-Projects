const usuario = {nome: 'Daniel' , idade: '12', time: 'Liverpool'};
const mensagemBoasVindas3 = 'Bem vindo Tricolor!';
const mensagemBoasVindas4 = 'Bem vindo Alviverde!';
const mensagemBoasVindas5 = 'Bem vindo Vira-Casaca!'

if (usuario.time === 'São Paulo') {
    console.log(mensagemBoasVindas3);
} else if(usuario.time === 'Palmeiras'){
    console.log(mensagemBoasVindas4)
} else {
    console.log(mensagemBoasVindas5)
}
