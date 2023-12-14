type HaveName = { name: string };
type HaveLastName = { lastName: string };
type HaveAge = { age: number };

//type PersonType = HaveName | HaveLastName | HaveAge;
type PersonType = HaveName & HaveLastName & HaveAge; // AND

type AB = 'A' | 'B';
type AC = 'A' | 'C';
type AD = 'D' | 'A';
type Intersection = AB & AC & AD;  // eslint-disable-line

const personType: PersonType = {
  name: 'LUCAS',
  lastName: 'Medeiros',
  age: 30,
};

console.log(personType);

// module mode
export { personType };
