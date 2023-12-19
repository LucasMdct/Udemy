// Optional Chaining and Null Coalescence Operator

type FileDocument = {
  title: string;
  text: string;
  date?: Date;
};

const file: FileDocument = {
  title: 'TITLE',
  text: 'text',
  //date: new Date(),
};

console.log(file.date?.toDateString() ?? 'Don`t exist.');
console.log(undefined ?? 'Don`t exist.');
console.log(null ?? 'Don`t exist.');
console.log(false ?? 'Don`t exist.');
console.log(0 ?? 'Don`t exist.');
