

try {
    console.log(errorrr);
} catch (err) {
    console.log('Naao existe essa variavel');
    console.log(err);
}

function soma(x, y) {
    if (typeof x !== 'number' || typeof y !== 'number') {
        throw new ReferenceError
         ('x e y precisam ser numeros certo');
    }

    return x + y;

}
try {
    console.log(soma(12, 22));
    console.log(soma('12', 22));
} catch ( error) {
    console.log(error);
    console.log('Seus numeros nao sao validos');
}
