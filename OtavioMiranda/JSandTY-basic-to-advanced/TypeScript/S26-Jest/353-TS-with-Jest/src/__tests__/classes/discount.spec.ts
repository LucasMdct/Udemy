import {
  Discount,
  FiftyPercenteDiscount,
  NoDiscount,
  TenPercenteDiscount,
} from '../../classes/discount';

const createSut = (className: new () => Discount): Discount => {
  return new className();
};

describe('Discount', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should have no discount', () => {
    const sut = createSut(NoDiscount);

    expect(sut.calculate(10.99)).toBe(10.99);
    expect(sut.calculate(10.99)).toBeCloseTo(10.99);
  });

  it('should apply 50% discount on price', () => {
    const sut = createSut(FiftyPercenteDiscount);

    expect(sut.calculate(150.5)).toBe(75.25);
    expect(sut.calculate(123)).toBeCloseTo(61.5);
  });

  it('should apply 10% discount on price', () => {
    const sut = createSut(TenPercenteDiscount);

    expect(sut.calculate(10)).toBe(9);
    expect(sut.calculate(10.0)).toBeCloseTo(9);
  });
});
