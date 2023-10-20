let umaString = "Um \"texto\"";
let umaString1 = "O RATO ROEU A ROUPA DO REI DE ROMA.";

console.log(umaString);

console.log(umaString[91]);


console.log(umaString.charAt(10));


console.log(umaString.concat(' em um lindo dia'));
console.log(umaString + ' em um lindo dia.');
console.log(`${umaString} em um lindo dia`);


console.log(umaString.indexOf('o', 3));

console.log(umaString.lastIndexOf('m', 3));

console.log(umaString.match(/[a-z]/g));
console.log(umaString.match(/[a-z]/));

console.log(umaString.match(/x/));

console.log(umaString.replace('Um', 'Outra'));

console.log(umaString.replace(/Um/, 'Outra'));

console.log(umaString1.replace(/R/g, '#'));

console.log(umaString1.length);


console.log(umaString1.slice(2, 6));

console.log(umaString1.slice(-5));

console.log(umaString1.slice(30));


console.log(umaString1.slice(-5, umaString1.length -1));

console.log(umaString1.slice(-5, -1));


console.log(umaString1.substring(umaString1.length -5, umaString1.length -1));


console.log(umaString1.split(' '));
console.log(umaString1.split('R'));

console.log(umaString1.split(' '), 3);

console.log(umaString1.toUpperCase());
console.log(umaString1.toLowerCase());