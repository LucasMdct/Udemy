// type of constructor class
type Constructor = new (...args: any[]) => any;

//Classes
function decoratorClass(constructor: Constructor): any {
  // Called in create of class
  console.log('CLASS');
  console.log(constructor);
  console.log('###');
}

// method of instance ( noraml )

function decoratorMethod(
  protoTypeClass: any,
  nameOfMethod: string,
  descriptyonOfProperty: PropertyDescriptor,
): any {
  // called in create of method ( don`t need called of method)
  console.log('Method normal');
  console.log(protoTypeClass);
  console.log(nameOfMethod);
  console.log(descriptyonOfProperty);
  console.log('###');
}

function decoratorOfMethodEstatic(
  classConstructor: Constructor,
  nameOfMethod: string,
  descriptyonOfProperty: PropertyDescriptor,
): any {
  // called in create of method ( don`t need called of method)
  console.log('Method estatic');
  console.log(classConstructor);
  console.log(nameOfMethod);
  console.log(descriptyonOfProperty);
  console.log('###');
}

function decoratorOfParamOfMethod(
  protoTypeClass: any,
  nameOfMethod: string,
  indexOfProperty: number,
): any {
  // called in create of method
  console.log('PARAM OF METHOD');
  console.log(protoTypeClass);
  console.log(nameOfMethod);
  console.log(indexOfProperty);
  console.log('###');
}

// param of method estatic
function decoratorOfParamMethodEstatic(
  classConstructor: Constructor,
  nameOfMethod: string,
  indexOfProperty: number,
): any {
  console.log('Param Of Method Estatic');
  console.log(classConstructor);
  console.log(nameOfMethod);
  console.log(indexOfProperty);
  console.log('###');
}

// property
function decoratorOfProperty(protoTypeClass: any, nameOfProperty: string): any {
  // called in create of property
  console.log('Decorator of Property');
  console.log(protoTypeClass);
  console.log(nameOfProperty);
  console.log('###');
}

// property estatic
function decoratorOfPropertyEstatic(
  classConstructor: Constructor,
  nameOfProperty: string,
): any {
  // called in create of property estatic
  console.log('Decorator of property estatic');
  console.log(classConstructor);
  console.log(nameOfProperty);
  console.log('###');
}

//GETTER AND SETTER
function decoratorOfGetAndSetNormal(
  protoTypeClass: any,
  nameOfProperty: string,
  PropertyDescriptor: PropertyDescriptor,
): any {
  // called in create of method
  // can be applied in getter or setter - not in bouth
  console.log('GETTER/SETTER normal');
  console.log(protoTypeClass);
  console.log(nameOfProperty);
  console.log(PropertyDescriptor);
  console.log('###');
}

// getter/setter estatic
function decoratorOfGetAndSetEstatic(
  protoTypeClass: any,
  nameOfProperty: string,
  PropertyDescriptor: PropertyDescriptor,
): any {
  // called in create of method
  // can be applied in getter or setter - not in bouth
  console.log('GETTER/SETTER normal');
  console.log(protoTypeClass);
  console.log(nameOfProperty);
  console.log(PropertyDescriptor);
  console.log('###');
}

//The Class and used of decorators
@decoratorClass
export class Person1 {
  @decoratorOfProperty
  name: string;
  lastname: string;
  age: number;

  @decoratorOfPropertyEstatic
  static propertyEstatic = '';

  constructor(name: string, lastname: string, age: number) {
    this.name = name;
    this.lastname = lastname;
    this.age = age;
  }

  @decoratorMethod
  method(@decoratorOfParamOfMethod msg: string): string {
    return `${this.name} ${this.lastname}: ${msg}`;
  }

  @decoratorOfMethodEstatic
  static methodEstatic(@decoratorOfParamMethodEstatic msg: string): string {
    return Person1.propertyEstatic + msg;
  }

  @decoratorOfGetAndSetNormal
  get nameCompleted(): string {
    return this.name + ' ' + this.lastname;
  }

  set nameCompleted(value: string) {
    const words = value.split(/\s+/g);
    const primaryName = words.shift();
    if (!primaryName) return;
    this.name = primaryName;
    this.lastname = words.join(' ');
  }

  @decoratorOfGetAndSetEstatic
  static get staticPropertyGetterSetter(): string {
    return Person1.propertyEstatic;
  }

  static set staticPropertyGetterSetter(value: string) {
    Person1.propertyEstatic = value;
  }
}

// utilized class
const newHumam = new Person1('Lucas', 'Medeiros', 24);

const method = newHumam.method('Hello Typesript !');
console.log(method);
