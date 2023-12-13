//let x: any;
let x: unknown;

x = 100;
x = 'Lucas';
x = 900;
x = 10;
const y = 800;

// type any
//console.log(x + y);

//type unknown
if (typeof x === 'number') console.log(x + y);
