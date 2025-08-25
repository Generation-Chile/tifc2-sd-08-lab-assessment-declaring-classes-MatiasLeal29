export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.exp = 0;          // experiencia acumulada
    this.expToLevel = 100; // puntos necesarios para subir de nivel
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }

  levelUp() {
    this.level += 1;
    this.exp = 0; // reset experiencia
    this.info();
  }

  gainExp(points) {
    this.exp += points;
    console.log(`${this.name} gained ${points} EXP (${this.exp}/${this.expToLevel})`);

    if (this.exp >= this.expToLevel) {
      this.levelUp();
    }
  }
}