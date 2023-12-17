export class Person {
  static ageStandard = 0;
  static cpfStandard = '000.000.000-00';

  constructor(
    public name: string,
    public lastname: string,
    public age: number,
    public cpf: string,
  ) {}

  normalMethod(): void {
    console.log(Person.ageStandard, Person.cpfStandard);
  }

  static createPerson(name: string, lastname: string): Person {
    return new Person(name, lastname, Person.ageStandard, Person.cpfStandard);
  }
}

const person = new Person('Lucas', 'Medeiros', 23, '222.345.546-23');
const person2 = Person.createPerson('Douglas', 'nassif');
person.cpf = '025.568.425-52';

console.log(person);
console.log(person2);
person2.normalMethod();

console.log(Person.ageStandard, Person.cpfStandard);
