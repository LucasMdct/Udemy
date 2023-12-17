export class Person {
  constructor(
    private name: string,
    private lastname: string,
    private age: number,
    private _cpf: string,
  ) {
    this.cpf = _cpf;
  }

  set cpf(cpf: string) {
    console.log('setter called');
    this._cpf = cpf;
  }

  get cpf(): string {
    console.log('getter called');
    return this._cpf.replace(/\D/g, '');
  }
}

const person = new Person('Lucas', 'Medeiros', 23, '222.345.546-23');

person.cpf = '025.568.425-52';

console.log(person.cpf);
