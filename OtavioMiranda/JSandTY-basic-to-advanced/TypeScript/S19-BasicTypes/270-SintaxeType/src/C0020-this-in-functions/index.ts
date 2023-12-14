//import './formControl';

export function functionThis(this: Date, name: string, age: number): void {
  console.log(this);
  console.log(name, age);
}

functionThis.call(new Date(), 'Lucas', 24);
functionThis.apply(new Date(), ['Lucas', 24]);
