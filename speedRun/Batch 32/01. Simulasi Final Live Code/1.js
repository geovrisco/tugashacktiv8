/*
=======================
INVENTARIS KERAN MASJID
=======================
[INSTRUCTION]
Terdapat function inventarisKeran yang menerima 1 parameter berupa string ,
string input menggambar kondisi keran masjid
keran yang berjalan dengan baik dilambangkan dengan symbol ^,
keran yang rusak dilambangkan dengan ?,
symbol X melambangkan dinding pemisah keran wudhu
[EXAMPLES]
input: 'XX^XX^XX^XX?XX^XX'
output :
'terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)'
input: 'XX?XX?XX^XX'
output:
'terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)'
input : 'XX^XX^XX'
output :
'Semua keran berjalan dengan baik'
input : 'XX?XX?XX'
output :
'Semua keran rusak'
[RULES]
- WAJIB MENGGUNAKAN PSEUDOCODE !
- dilarang menggunakan splice, slice, split, substring, substr
// YOUR PSEUDOCODE/ALGORITHM HERE
*/

function inventarisKeran(str) {
  // Write your code here
  let keran = {
    benar: [],
    rusak: []
  };
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    switch (str[i]) {
      case "^":
        count++;
        keran.benar.push(count);
        break;

      case "?":
        count++;
        keran.rusak.push(count);
        break;

      default:
        break;
    }
  }

  if (keran.benar.length == 0) {
    return "Semua keran rusak";
  } else if (keran.rusak.length == 0) {
    return "Semua keran berjalan dengan baik";
  } else if (keran.benar.length > 0 && keran.benar.length > 0) {
    return (
      "terdapat 4 keran yang berjalan nomor (" +
      keran.benar.concat() +
      ") , dan 1 keran rusak nomor (" +
      keran.rusak.concat() +
      ")"
    );
  }
}

console.log(inventarisKeran("XX^XX^XX^XX?XX^XX"));
// terdapat 4 keran yang berjalan nomor(1, 2, 3, 5) , dan 1 keran rusak nomor(4)
console.log(inventarisKeran("XX?XX?XX^XX"));
// terdapat 1 keran yang berjalan nomor(3), dan 2 keran rusak nomor(1,2)
console.log(inventarisKeran("XX^XX^XX"));
// Semua keran berjalan dengan baik
console.log(inventarisKeran("XX?XX?XX"));
// Semua keran rusak
