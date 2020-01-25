/**
 * Encrypt Word
 * 
 * Function encryptWord menerima input berupa string yang akan menghasilkan sebuah string baru,
 * untuk menghasilkan string barunya kita harus merubah string awalnya menjadi array multidimensi
 * dimana setiap barisnya hanya boleh diisi oleh 4 karakter
 * setelah berhasil membuat array multidimensinya 
 * maka proses pembuatan outputnya mengambil karakter dari paling kiri atas lalu kebawah hingga ujung array
 * lalu kembali keatas pada kolom selanjutnya mulai dari baris pertama
 * 
 * 
 * Input :
 * feedthedog
 * 
 * Proses:
 * [
 *   [ 'f', 'e', 'e', 'd' ],
 *   [ 't', 'h', 'e', 'd' ],
 *   [ 'o', 'g' ]
 * ]
 * 
 * 
 * Output : 
 * ftoehgeedd
 * 
 * 
 * RULES 
 * 1. TIDAK MENGGUNAKAN MAGIC. ex: split() slice() splice() map() reduce() etc.
 * 
 */
function encryptWord(kata) {
  // Your code here
}
console.log(encryptWord("haveaniceday"))
//haeandviaecy
console.log(encryptWord("feedthedog"))
//ftoehgeedd
console.log(encryptWord("sekarangtahunduaribuduapuluh"))
//srtnrdueaadiulknhubauaguauph