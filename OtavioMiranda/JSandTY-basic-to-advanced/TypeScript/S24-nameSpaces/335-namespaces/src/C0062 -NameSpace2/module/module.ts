/* eslint-disable @typescript-eslint/no-namespace */
namespace myNameSpace2 {
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

const PersonOfNameSpace2 = new myNameSpace2.PersonOfNameSpace1('Lucas');
console.log(PersonOfNameSpace2);
console.log(myNameSpace2.nameOfNameSpace1);
console.log(myNameSpace2.OtherNameSpace1.nameOfNameSpace1);

const constOfNamespace = 'const of namespace';
