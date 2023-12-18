export abstract class Character {
  protected abstract icon: string;

  constructor(
    protected name: string,
    protected attack: number,
    protected life: number,
  ) {}

  onAttack(character: Character): void {
    this.staff();
    this.weapon();
    character.loseLife(this.attack);
  }

  loseLife(strongAttack: number): void {
    this.life -= strongAttack;
    console.log(
      `${this.icon} - ${this.name} now it has ${this.life} of life... `,
    );
  }

  abstract staff(): void;
  abstract weapon(): void;
}
export class Warrior extends Character {
  protected icon = '\u{1F52A}';

  staff(): void {
    console.log('Warrior: ARRRRRGG !!');
  }
  weapon(): void {
    console.log('Warrior: sword strike !');
  }
}
export class Elf extends Character {
  protected icon = '\u{1F9DD}';

  staff(): void {
    console.log('Elf: POW POW !!');
  }
  weapon(): void {
    console.log('Elf: magic blow!');
  }
}
export class Monster extends Character {
  protected icon = '\u{1F525}';

  staff(): void {
    console.log('Monster: SHUA SHUA !!');
  }
  weapon(): void {
    console.log('Monster: killer blow !');
  }
}
export class Alien extends Character {
  protected icon = '\u{1F5FE}';

  staff(): void {
    console.log('Alien: HIA HIA HIA !!');
  }
  weapon(): void {
    console.log('Alien: telekinetic explosion !!');
  }
}

const warriorChar = new Warrior('Lucas', 200, 2000);
const monsterBoss = new Monster('MonsterStrong', 100, 1000);
const elfChar = new Elf('Andressa', 90, 800);
const alienBoss = new Alien('Alien Boss', 200, 3000);

warriorChar.onAttack(monsterBoss);
warriorChar.onAttack(monsterBoss);
warriorChar.onAttack(monsterBoss);
warriorChar.onAttack(monsterBoss);
monsterBoss.onAttack(warriorChar);
monsterBoss.onAttack(warriorChar);
monsterBoss.onAttack(warriorChar);

elfChar.onAttack(alienBoss);
elfChar.onAttack(alienBoss);
elfChar.onAttack(alienBoss);
elfChar.onAttack(alienBoss);
alienBoss.onAttack(elfChar);
