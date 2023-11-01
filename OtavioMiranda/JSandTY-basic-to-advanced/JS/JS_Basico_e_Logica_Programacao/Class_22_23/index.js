/*
Operadores logicos
&& -> AND -> E -> todas as expressoes precisam ser verdadeiras para retornar true ( verdadeiro )
|| -> OR -> OU
! -> NOT -> NAO
*/
//  variaveis
const usuario = 'Luiz';
const senha = '123456';
const tenhoDinheiro = true;
const estaSol_LaFora = true;


//       AND

console.log(tenhoDinheiro && estaSol_LaFora && true && true); // temos que ter todas verdadeiras se tiver uma falsa retorna falsa;


const vaiLogar = usuario === 'Luiz' && senha === '123456';
console.log('Esta logado com sucesso : ', vaiLogar);

/*******************/


//      OR

console.log(false || false || false);


const vaiLogarSera = usuario === 'Luiz' || senha === '123456';
console.log('Esta logado com sucesso : ', vaiLogarSera);

/*******************/


// NOT

console.log(!false); // uma negacao inverte.
console.log(!!true); // duas negacoes deixa o valor original.