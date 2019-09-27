class Player {
  playTurn(warrior) {
    if (!this.heal) {
      this.heal = warrior.health()
      this.direction = 'backward'
    }
    
    if (warrior.feel(this.direction).isWall())
      this.direction = 'forward'

    // xogun analyzes
    if (! warrior.feel(this.direction).isEmpty()) { // xogun attack and run
      if (warrior.feel(this.direction).getUnit().isEnemy()) {
        warrior.attack(this.direction)
        this.direction = 'backward'
      } else
      warrior.rescue(this.direction)
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
