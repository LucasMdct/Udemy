declare namespace _ {
  declare interface LoDashStatic {
    mul(array: number[]): number;
  }
}

declare namespace NodeJS {
  interface Global {
    MYGLOBALNAME: string;
  }
}
