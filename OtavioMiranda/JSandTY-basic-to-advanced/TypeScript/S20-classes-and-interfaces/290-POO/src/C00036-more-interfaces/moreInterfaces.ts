// DECLARATION MERGING
interface Person {
  name: string;
}

interface Person {
  readonly lastname: string;
}

interface Person {
  readonly endereco: string[];
}

interface Person {
  age?: number;
}

const person: Person = {
  name: 'Lucas',
  lastname: 'Medeiros',
  endereco: ['BRAZIL'],
  age: 24,
};

person.endereco.push('NEW YORK');
person.age = 23;
console.log(person);
