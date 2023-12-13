//ENUM TYPES
enum Color {
  RED, // 0
  BLUE, // 1
  YELLOW, // 2
}

enum Color1 {
  RED = 10, // 10
  BLUE = 100, // 100
  AMARELO = 200, // 200
}

enum Color1 {
  VIOLET = 'VIOLET',
  VERDE = 201,
  ROSA,
}
console.log(Color);
console.log(Color.RED);
console.log(Color[1]);

console.log(Color1);
console.log(Color1[10]);
console.log(Color1.VIOLET);

function chooseTheColor(color: Color1): void {
  console.log(Color1[color]);
}

chooseTheColor(Color1.VIOLET);
