// console.log('Linha 0');
// console.log('Linha 1');
// console.log('Linha 2');
// console.log('Linha 3');
// console.log('Linha 4');
// console.log('Linha 5');


// i - index
for (let i = 300; i <= 500; i+= 100) {
    console.log(`Linha ${i}`);
}

// i - index
for (let i = 300; i >= 100; i -= 100) {
    console.log(`Linha ${i}`);
}
// i - index
for (let i = 0; i <= 10; i++) {
    const par = i % 2 === 0 ? 'par' : 'impar';
    console.log(i,par);
}

const frutas = ['Maca', 'Laranja', 'Melao', 'Mamao', 'Uva', 'Melancia', 'Limao'];

for (let i = 0; i <= frutas.length; i++) {
    console.log(`indice ${i}`, frutas[i]);
}