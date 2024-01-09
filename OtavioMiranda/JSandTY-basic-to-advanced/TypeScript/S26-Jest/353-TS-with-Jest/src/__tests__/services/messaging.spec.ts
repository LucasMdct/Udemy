import { Messaging } from '../../services/messaging';

const createSut = () => {
  return new Messaging();
};
describe('Messaging', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });
  it('should return undefined', () => {
    // system under test
    const sut = createSut();

    expect(sut.sendMessage('teste')).toBeUndefined();
  });

  it('should call console.log with "Message sent" and msg', () => {
    // system under test
    const sut = createSut();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledWith('Message sent: ', 'teste');
  });
  it('should call console.log once', () => {
    // system under test
    const sut = new Messaging();

    const consoleSpy = jest.spyOn(console, 'log');
    sut.sendMessage('teste');
    expect(consoleSpy).toHaveBeenCalledTimes(1);
  });
});
