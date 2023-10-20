
/*
Primitivos (imutaveis) - string, number, boolean, undefined, null (bigint, symbol)
*/ 
//          012345
// let nome = 'Liucas';
// nome = 'lucas';
// console.log(nome);

// console.log(nome[0]);

// nome[0] = 'R'; // nao muda por ser imutavel 
// console.log(nome[0]);


// let a = 'A';
// let b = a; // copia apenas
// console.log(a, b);

// a = 'Outra cOISA';
// console.log(a, b);


/*
Referencia (mutavel) - array, object , function 
*/

// let A = [1, 2, 3];
// let B = [...A];
// let C = B;
// console.log(A, B)

// A.push(5);
// console.log(A, B);

// B.pop();
// console.log(A, B);

// A.push('Luiz');
// console.log(A, B);

const a = {
    nome : 'lucas',
    sobrenome : 'medeiros',
};

const b = {...a};

a.nome = 'Jose';
console.log(b);