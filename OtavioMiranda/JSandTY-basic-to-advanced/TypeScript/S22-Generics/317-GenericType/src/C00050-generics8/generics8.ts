// RECORD
const object1: Record<string, string | number> = {
  name: 'Lucas',
  lastname: 'Medeiros',
  age: 30,
};

console.log(object1);

type ProtocolPerson = {
  name?: string;
  lastname?: string;
  age?: number;
};

// Required
type PersonRequired = Required<ProtocolPerson>;

// Partial
type PersonPartial = Partial<PersonRequired>;

// ReadOnly
type PersonReadonly = Readonly<PersonPartial>;

// Pick
type PersonPick = Pick<PersonReadonly, 'name' | 'lastname' | 'age'>;

const object2: PersonPick = {
  name: 'Lucas',
  lastname: 'Medeiros',
  age: 30,
};

console.log(object2);

// Extract and Exclude
type ABC = 'A' | 'B' | 'C';
type CDE = 'C' | 'D' | 'E';

type TypeExclude = Exclude<ABC, CDE>;
type TypeExtract = Extract<ABC, CDE>;

//
type AccountMongo = {
  _id: string;
  name: string;
  age: number;
  lastname: string;
};

// type AccountApi = {
//   id: string;
//   name: string;
//   age: number;
// };

type AccountApi = Pick<AccountMongo, Exclude<keyof AccountMongo, '_id'>> & {
  id: string;
};

const accountMongo: AccountMongo = {
  _id: 'dfgksk23454k35345',
  name: 'lucas',
  age: 30,
  lastname: 'Medeiros',
};

function mapAccount(accountMongo: AccountMongo): AccountApi {
  const { _id, ...accountData } = accountMongo;
  return { ...accountData, id: _id };
}

const accountApi = mapAccount(accountMongo);
console.log('API');
console.log(accountApi);

// Module mode
export default 1;
