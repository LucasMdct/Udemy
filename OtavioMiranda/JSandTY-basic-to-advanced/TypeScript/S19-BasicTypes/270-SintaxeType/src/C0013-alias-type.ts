type agePerson = number;
type PersonAlias = {
  name: string;
  age: agePerson;
  salary: number;
  preferenceColor?: string;
};

type colorRGB = 'Red' | 'Green' | 'Blue';
type colorCMYK = 'Cyan' | 'Magenta' | 'Yellow' | 'Black';
type preferenceColor = colorRGB | colorCMYK;

const person: PersonAlias = {
  name: 'Lucas',
  age: 30,
  salary: 200_000,
};

export function setPreferenceColor(
  person: PersonAlias,
  color: preferenceColor,
): PersonAlias {
  return { ...person, preferenceColor: color };
}

console.log(setPreferenceColor(person, 'Black'));
