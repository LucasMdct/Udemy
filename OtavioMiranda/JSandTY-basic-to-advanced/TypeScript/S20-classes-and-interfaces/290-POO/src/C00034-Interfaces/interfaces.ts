interface TypeName {
  name: string;
}

interface TypeLastName {
  lastname: string;
}

interface NameCompleted {
  nameCompleted(): string;
}

//type Number = number | string;

type PersonType = TypeName & TypeLastName & NameCompleted;
interface PersonType2 extends TypeName, TypeLastName, NameCompleted {}

export class Person implements PersonType2, PersonType {
  constructor(
    public name: string,
    public lastname: string,
  ) {}

  nameCompleted(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person2: PersonType2 = {
  name: 'Lucas',
  lastname: 'Medeiros',
  nameCompleted() {
    return this.name + ' ' + this.lastname;
  },
};

const person = new Person('Lucas', 'Medeiros');
console.log(person.nameCompleted());
console.log(person2.nameCompleted());
