function decorator(
  classPrototype: any,
  nameMethod: string,
  descriptor: PropertyDescriptor,
): PropertyDescriptor | void {
  console.log(classPrototype);
  console.log(nameMethod);
  console.log(descriptor);
  return {
    value: function (...args: string[]) {
      return args[0].toUpperCase();
    },
  };
}

export class OnePerson {
  name: string;
  lastname: string;
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decorator
  method(msg: string): string {
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

const person = new OnePerson('Lucas', 'Medeiros', 30);
person.method = () => 'hello';

const newMethod = person.method('Hello World ??');
console.log(newMethod);
