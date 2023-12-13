// TUPLE
const customerData: [number, string] = [1, 'Lucas'];
const customerData1: readonly [number, string, string] = [
  1,
  'Lucas',
  'Medeiros',
];
const customerData2: [number, string, string?] = [1, 'Lucas'];
const customerData3: [number, string, ...string[]] = [1, 'Lucas', 'Medeiros'];

customerData[0] = 100;
customerData[1] = 'Andressa';
//customerData[2] = 'Andrade';

customerData3[1] = 'Andressa';
customerData3.pop();

console.log(customerData);
console.log(customerData1);
console.log(customerData2);
console.log(customerData3);

// readonly array
const array: readonly string[] = ['Lucas', 'Medeiros'];
const array1: ReadonlyArray<string> = ['Lucas', 'Medeiros'];

console.log(array);
console.log(array1);
