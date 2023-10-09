
/*
ARITMETICOS 
+ Adicao / Concatenacao ( - / * )
** Potenciacao
% RESTO DA DIVISAO
*/ 
/*
()
**
* / %
+ -
*/


const num1 = 5;
const num2 = 2;
const num3 = 10;

//console.log((num1 + num2) * num3);
console.log(num1 + num2 / num3);


// Incremento = ++   Decremento = --
let contador = 1;
//++contador; //2
//++contador; //3
//++contador; //4
//++contador; //5
console.log(contador++); //1
console.log(contador); // 2

console.log(++contador); //3
console.log(contador); // 3

console.log(--contador) //2
// colocar no console log o -- ou ++ , nao e uma boa pratica de programacao !.

let contador1 = 1;
contador1++; // essa seria a melhor maneira de exibir o valor
console.log(contador1);

const passo = 8;
let contadorMais = 1;
contadorMais = contadorMais + passo;
console.log(contadorMais);
contadorMais = contadorMais + passo;
console.log(contadorMais);
contadorMais = contadorMais + passo;
console.log(contadorMais);

contadorMais += passo;
contadorMais += passo;
contadorMais += passo; // contador = contador + passo;
console.log(contadorMais);

let contadorNew = 2;
contadorNew *= 10;
contadorNew *= 10;
console.log(contadorNew);

let contadorNew1 = 2;
contadorNew1 **= 10;
contadorNew1 **= 10;
console.log(contadorNew1);



// NaN - not a number 
const num4 = 10;
const num5 = 'Lucas';

console.log(num5 * num4);



const num10 = 10;
const num12 = parseFloat('5.2');

console.log(num10 + num12);

console.log(typeof num12);