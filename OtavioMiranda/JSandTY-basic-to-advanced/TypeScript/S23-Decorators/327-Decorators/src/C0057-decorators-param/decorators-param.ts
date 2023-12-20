function decaratorMethod(
  classPrototype: any,
  nameMethod: string | symbol,
  index: number,
): any {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(index);
  return 'qualquer coisa';
}

export class TwoPerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  newMethod(@decaratorMethod msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  get nameCompleted(): string {
    return this.name + ' ' + this.lastname;
  }

  set nameCompleted(value: string) {
    const words = value.split(/\s+/g);
    const primaryName = words.shift();
    if (!primaryName) return;
    this.name = primaryName;
    this.lastname = words.join(' ');
  }
}

const person = new TwoPerson('Lucas', 'Medeiros', 30);
const newMethod = person.newMethod('hello world !');
console.log(newMethod);
