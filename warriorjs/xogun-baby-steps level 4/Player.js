class Player {
  playTurn(warrior) {
    if (! this.heal)
      this.heal = warrior.health()
    this.direction = 'forward'
    
    // xogun analyzes
    if (! warrior.feel(this.direction).isEmpty()) { // xogun attack and run
      warrior.attack(this.direction)
    } else // xogun walks or heal
      if (warrior.maxHealth() !== warrior.health() &&
      (this.heal === warrior.health() ||
      this.heal === warrior.health()-warrior.maxHealth()*0.1)) {
        warrior.rest()
      } else {
        warrior.walk(this.direction)
      }
      
    this.heal = warrior.health()
  }
}
