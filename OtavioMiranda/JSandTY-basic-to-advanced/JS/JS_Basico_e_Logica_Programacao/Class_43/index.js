// ESCREVA UM FUNCAO QUE RECEBE UM NUMERO E 
// RETORNE O SEGUINTE :
// NUMERO E DIVISIVEL POR 3 = Fizz
// NUMERO E DIVISIVEL POR 5 = Buzz
// NUMERO E DIVISIVEL POR 3 E 5 = FizzBuzz
// numero NAO e divisivel por 3 e 5 = retorna o proprio numero
// checar se o numero e realmente um numero = retorna o proprio numero
// use a funcao com numeros de 0 a 100

function fizzBuzz(numero) {
    if ( typeof numero !== 'number') return numero;
    if ( numero % 3 === 0 && 5 === 0) return 'FizzBuzz';
    if ( numero % 3 === 0) return 'Fizz';
    if ( numero % 5 === 0) return 'Buzz';
    return numero;
 }

 for ( let i = 0; i <= 100; i++ ) {
    console.log(i, fizzBuzz(i));
 }