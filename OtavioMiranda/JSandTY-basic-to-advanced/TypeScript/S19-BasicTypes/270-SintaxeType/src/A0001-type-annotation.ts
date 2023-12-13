/* eslint-disable */
let nameCompleted: string = 'Lucas Medeiros Costa';
// Basic Types (type inference occurs here)
let lastName: string = 'Medeiros'; // Any Type of string
let age: number = 30; // 10, 1.65, -5.55, 0xf00d, 0b1010, 0o7744
let adult: boolean = true; // true or false
let anySymbol: symbol = Symbol('Any-symbol'); // symbol

// COMMENT ON THE NEXT LINE AS IT IS NOT WITH TARGET ES2020
/* let big: bigint = 10n; //bigint */


// Arrays
let numbersArray: Array<number> = [1, 2, 3];
let stringsArray: Array<string> = ['a', 'b'];
//Same Thing
let numbersArray1: number[] = [3, 4, 5];
let stringsArray1: string[] = ['a', 'b'];


// Objects

let person: {
  name: string,
  age: number,
  adult?: boolean, //Because of ? This Becomes Optional

} = {
  age: 30,
  name: 'Lucas',
};

console.log(person.name);

// FUNCTIONS

function sum(
  x: number,
  y: number): number {
  return x + y;
}

const sum1: (x: number, y: number) => number = (x, y) => x + y;

const result = sum(2, 2);
