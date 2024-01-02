import { sum } from './mod';
import { sumTS } from './modCopy';

const result = sum(10, 20) as number;

console.log(result);

const resultTS = sumTS(20, 20);
console.log(resultTS);
