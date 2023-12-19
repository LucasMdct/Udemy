export class Calculator {
  constructor(public number: number) {}

  addition(n: number): this {
    this.number += n;
    return this;
  }

  subtraction(n: number): this {
    this.number -= n;
    return this;
  }

  multiplication(n: number): this {
    this.number *= n;
    return this;
  }

  division(n: number): this {
    this.number /= n;
    return this;
  }
}

export class subCalculator extends Calculator {
  power(n: number): this {
    this.number **= n;
    return this;
  }
}

const calculator = new subCalculator(10);
calculator.addition(5).multiplication(2).division(2).subtraction(5).power(2);
console.log(calculator);

// Builder - GoF

export class RequestBuilder {
  private method: 'get' | 'post' | null = null;
  private url: string | null = null;

  setMethod(method: 'get' | 'post'): this {
    this.method = method;
    return this;
  }

  setUrl(url: string): this {
    this.url = url;
    return this;
  }

  send(): void {
    console.log(`Enviando dados via ${this.method} para ${this.url}`);
  }
}

const request = new RequestBuilder();
request.setUrl('http://www.google.com').setMethod('post').send();
