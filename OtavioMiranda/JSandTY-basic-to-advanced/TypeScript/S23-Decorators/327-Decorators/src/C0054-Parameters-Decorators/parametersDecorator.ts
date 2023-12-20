function inverter(param1: string, param2: string) {
  return function <T extends new (...args: any[]) => any>(target: T): T {
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
        return (
          value.split('').reverse().join('') + ' ' + param1 + ' ' + param2 + ' '
        );
      }
    };
  };
}

@inverter('VALUE1', 'VALUE2')
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('sou a classe');
  }
}

const animal1 = new Animal('lucas', 'blue');
console.log(animal1);
