function validate(force, acceleration, mass) {
    wynik = mass * acceleration
    if (wynik === force) {
      return true
    } else {
      return false
    }
  }
  
console.log(validate(100,10,10))
console.log(validate(110,10,10))