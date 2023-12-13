// return
// Retorna um Valor
// Termina a funcao

function soma(a,b) {
    return a + b;
}

function soma2( a, b) {
    console.log('somando');
}

console.log(soma(5,2));

// document.addEventListener('click', function() {
//     document.body.style.backgroundColor = 'red';
// });

function criaPessoa(nome, sobrenome) {
    return {
        nome:  nome,
        sobrenome:  sobrenome
    };
}

const p1 = criaPessoa('Lucas', 'Medeiros');

const p2 = {
    nome: 'Andressa',
    sobrenome: 'Andrade',
};

console.log(p1);
console.log( typeof p2);

function falaFrase(comeco) {
    function falaResto(resto) {
        return comeco + ' ' + resto;
    }
    return falaResto;
}

const fala = falaFrase('Ola');
const resto = fala('mundo !');
console.log(resto);

function duplica(n) {
    return n * 2;
}

function triplica(n) {
    return n * 3;
}

function quadriplica(n) {
    return n * 4;
}

function criaMultiplicador(multiplicador){
    //multiplicador
    return function (n) {
        return n * multiplicador;
    };
}

const duplicar = criaMultiplicador(2); 
const triplicar = criaMultiplicador(3); 
const quadriplicar = criaMultiplicador(4); 

console.log(quadriplicar(5));
console.log(triplicar(5));
console.log(duplicar(5));

console.log(duplica(2));
console.log(triplica(2));
console.log(quadriplica(2));

