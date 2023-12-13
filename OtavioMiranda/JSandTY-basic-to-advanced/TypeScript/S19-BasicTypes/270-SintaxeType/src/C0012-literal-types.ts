let x = 10; // eslint-disable-line
x = 0b1010;// eslint-disable-line
//x = 'Lucas';
const y = 10;// eslint-disable-line
const b = 100;// eslint-disable-line

//let a: 100 = 100;// eslint-disable-line
//a = 120;
const literalTypes = {
  name: 'literal' as const,
};

let a = 100 as const;// eslint-disable-line

const person = {
  name: 'Lucas' as const,
  lastName: 'Medeiros',
};

console.log(person);

function chooseColor(color: 'Red' | 'Yellow' | 'Blue'): string {
  return color;
}

console.log(chooseColor('Blue'));

// Module mode
export default literalTypes;
