
function funcao(a, b, c) {
    //console.log(arguments);
    let total = 0;
    for (let argumento of arguments) {
        total += argumento;
    }

    console.log(total, a , b, c);
}

// funcao('Valor', 1, 2, 3, 4, 5, 6);
funcao(1,2,3,4,5,6,7);

// ISSO SO FUNCIONA EM FUNCTION 

function funcao2(a,b,c,d,e,f) {
    console.log(a,b,c,d,e,f);
}

funcao2(1,2,3);

// soma a e b
function funcaoSoma(a, b) {
    b = b || 2;
    console.log(a + b);
}

funcaoSoma(2);

// MANEIRA MAIS MODERNA

function funcaoSomaModerna( a, b= 2, c = 4) {
    console.log(a+ b+ c);
}

funcaoSomaModerna(2 , undefined, 20);

// atribuicao via desestruturacao 

function funcaoDesestruturada({nome, sobrenome, idade}) {
    console.log(nome,sobrenome,idade);
}

let obj = { nome: 'Luiz', sobrenome: 'Otavio', idade: 20};

funcaoDesestruturada(obj);


// const conta = (operador, acumulador, ...numeros) => {
//     // for (let numero of numeros) {
//     //    if(operador === '+') acumulador += numero;
//     //    if(operador === '-') acumulador += numero;
//     //    if(operador === '/') acumulador += numero;
//     //    if(operador === '*') acumulador += numero;

//     // }
//     // console.log(arguments);
// }

const conta = (...args) => {
    console.log(args);
};
conta('+' , 0 , 20, 30 , 40 , 50);