interface PersonProtocol<T = string, U = number> {
  name: T;
  lastname: T;
  age: U;
}

type PersonProtocol2<T = string, U = number> = {
  name: T;
  lastname: T;
  age: U;
};

const student: PersonProtocol<string, number> = {
  name: 'Lucas',
  lastname: 'Medeiros',
  age: 30,
};

const student2: PersonProtocol2<number, number> = {
  name: 1234,
  lastname: 567,
  age: 30,
};

const student3: PersonProtocol2 = {
  name: 'Lucas',
  lastname: 'Medeiros',
  age: 30,
};

console.log(student, student2, student3);
