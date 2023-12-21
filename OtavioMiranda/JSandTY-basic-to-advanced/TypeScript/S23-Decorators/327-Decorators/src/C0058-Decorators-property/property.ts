// property
function newDecorator(classPrototype: any, name: string | symbol): any {
  let valueProperty: any;
  console.log(classPrototype);
  console.log(name);
  return {
    get: () => valueProperty,
    set: (value: any) => {
      if (typeof value === 'string') {
        valueProperty = value.split('').reverse().join('');
        return;
      }
      valueProperty = value;
    },
  };
}
export class NewPersonClass {
  @newDecorator
  name: string;
  @newDecorator
  lastname: string;
  @newDecorator
  age: number;

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

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

const person = new NewPersonClass('Lucas', 'Medeiros', 30);
const method = person.method('hello world');
console.log(method, person);
