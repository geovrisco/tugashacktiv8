/*
  PARSE NUMBER
  Parse Number adalah sebuah fungsi untuk memecah atau menguraikan suatu angka. Fungsi akan
  menerima parameter berupa angka dan keluaran berupa string uraian angka.

  EXAMPLE
  INPUT: 4321
  OUTPUT: 4000+300+20+1

  RULES:
  1. Wajib menggunakan rekursif!
  2. Tidak boleh menambahkan parameter dan function baru
*/

function parseNumber(equation) {
  // Write your code here
  let str = String(equation);
  if (str.length == 1) {
    return equation;
  } else {
    if (str[1] == 0) {
      return str[0].concat(str[1]);
    }
    return (
      str[0].concat("0".repeat(str.length - 1)) +
      "+" +
      parseNumber(str.slice(1))
    );
  }
}

console.log(parseNumber(3333)); // 3000+300+30+3
console.log(parseNumber(90)); // 90
console.log(parseNumber(2333)); // 2000+300+30+3
