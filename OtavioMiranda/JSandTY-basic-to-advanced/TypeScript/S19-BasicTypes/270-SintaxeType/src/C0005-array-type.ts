// Array<T> - T[]
export function argsMultiply(...args: Array<number>): number {
  return args.reduce((accumulator, value) => accumulator * value, 1);
}

export function concatenatesStrings(...args: string[]): string {
  return args.reduce((accumulator, value) => accumulator + value);
}

export function toUpperCase(...args: string[]): string[] {
  return args.map((value) => value.toUpperCase());
}

const resultMultiply = argsMultiply(1, 2, 3);
const resultConcatenates = concatenatesStrings('a', 'b', 'c');
const upper = toUpperCase('a', 'b', 'c', 'd');

console.log(resultMultiply, resultConcatenates, upper);
