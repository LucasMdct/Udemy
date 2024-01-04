export abstract class Discount {
  abstract calculate(value: number): number;
}

export class FiftyPercenteDiscount extends Discount {
  private readonly discount = 0.05;

  calculate(price: number): number {
    return price - price * (this.discount * 100);
  }
}

export class TenPercenteDiscount extends Discount {
  private readonly discount = 0.1;

  calculate(price: number): number {
    return price - price * (this.discount * 100);
  }
}

export class NoDiscount extends Discount {
  calculate(price: number): number {
    return price;
  }
}
