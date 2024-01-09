import { OrderStatus } from './interfaces/order-status';
import { ShoppingCart } from './shopping-cart';
import { CustomerOrder } from './interfaces/customer-protocol';
import { PersistencyProtocol } from './interfaces/persistency-protocol';
import { MessagingProtocol } from './interfaces/messaging-protocol';

export class Order {
  private _orderStatus: OrderStatus = 'open';

  constructor(
    private readonly cart: ShoppingCart,
    private readonly messaging: MessagingProtocol,
    private readonly persistency: PersistencyProtocol,
    private readonly customer: CustomerOrder,
  ) {}

  get orderStatus(): OrderStatus {
    return this._orderStatus;
  }

  checkout(): void {
    if (this.cart.isEmpty()) {
      console.log('Your shopping cart is empty');
      return;
    }

    this._orderStatus = 'closed';

    this.messaging.sendMessage(
      `Your order with total of R$${this.cart.totalDiscount()} has been received`,
    );

    this.persistency.saveOrder();
    this.cart.clear();
    console.log(
      'you customer is',
      this.customer.getIDN(),
      this.customer.getName(),
    );
  }
}
