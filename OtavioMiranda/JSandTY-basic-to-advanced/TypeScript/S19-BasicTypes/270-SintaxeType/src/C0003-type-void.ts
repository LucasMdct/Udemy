function noReturn(...args: string[]): void {
  console.log(args.join(''));
}

const person = {
  name: 'lucas',
  lastName: 'Medeiros',

  showName(): void {
    console.log(this.name + ' ' + this.lastName);
  },
};

noReturn('Lucas', 'Medeiros');

person.showName();

export { person };
