let x;

if (typeof x === 'undefined') x = 20;

console.log(x * 3);

export function createPerson(
  firstName: string,
  lastName?: string,
): {
  firstName: string;
  lastName?: string;
} {
  return { firstName, lastName };
}

export function squareOf(x: /* any */ number) {
  if (typeof x === 'number') return x * x;
  return null;
}

const squareOfNumber = squareOf(2);

if (squareOfNumber === null) {
  console.log('invalid value');
} else {
  console.log(squareOfNumber * 100);
}
