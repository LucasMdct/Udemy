/* eslint-disable @typescript-eslint/no-namespace */
namespace myNameSpace1 {
  export const nameOfNameSpace1 = 'lucas';
  console.log(11111);

  export class PersonOfNameSpace1 {
    constructor(public name: string) {}
  }

  const person = new PersonOfNameSpace1('Lucas');
  console.log(person);

  export namespace OtherNameSpace1 {
    export const nameOfNameSpace1 = 'Name of other name space';
  }
}

const PersonOfNameSpace1 = new myNameSpace1.PersonOfNameSpace1('Lucas');
console.log(PersonOfNameSpace1);
console.log(myNameSpace1.nameOfNameSpace1);
console.log(myNameSpace1.OtherNameSpace1.nameOfNameSpace1);
