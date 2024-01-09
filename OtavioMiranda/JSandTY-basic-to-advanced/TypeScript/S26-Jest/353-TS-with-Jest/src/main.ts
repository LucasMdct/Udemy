/*
modulos de alto nivel nao devem depender de modulos de baixo nivel ambos devem depender de abstracoes.
dependa de abstracoes , nao de implementacoes.
abstracoes nao devem depender de detalhes. detalhes devem depender
de abstracoes.

classes de baixo nivel sao classes que executam tarefas
( os detalhes )
classes de alto nivel sao classes que gerenciam as classes de baixo nivel.
*/

import { Messaging } from './services/messaging';
import { Order } from './classes/order';
import { Persistency } from './services/persistency';
import { Product } from './classes/product';
import { ShoppingCart } from './classes/shopping-cart';
import { TenPercenteDiscount } from './classes/discount';
import { EnterpriseCustomer, IndividualCustomer } from './classes/customer';
import { MessagingProtocol } from './classes/interfaces/messaging-protocol';
//const fiftyPercenteDiscount = new FiftyPercenteDiscount();
//const teenPercenteDiscount = new TenPercenteDiscount();
const teenDiscount = new TenPercenteDiscount();
const shpping = new ShoppingCart(teenDiscount);
const persistency = new Persistency();
const individualCustomer = new IndividualCustomer(
  'Lucas',
  'Medeiros',
  '023.213.123-23',
);
const enterpiseCustomer = new EnterpriseCustomer(
  'LM CALCADOS',
  'Medeiros e cia ltda',
  '023.223.234/0001/-32',
);

class MessagingMock implements MessagingProtocol {
  sendMessage(): void {
    console.log('SEND MESSAGE WITH MOCK');
  }
}

const messageMock = new MessagingMock();

const order = new Order(shpping, messageMock, persistency, enterpiseCustomer);
console.log(individualCustomer);

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
