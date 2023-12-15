export class Person {
  constructor(
    public name: string,
    public lastname: string,
    private age: number,
    protected cpf: string,
    protected login: string,
    protected password: string,
    private email: string,
    private andress: string,
    private city: string,
    private states: string,
  ) {
    this.age = age;
  }
  getAge(): number {
    return this.age;
  }

  getCpf(): string {
    return this.cpf;
  }

  getNameCompleted(): string {
    return this.name + ' ' + this.lastname;
  }

  getAndressCompleted(): string {
    return `${this.andress}, ${this.city}, ${this.states}`;
  }

  getUserLogin(): string {
    return `${this.login}`;
  }

  getUserPassword(): string {
    return `S${this.password}`;
  }

  getUserEmail(): string {
    return `${this.email}`;
  }
}

export class Client extends Person {}

export class Student extends Person {
  constructor(name: string, lastname: string, age: number) {
    // Chama o construtor da classe pai (Person) com os argumentos desejados
    super(name, lastname, age, '', '', '', '', '', '', '');
  }
  getNameCompleted(): string {
    return (
      'this comes from the student' +
      this.name +
      ' ' +
      this.lastname +
      ' ' +
      this.getAge +
      ' '
    );
  }
  getClient(): string {
    return 'this comes from the client' + this.name + ' ' + this.lastname;
  }
}

export class User extends Person {}

const student = new Student('Lucas', 'Medeiros', 23);

console.log(student);
