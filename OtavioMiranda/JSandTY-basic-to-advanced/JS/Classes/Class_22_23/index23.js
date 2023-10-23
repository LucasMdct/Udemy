/*
&& -> false && true -> false // se eu achar uma expressao falso eu paro e retorno o valor falso;
|| -> true && false -> vai retornar o valor verdadeiro

FALSY 
*false
0
''   ""    ```
null / undefined
NaN
*/

console.log('Luiz otavio'&& true && 'Maria');

console.log('Luiz otavio'&& false && NaN);

console.log('Luiz otavio'&& undefined && 'Maria');


function falaOi() {
    return 'Oi';
}

const vaiExecutar = 'Lucas';


console.log(vaiExecutar && falaOi());

/********************************/

console.log(0 || false || null || 'lucas medeiros' || true);

const corUsuarios = null;
const corPadrao =  corUsuarios || 'red';

console.log(corPadrao);

const a = 0; const b = null; const c = false ; const d = false; const e = NaN; 

console.log( a || b || c || d || e);