/**
 * =================
 * Powerbank Optimal
 * =================
 * 
 * [Description]
 * Sebuah powerbank memiliki ukuran, daya simpan, dan harga
 * yang berbeda-beda dengan powerbank lainnya. 
 * 
 * Daya simpan powerbank adalah berapa mAh listrik yang disimpan,
 * contohnya: 5000 mAh, 10000 mAh, 3000 mAh.
 * 
 * Ukuran powerbank adalah (lebar x panjang x tebal) dari powerbank tersebut.
 * Untuk kali ini, asumsikan ukurannya ada dalam cm, jadi volume nya akan jadi cm3.
 * 
 * [Instructions]
 * Buatlah function untuk mengecek:
 * 1 - rasio daya simpan dibanding ukuran (volume) sebuah powerbank.
 *     (berapa mAh/cm3)
 * 
 * 2 - rasio harga dibanding daya simpan sebuah powerbank.
 *     (berapa idr/mAh)
 * Bulatkan kedua rasio tersebut ke 1 desimal poin terdekat.
 * 
 * Buat objek baru dengan merk, dua rasio tersebut, dan Grade.
 * 
 * Jika rasio daya simpan / ukuran diatas 100 mAh/cm3,
 * berikan Grade "A" ke powerbank tersebut.
 * Jika rasio daya simpan / ukuran diatas 50 mAh/cm3,
 * berikan Grade "B" ke powerbank tersebut.
 * Jika rasio daya simpan / ukuran diatas 0 mAh/cm3
 * berikan Grade "C" ke powerbank tersebut.
 * Jika rasio tidak ada , jangan berikan grade ke powerbank tersebut.
 * 
 * [Rules]
 * 1. Dilarang menggunakan built-in function: split, slice, splice, join, reverse
 */

function checkRatio(powerbank) {
    // Write your code here
    
}

var pow1 = {
  lebar: '5 cm',
  panjang: '10 cm',
  tebal: '1 cm',
  dayaSimpan: '7000 mAh',
  merk: 'Hipp0',
  harga: 300000
}
console.log(checkRatio(pow1))
console.log()
// { merk: 'Hipp0',
//   mAhToSize: '140 mAh/cm3',
//   priceTomAh: '42.9 idr/mAh',
//   Grade: 'A' }

var pow2 = {
  lebar: '3 cm',
  panjang: '7 cm',
  tebal: '3 cm',
  dayaSimpan: '3350 mAh',
  merk: 'Anker',
  harga: 270000
}
console.log(checkRatio(pow2))
console.log()
// { merk: 'Anker',
//   mAhToSize: '53.2 mAh/cm3',
//   priceTomAh: '80.6 idr/mAh',
//   Grade: 'B' }


var pow3 = {
  lebar: '15 cm',
  panjang: '20 cm',
  tebal: '2 cm',
  dayaSimpan: '18000 mAh',
  merk: 'Energizer',
  harga: 1512000
}
console.log(checkRatio(pow3))
console.log()
// { merk: 'Energizer',
//   mAhToSize: '30 mAh/cm3',
//   priceTomAh: '84 idr/mAh',
//   Grade: 'C' }

console.log(checkRatio())
// Invalid Input