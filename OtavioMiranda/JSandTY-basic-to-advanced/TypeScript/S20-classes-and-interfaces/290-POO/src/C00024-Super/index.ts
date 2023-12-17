export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
  ) {}
  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNameCompleted(): string {
    return this.name + ' ' + this.lastname;
  }
}

export class Client extends Person {
  getNameCompleted(): string {
    console.log('DOING SOMETHING FIRST');
    const result = super.getNameCompleted();
    return result + ' HEEEY';
  }
}

export class Student extends Person {
  classroom: string;

  constructor(
    name: string,
    lastname: string,
    age: number,
    cpf: string,
    classroom: string,
  ) {
    super(name, lastname, age, cpf);
    this.classroom = classroom;
  }
  getNameCompleted(): string {
    return `student : ${this.name} ${this.lastname}`;
  }
}

const person = new Person('Lucas', 'Medeiros', 23, '222.345.546-23');
const client = new Client('Cleber', 'Ganassini', 23, '222.345.546-23');
const student = new Student(
  'Douglas',
  'Nassif',
  23,
  '222.345.546-23',
  'Sala 23',
);

console.log(student);
console.log(client);
console.log(person);

console.log(student.getNameCompleted());
console.log(client.getNameCompleted());
console.log(person.getNameCompleted());
