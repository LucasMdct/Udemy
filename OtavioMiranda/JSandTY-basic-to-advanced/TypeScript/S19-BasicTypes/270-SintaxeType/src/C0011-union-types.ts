// union types

function add(a: number, b: number): number {
  return a + b;
}

function addOrConcat(
  a: number | string | boolean,
  b: number | string | boolean,
): number | string {
  if (typeof a === 'number' && typeof b === 'number') return a + b;
  return `${a}${b}`;
}

console.log(add(10, 20));
console.log(addOrConcat('s', 't'));
console.log(addOrConcat(100, 20));
console.log(addOrConcat(10, '39'));
console.log(addOrConcat('35', 20));
console.log(addOrConcat(true, true));
