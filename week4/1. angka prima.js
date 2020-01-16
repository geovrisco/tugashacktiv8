function angkaPrima(angka) {
  // you can only write your code here!
  if (angka==3 || angka==2){
      return true
  }
  for (let i = 3; i<=angka;i++){
      if (angka%i!==0){
          return true
      }
      else {
          return false
      }
  }
}

// TEST CASES
console.log(angkaPrima(3)); // true
console.log(angkaPrima(7)); // true
console.log(angkaPrima(6)); // false
console.log(angkaPrima(23)); // true
console.log(angkaPrima(33)); // false