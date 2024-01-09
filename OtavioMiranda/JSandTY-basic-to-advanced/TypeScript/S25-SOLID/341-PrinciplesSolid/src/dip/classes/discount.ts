export abstract class Discount {
  protected discount = 0;

  calculate(price: number): number {
    return price - price * this.discount;
    //throw new Error('Not implemented Error');
  }
}

export class FiftyPercenteDiscount extends Discount {
  protected readonly discount = 0.05;
}

export class TenPercenteDiscount extends Discount {
  protected readonly discount = 0.1;
}

export class NoDiscount extends Discount {}
