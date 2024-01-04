type CartItem = { name: string; price: number };
type OrderStatus = 'open' | 'closed';

export class ShoppingCartLegacy {
  private readonly _items: CartItem[] = [];
  private _orderStatus: OrderStatus = 'open';

  addItem(item: CartItem): void {
    this._items.push(item);
  }

  removeItem(index: number): void {
    this._items.splice(index, 1);
  }

  get items(): Readonly<CartItem[]> {
    return this._items;
  }

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  total(): number {
    return +this._items
      .reduce((total, next) => total + next.price, 0)
      .toFixed(2);
  }

  checkout(): void {
    if (this.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }
    this._orderStatus = 'closed';
    this.sendMessage(
      `Your order with total of R$${this.total()} has been received`,
    );
    this.saveOrder();
    this.clear();
  }

  isEmpty(): boolean {
    return this._items.length === 0;
  }

  sendMessage(msg: string): void {
    console.log('Message sent: ', msg);
  }

  saveOrder(): void {
    console.log('Order placed successfully');
  }

  clear(): void {
    console.log('Your cart has been successfully cleaned');
    this._items.length = 0;
  }
}

const shpping = new ShoppingCartLegacy();
shpping.addItem({ name: 'BRONZE', price: 20.34 });
shpping.addItem({ name: 'DIAMONDS', price: 2220.54 });
shpping.addItem({ name: 'GOLDS', price: 220.9 });

//Index signature on type 'readonly CartItem[]' is read-only
//shpping.items[0] = { name: 'SILVER', price: 200 };

console.log(shpping.items);
console.log(shpping.total());
console.log(shpping.orderStatus);
shpping.checkout();
console.log(shpping.orderStatus);
