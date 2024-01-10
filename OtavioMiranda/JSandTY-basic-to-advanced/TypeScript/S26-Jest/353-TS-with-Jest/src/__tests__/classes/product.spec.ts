import { Product } from '../../classes/product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return undefined', () => {
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 49.9);
    expect(sut.price).toBeCloseTo(49.9);
  });
});
