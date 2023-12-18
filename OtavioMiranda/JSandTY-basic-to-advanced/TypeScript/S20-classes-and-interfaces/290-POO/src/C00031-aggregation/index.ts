export class CartBuy {
  private readonly products: Product[] = [];

  insertProducts(...products: Product[]) {
    for (const product of products) {
      this.products.push(product);
    }
  }

  quantitatyProducts(): number {
    return this.products.length;
  }

  totalValue(): number {
    return this.products.reduce((sum, product) => sum + product.price, 0);
  }
}

export class Product {
  constructor(
    public name: string,
    public price: number,
  ) {}
}

const product1 = new Product('Short', 59.9);
const product2 = new Product('Sowrd', 2500.0);
const product3 = new Product('Hammer', 2500.0);

const cartbuy = new CartBuy();

cartbuy.insertProducts(product2, product3, product1);
console.log(cartbuy.totalValue());
console.log(cartbuy.quantitatyProducts());
