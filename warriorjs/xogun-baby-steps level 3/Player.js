class Player {
  playTurn(warrior) {
    // xogun analyzes
    if (! warrior.feel().isEmpty()) // xogun attack
      warrior.attack('forward')
    else // xogun walks
      if (warrior.maxHealth() != warrior.health()) 
        warrior.rest()
      else
        warrior.walk('forward')
  }
}
