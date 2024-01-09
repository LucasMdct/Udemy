import { Persistency } from '../../services/persistency';

describe('Persistency', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return undefined', () => {
    // system under test
    const sut = new Persistency();

    expect(sut.saveOrder()).toBeUndefined();
  });
  it('should call console.log once', () => {
    // system under test
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });

  it('should call console.log with Order placed successfully', () => {
    // system under test
    const sut = new Persistency();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.saveOrder();
    expect(consoleSpy).toHaveBeenCalledWith('Order placed successfully');
  });
});
