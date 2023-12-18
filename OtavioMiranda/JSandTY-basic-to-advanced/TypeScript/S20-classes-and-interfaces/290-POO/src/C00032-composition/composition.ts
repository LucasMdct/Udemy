export class Car {
  private readonly engine = new Engine();

  turnOn(): void {
    this.engine.turnOn();
  }
  speedUp(): void {
    this.engine.speedUp();
  }
  toStop(): void {
    this.engine.toStop();
  }
  turnOff(): void {
    this.engine.turnOff();
  }
}

export class Engine {
  turnOn(): void {
    console.log('engine was started');
  }
  speedUp(): void {
    console.log('engine is accelerating ');
  }
  toStop(): void {
    console.log('engine is stopping');
  }
  turnOff(): void {
    console.log('the engine was turned off');
  }
}

const carOld = new Car();

carOld.turnOn();
carOld.speedUp();
carOld.toStop();
carOld.turnOff();
