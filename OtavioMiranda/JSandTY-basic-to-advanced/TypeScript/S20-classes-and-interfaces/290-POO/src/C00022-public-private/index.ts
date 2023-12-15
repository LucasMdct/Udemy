export class Company {
  public readonly name: string; // public not necessary
  private readonly collaborators: Collaborator[] = [];
  protected readonly cnpj: string;

  constructor(name: string, cnpj: string) {
    this.name = name;
    this.cnpj = cnpj;
  }

  addCollaborator(collaborator: Collaborator): void {
    this.collaborators.push(collaborator);
  }

  showCollaborator(): void {
    for (const collaborator of this.collaborators) {
      console.log(collaborator);
    }
  }
  // ONLY EXAMPLE
  // getName(): string {
  //   return this.name;
  // }
}
/* THIS CODE BELOW IS THE SAME AS THE ABOVE, JUST REWRITTEN IN A BETTER WAY */
export class Collaborator {
  constructor(
    public readonly name: string,
    public readonly lastname: string,
  ) {}
}

const companyOne = new Company('DB1 GROUP', '02.425.595/0001-54');
const collaboratorOne = new Collaborator('Lucas', 'Medeiros');
const collaboratorTwo = new Collaborator('Douglas', 'Nassif');
const collaboratorThree = new Collaborator('Cleber', 'Ganassini');
companyOne.addCollaborator(collaboratorOne);
companyOne.addCollaborator(collaboratorTwo);
companyOne.addCollaborator(collaboratorThree);
companyOne.addCollaborator({
  name: 'Raquel',
  lastname: 'Medeiros',
});

console.log(companyOne);
//companyOne.name = 'facebook'; // READONLY
//console.log(companyOne.name);
