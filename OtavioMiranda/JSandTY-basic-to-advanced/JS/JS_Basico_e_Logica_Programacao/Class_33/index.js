
const pessoa = {
    nome: 'Lucas',
    sobrenome: 'Medeiros',
    idade: 34,
    endereco: {
        rua: 'Rua daniel motta cordeiro',
        numero: 288,
    }
};

//const {nome = '', sobrenome, idade} = pessoa;
//const {nome: n = '', sobrenome, endereco} = pessoa;
const {endereco: {rua: r = 12345, numero}, endereco} = pessoa; // extrair da constante
console.log(endereco);

const {nome , ...resto} = pessoa;
console.log(nome, resto);
