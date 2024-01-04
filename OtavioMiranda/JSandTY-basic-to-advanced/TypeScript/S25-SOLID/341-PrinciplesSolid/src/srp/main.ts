import { Messaging } from './messaging';
import { Order } from './order';
import { Persistency } from './persistency';
import { Product } from './product';
import { ShoppingCart } from './shopping-cart';

const shpping = new ShoppingCart();
const messaging = new Messaging();
const persistency = new Persistency();
const order = new Order(shpping, messaging, persistency);

shpping.addItem(new Product('SILVER', 2000));
shpping.addItem(new Product('RUBY', 2000));
shpping.addItem(new Product('GOLD BAR', 2000));

shpping.addItem({ name: 'BRONZE', price: 20.34 });
shpping.addItem({ name: 'DIAMONDS', price: 2220.54 });
shpping.addItem({ name: 'GOLDS', price: 220.9 });

//Index signature on type 'readonly CartItem[]' is read-only
//shpping.items[0] = { name: 'SILVER', price: 200 };

console.log(shpping.items);
console.log(shpping.total());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
