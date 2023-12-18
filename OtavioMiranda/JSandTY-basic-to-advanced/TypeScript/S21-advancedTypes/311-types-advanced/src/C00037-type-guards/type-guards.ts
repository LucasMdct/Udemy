function add(a: unknown, b: unknown): number | string {
  return typeof a === 'number' && typeof b === 'number' ? a + b : `${a}${b}`;
}

console.log(add(1, 50));
console.log(add('a', 'b'));

type Person = { typeVar: 'person'; name: string };

type Animal = { typeVar: 'animal'; cor: string };

type PersonOrAnimal = Person | Animal;

export class Student implements Person {
  typeVar: 'person' = 'person';
  constructor(public name: string) {}
}

function showName(obj: PersonOrAnimal): void {
  //if ('name' in obj) console.log(obj.name);
  //if (obj instanceof Student) console.log(obj.name);
  switch (obj.typeVar) {
    case 'person':
      console.log(obj.name);
      return;
    case 'animal': {
      console.log('Isso é um animal', obj.cor);
      return;
    }
  }
}

showName(new Student('Lucas'));
showName({ typeVar: 'animal', cor: 'red' });
