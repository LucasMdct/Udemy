function joinObject<T, U>(obj1: T, obj2: U): T & U {
  return { ...obj1, ...obj2 };
}

const obj1 = { key1: 'key1' };

const obj2 = { key2: 'key2' };
const join = joinObject(obj1, obj2);
console.log(join);

// with object asign
function joinObject2<O1, O2>(obj1: O1, obj2: O2): O1 & O2 {
  return Object.assign({}, obj1, obj2);
}

const join2 = joinObject2(obj1, obj2);
console.log(join2);
