export class Writer {
  private _tool: Tool | null = null;

  constructor(private _name: string) {}

  get name(): string {
    return this._name;
  }

  set tool(tool: Tool | null) {
    this._tool = tool;
  }

  get tool(): Tool | null {
    return this._tool;
  }

  Write(): void {
    if (this.tool === null) {
      console.log('nao posso escrever');
      return;
    }
    this.tool.Write();
  }
}

export abstract class Tool {
  constructor(private _name: string) {}

  abstract Write(): void;

  get name(): string {
    return this._name;
  }
}

export class Pen extends Tool {
  Write(): void {
    console.log(`${this.name} is writing...`);
  }
}

export class Machine extends Tool {
  Write(): void {
    console.log(`${this.name} is typing...`);
  }
}

const scribe = new Writer('lucas');

const pen = new Pen('bic');

const typewriter = new Machine('Braille Laramara');

console.log(scribe.name);
console.log(pen.name);
console.log(typewriter.name);

scribe.Write();
