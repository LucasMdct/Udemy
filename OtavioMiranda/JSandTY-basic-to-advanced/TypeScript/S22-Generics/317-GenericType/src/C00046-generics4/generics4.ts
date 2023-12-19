// RESTRICTION GENERICS
type toObtainKeyFn = <O, K extends keyof O>(object: O, key: K) => O[K];

const obtainKey: toObtainKeyFn = (object, key) => object[key];

const animal = {
  color: 'Black',
  vaccines: [`Vaccine V1 - ZOMBIE`, `Vaccine V2 - CURE`],
  age: 5,
};

const vaccines = obtainKey(animal, 'vaccines');
const color = obtainKey(animal, 'color');

console.log(vaccines, color);

console.log(obtainKey(animal, 'age'));
