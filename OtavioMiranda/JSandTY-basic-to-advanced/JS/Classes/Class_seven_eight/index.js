


const nome = 'Lucas';
const sobrenome = 'Medeiros';
const idade = 24;
const peso = 95;
const alturaEmMetros = 1.65;
let anoNascimento;

imc = peso / (alturaEmMetros * alturaEmMetros);
anoNascimento = 2023 - idade;

console.log(`${nome} ${sobrenome} tem, ${idade}, anos, pesa ${peso} kg`);
console.log(`tem ${alturaEmMetros}, de altura e seu IMC é de ${imc}`);
console.log(`${nome} nasceu em ${anoNascimento}.`);