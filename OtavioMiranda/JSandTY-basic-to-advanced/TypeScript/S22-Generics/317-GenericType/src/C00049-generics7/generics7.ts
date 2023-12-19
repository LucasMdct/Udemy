export function isNumber(value: unknown): value is number {
  return typeof value === 'number';
}

export function sumFunction(...args: unknown[]): number {
  const returnFunction = args.reduce((sum, value) => {
    return isNumber(sum) && isNumber(value) ? sum + value : sum;
  }, 0);

  return returnFunction as number;
}

console.log(sumFunction(1, 2, 3)); // Saída: 6
console.log(sumFunction(...[1, 2, 3, 'f'])); // Saída: 6 (ignorando 'f')
console.log(sumFunction('a', 'b', 'c')); //
