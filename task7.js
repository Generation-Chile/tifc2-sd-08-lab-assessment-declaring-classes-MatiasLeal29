export class Player {
  constructor(name, level = 1) {
    this.name = name;
    this.level = level;
    this.inventory = {}; // objeto { item: cantidad }
  }

  addItem(item, quantity = 1) {
    if (this.inventory[item]) {
      this.inventory[item] += quantity;
    } else {
      this.inventory[item] = quantity;
    }
    console.log(`${this.name} received ${quantity} ${item}(s).`);
  }

  removeItem(item, quantity = 1) {
    if (!this.inventory[item]) {
      console.log(`${this.name} does not have ${item}.`);
      return;
    }
    this.inventory[item] -= quantity;
    if (this.inventory[item] <= 0) {
      delete this.inventory[item];
    }
    console.log(`${this.name} used ${quantity} ${item}(s).`);
  }

  showInventory() {
    console.log(`${this.name}'s Inventory:`, this.inventory);
  }
}