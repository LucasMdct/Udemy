// declaracao de funcao ( function hoisting )

falaOi();
function falaOi() {
    console.log('oi');
}

// First-Class objects ( objetos de primeira classe)
// Function expression

const souUmDado = function () {
    console.log('sou um dado');
};

souUmDado();


function executaFuncao(funcao) {
    console.log('eu executo a funcao !');
    funcao();
}

executaFuncao(souUmDado);


// ARROW FUNCTION

const funcaoArrow = () => {
    console.log('sou uma arrow function');
};

funcaoArrow();


setInterval(() => {
    // uma arrow function com set interval
}, 1000);

const obj = {
    falar: function() {
        console.log('estou falando...');
    }
};

obj.falar();