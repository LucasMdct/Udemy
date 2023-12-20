@decorator
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {}
}

function decorator<T extends new (...args: any[]) => any>(target: T): T {
  //console.log('HELLO .... DECORATOR');;
  return class extends target {
    color: string;
    name: string;
    constructor(...args: any[]) {
      super(...args);
      this.name = this.reverseText(args[0]);
      this.color = this.reverseText(args[1]);
    }
    reverseText(value: string): string {
      return value.split('').reverse().join('');
    }
  };
}

// const AnimalDecorated = decorator(Animal);
const animal1 = new Animal('lucas', 'blue');
console.log(animal1);
