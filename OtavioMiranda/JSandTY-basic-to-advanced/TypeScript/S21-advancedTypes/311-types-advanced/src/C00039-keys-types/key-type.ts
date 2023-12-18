type Vehicle = {
  marca: string;
  ano: number;
};

type Car = {
  brand: Vehicle['marca'];
  year: Vehicle['ano'];
  name: string;
};

const car: Car = {
  brand: 'Ford',
  year: 2021,
  name: 'Sedan',
};

console.log(car);
