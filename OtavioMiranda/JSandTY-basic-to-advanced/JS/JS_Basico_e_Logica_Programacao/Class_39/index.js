
//const nome = 'Lucas';
//let i = 0;




//while ( i < nome.length) {
 //   console.log(nome[i]);
 //   i++;
//}

//while ( i <= 20) {
//    console.log(i);
//    i++;
//}

console.log('segue a vida...');


function random(min, max) {
    const r = Math.random() * (max - min) + min;
    return Math.floor(r);
}


const min = 1 ;
const max = 50;

//let rand = random(min, max);
let rand = 10;
while( rand !== 10) {
    rand = random(min, max);
    console.log(rand);
}


console.log('#00000');


do {
    rand = random(min, max);
    console.log(rand);
} while (rand !== 10); 




