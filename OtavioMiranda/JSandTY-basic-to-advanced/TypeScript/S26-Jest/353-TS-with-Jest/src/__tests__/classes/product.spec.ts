import { Product } from '../../classes/product';

const createSut = (name: string, price: number): Product => {
  return new Product(name, price);
};

describe('Product', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should return properties name and price', () => {
    const sut = createSut('Camiseta', 49.9);

    expect(sut).toHaveProperty('name', 'Camiseta');
    expect(sut).toHaveProperty('price', 49.9);
    expect(sut.price).toBeCloseTo(49.9);
  });
});
