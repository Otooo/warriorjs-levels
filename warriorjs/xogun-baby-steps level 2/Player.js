class Player {
  playTurn(warrior) {
    // xogun analyzes
    if (! warrior.feel().isEmpty()) // xogun attack
      warrior.attack()
    else // xogun walks
      warrior.walk()
  }
}
