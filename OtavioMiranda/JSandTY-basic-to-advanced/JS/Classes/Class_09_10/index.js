

// STRING , NUMBER , UNDEFINED, NULL, BOOLEAN, SYMBOL
const nome = 'Lucas'; // String
const nome1 = 'Andressa'; // String
const nome2 = 'Valentin'; // String

const num1 = 10; //number
const num2 = 10.52; //number

let nomeAluno; // undefined = NAO APONTA PRA LOCAL NENHUM NA MEMÓRIA 
const sobrenomeAluno = null; // nulo -> NAO APONTA PRA LOCAL NENHUM NA MEMÓRIA 

const boolean = false; // Boolean = true, false (lógico)

console.log(typeof boolean, boolean);



//ambos a e b aponta para o mesmo valor na memoria 
const array = [1,2];
const b = array;

console.log(array, b);

b.push(3);
console.log(array, b);

// ambos tem valor 2, e sustenta seu valor 
const a = 2;
let c = a;
console.log(a, c);
c = 5;
console.log(a, c);