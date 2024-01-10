/* eslint-disable @typescript-eslint/no-unused-vars */
import { CartItem } from '../../classes/interfaces/cart-item';
import { CustomerOrder } from '../../classes/interfaces/customer-protocol';
import { MessagingProtocol } from '../../classes/interfaces/messaging-protocol';
import { PersistencyProtocol } from '../../classes/interfaces/persistency-protocol';
import { ShoppingCartProtocol } from '../../classes/interfaces/shopping-cart-protocol';
import { Order } from '../../classes/order';

class ShoppingCartMock implements ShoppingCartProtocol {
  get items(): Readonly<CartItem[]> {
    return [];
  }
  addItem(item: CartItem): void {}
  removeItem(index: number): void {}
  total(): number {
    return 1;
  }
  totalWithDicount(): number {
    return 2;
  }
  isEmpty(): boolean {
    return false;
  }
  clear(): void {}
}

class MessagingMock implements MessagingProtocol {
  sendMessage() {}
}

class PersistencyMock implements PersistencyProtocol {
  saveOrder() {}
}

class CustomerMock implements CustomerOrder {
  getName(): string {
    return '';
  }

  getIDN(): string {
    return '';
  }
}

const makeSut = () => {
  const shoppingCart = new ShoppingCartMock();
  const msgMock = new MessagingMock();
  const persisMock = new PersistencyMock();
  const tumerMock = new CustomerMock();

  const sut = new Order(shoppingCart, msgMock, persisMock, tumerMock);

  return {
    sut,
    shoppingCart,
    msgMock,
    persisMock,
  };
};

afterEach(() => {
  jest.clearAllMocks();
});

describe('Order', () => {
  it('should checkout if cart is empty', () => {
    const { sut, shoppingCart } = makeSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCart, 'isEmpty')
      .mockReturnValueOnce(true);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('open');
  });
  it('should not checkout if cart not empty', () => {
    const { sut, shoppingCart } = makeSut();

    const shoppingCartMockSpy = jest
      .spyOn(shoppingCart, 'isEmpty')
      .mockReturnValueOnce(false);
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
    expect(sut.orderStatus).toBe('closed');
  });
  it('should send an email to customer', () => {
    const { sut, msgMock } = makeSut();

    const messageCartMockSpy = jest.spyOn(msgMock, 'sendMessage');
    sut.checkout();
    expect(messageCartMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should save order', () => {
    const { sut, persisMock } = makeSut();

    const persisCartMockSpy = jest.spyOn(persisMock, 'saveOrder');
    sut.checkout();
    expect(persisCartMockSpy).toHaveBeenCalledTimes(1);
  });

  it('should clear cart', () => {
    const { sut, shoppingCart } = makeSut();

    const shoppingCartMockSpy = jest.spyOn(shoppingCart, 'clear');
    sut.checkout();
    expect(shoppingCartMockSpy).toHaveBeenCalledTimes(1);
  });
});
