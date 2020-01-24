function attack (damage) {
  // Code disini
  return damageCalculation
}

function damageCalculation (numberOfAttacks, damagePerAttack) {
  // Code disini
  return numberOfAttacks * (damagePerAttack-2)
}

// TEST CASE
console.log(damageCalculation(9, 25)); // 207

console.log(damageCalculation(10, 4)); // 20

console.log(damageCalculation(5, 20)); // 90