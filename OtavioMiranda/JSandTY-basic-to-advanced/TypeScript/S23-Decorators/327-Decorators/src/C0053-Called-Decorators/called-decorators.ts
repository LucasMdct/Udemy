function inverter<T extends new (...args: any[]) => any>(target: T): T {
  console.log('sou decorator e recebi', target);
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

@inverter
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('sou a classe');
  }
}

// const AnimalDecorated = decorator(Animal);
// const animal1 = new Animal('lucas', 'blue');
// console.log(animal1);
