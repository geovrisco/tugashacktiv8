/*
  PALINDROME CHANGER

  Palindrome changer adalah sebuah fungsi untuk mengubah semua isi
  array of numbers menjadi angka palindrome. Palindrome adalah sebuah kata atau angka
  yang sama nilainya ketika dibalik.

  EXAMPLE:
  console.log(palindromeChanger([102, 12, 47]))
  // [ 111, 22, 55]
*/
function palindromeChanger(numbers) {
  let strNumber = numbers;
  strNumber.map(String);
  let arrBaru = []

  function palindrome(str) {
    var a = str.toString()
    var reversed = a.split("").reverse().join("");
    if (reversed === a) return true;
    return false;
  }
  for (let i = 0; i < numbers.length; i++) {
    let angka = numbers[i]
    if (palindrome(angka) == true) {
      arrBaru.push(angka)
    }
    if (palindrome(angka) !== true) {
      var param = true
      do {
        param = true
        if (palindrome(angka) !== true) {
          angka += 1
          
        }
        if (palindrome(angka) == true) {
          param = false
        }
      }
      while (param)
      arrBaru.push(angka)
    };
  }
  return arrBaru
}
console.log(palindromeChanger([117, 9, 20, 30, 42]))
// [ 121, 9, 22, 33, 44 ]
