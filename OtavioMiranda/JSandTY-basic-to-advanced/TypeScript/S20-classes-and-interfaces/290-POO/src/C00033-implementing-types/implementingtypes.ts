type TypeName = {
  name: string;
};

type TypeLastName = {
  lastname: string;
};

type NameCompleted = {
  nameCompleted: () => string;
};

export class Person implements TypeName, TypeLastName, NameCompleted {
  constructor(
    public name: string,
    public lastname: string,
  ) {}

  nameCompleted(): string {
    return this.name + ' ' + this.lastname;
  }
}

const person = new Person('Lucas', 'Medeiros');
console.log(person.nameCompleted());
