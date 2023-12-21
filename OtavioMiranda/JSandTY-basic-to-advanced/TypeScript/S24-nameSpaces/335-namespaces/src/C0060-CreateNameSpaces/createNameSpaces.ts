/* eslint-disable @typescript-eslint/no-namespace */
namespace myNameSpace {
 export const nameOfNameSpace = 'lucas';
    console.log(11111);

    export class PersonOfNameSpace {
      constructor(
        public name: string,
      ) {

      }
    }


    const person = new PersonOfNameSpace('Lucas');
    console.log(person);

    export namespace OtherNameSpace {
      export const nameOfNameSpace = 'Name of other name space';
    }


}

const PersonOfNameSpace = new myNameSpace.PersonOfNameSpace('Lucas');
console.log(PersonOfNameSpace);
console.log(myNameSpace.nameOfNameSpace);
console.log(myNameSpace.OtherNameSpace.nameOfNameSpace);
