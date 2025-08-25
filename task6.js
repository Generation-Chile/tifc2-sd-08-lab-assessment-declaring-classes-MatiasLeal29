export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
  }

  info() {
    console.log(`${this.name} has reached Level ${this.level}!`);
  }
}

export class Party {
  constructor() {
    this.members = [];
  }

  addPlayer(player) {
    this.members.push(player);
    console.log(`${player.name} joined the party!`);
  }

  removePlayer(playerName) {
    this.members = this.members.filter(p => p.name !== playerName);
    console.log(`${playerName} left the party.`);
  }

  showParty() {
    console.log("Party members:", this.members.map(p => p.name).join(", "));
  }
}