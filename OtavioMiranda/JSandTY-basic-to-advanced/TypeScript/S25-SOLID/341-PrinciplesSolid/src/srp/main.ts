/*
OPEN/ CLOSED PRINCIPLE
ENTITIES MUST BE OPEN FOR EXTENSION, BUT
CLOSED FOR MODIFICATION
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercenteDiscount } from './classes/discount';

//const fiftyPercenteDiscount = new FiftyPercenteDiscount();
//const teenPercenteDiscount = new TenPercenteDiscount();
const teenDiscount = new TenPercenteDiscount();
const shpping = new ShoppingCart(teenDiscount);
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
console.log(shpping.totalDiscount());
console.log(order.orderStatus);
order.checkout();
console.log(order.orderStatus);
