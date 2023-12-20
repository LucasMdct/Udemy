interface Constructor {
  new (...args: any[]): any;
}

function inverter(param1: string, param2: string) {
  return function <T extends Constructor>(target: T): T {
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

function otherDecorator(param1: string) {
  return function (target: Constructor) {
    console.log('i am other decorator' + param1);
    return target;
  };
}

@otherDecorator(' \nParameter from another decorator') // 2
@inverter('VALUE1', 'VALUE2') // 1
export class Animal {
  constructor(
    public name: string,
    public color: string,
  ) {
    console.log('i am class');
  }
}

const animal1 = new Animal('lucas', 'blue');
console.log(animal1);
