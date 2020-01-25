/**
 * BelanjaMasakan Ibu rumah tangga
 * 
 * Function belanjaBulanan menerima input berupa array yang merupakan kumpulan list daftar belanja masakan kebutuhan yang harus di beli oleh ibu rumah tangga.
 * setiap daftar list memiliki nama jenis bahan yang harus di beli dan  terdapat double atau lebih bahan yang harus di beli. 
 * Function ini akan berfungsi menghindari dan menghapus nama barang yang double atau lebih  dan menggabungkan list daftar yang harus di beli 
 * 
 */
function belanjaMasakan(arr1, arr2) {
  // your code here
}
console.log(belanjaMasakan(
  ["ayam", "ikan", "sayur", "minyak goreng"],
  ["ikan", "tempe", "tahu"],
  ));
  /**   output : [ 'ayam', 'ikan', 'sayur', 'minyak goreng', 'tempe', 'tahu' ] */
console.log(belanjaMasakan(
  ["bumbu dapur", "bawang merah", "cabai", "tomat"],
  ["tomat", "bawang putih", "jahe"]
  ));
  /** output [ 'bumbu dapur','bawang merah','cabai','tomat','bawang putih','jahe' ] */