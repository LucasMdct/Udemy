export class Person<T, U> {
  constructor(
    public name: T,
    public age: U,
  ) {}
}

// const person1 = new Person('Lucas', 30);
// const person2 = new Person('Douglas', 30);
// const person3 = new Person(['Cleber'], { age: 20 });
// const person4 = new Person<string, number>('Douglas', 30);

// STACK

// export array: Array<number>
export class Stack<T> {
  private count = 0;
  private elements: { [k: number]: T } = {};

  push(element: T): void {
    this.elements[this.count] = element;
    this.count++;
  }

  pop(): T | void {
    if (this.isEmpty()) return undefined;

    this.count--;

    const element = this.elements[this.count];
    delete this.elements[this.count];
    return element;
  }

  isEmpty(): boolean {
    return this.count === 0;
  }

  size(): number {
    return this.count;
  }

  showStack(): void {
    for (const key in this.elements) {
      console.log(this.elements[key]);
    }
  }
}

const stack = new Stack<number>();
stack.push(2);
stack.push(4);
stack.push(6);
stack.push(8);
stack.pop();
stack.showStack();

while (!stack.isEmpty()) {
  console.log(stack.pop());
}
