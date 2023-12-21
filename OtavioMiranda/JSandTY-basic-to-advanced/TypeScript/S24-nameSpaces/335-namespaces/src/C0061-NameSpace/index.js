/* eslint-disable @typescript-eslint/no-namespace */
var myNameSpace1;
(function (myNameSpace1) {
    myNameSpace1.nameOfNameSpace1 = 'lucas';
    console.log(11111);
    var PersonOfNameSpace1 = /** @class */ (function () {
        function PersonOfNameSpace1(name) {
            this.name = name;
        }
        return PersonOfNameSpace1;
    }());
    myNameSpace1.PersonOfNameSpace1 = PersonOfNameSpace1;
    var person = new PersonOfNameSpace1('Lucas');
    console.log(person);
    var OtherNameSpace1;
    (function (OtherNameSpace1) {
        OtherNameSpace1.nameOfNameSpace1 = 'Name of other name space';
    })(OtherNameSpace1 = myNameSpace1.OtherNameSpace1 || (myNameSpace1.OtherNameSpace1 = {}));
})(myNameSpace1 || (myNameSpace1 = {}));
var PersonOfNameSpace1 = new myNameSpace1.PersonOfNameSpace1('Lucas');
console.log(PersonOfNameSpace1);
console.log(myNameSpace1.nameOfNameSpace1);
console.log(myNameSpace1.OtherNameSpace1.nameOfNameSpace1);
/* eslint-disable @typescript-eslint/triple-slash-reference */
/// <reference path="module/module.ts" />
console.log(myNameSpace1.nameOfNameSpace1);
//ReferenceError: myNameSpace1 is not defined
// error of runtimer
