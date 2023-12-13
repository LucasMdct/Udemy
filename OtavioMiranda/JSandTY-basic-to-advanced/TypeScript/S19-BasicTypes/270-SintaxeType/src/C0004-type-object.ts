// First type
const objectA: Record<string, unknown> = {
  keyA: 'Value A',
  keyB: 'Value B',
};

objectA.keyA = 'Other Value';
objectA.keyC = 'New key';

// Second type
const objectB: {
  keyE: string;
  keyD: string;
  keyF?: string;
  [key: string]: unknown;
} = {
  keyE: 'Value E',
  keyD: 'Value D',
};

objectB.keyE = 'Other Value';
objectB.keyF = 'New Value';

objectB.keyG = 'New Key and Value';

// Third type
const objectH: {
  readonly keyI: string;
  keyJ: string;
} = {
  keyI: 'Value I',
  keyJ: 'Value J',
};

//objectH.keyI = 'New Value';
// I cannot change the value of this key because the readonly property is read-only
objectH.keyJ = 'New value';

// view in terminal
console.log(objectA, objectB, objectH);
