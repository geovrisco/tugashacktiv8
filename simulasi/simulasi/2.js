/**
 * ==================
 * How far can I go
 * =================
 *
 * Terdapat sebuah lintasan yang merupakan array multi dimensi yang di setiap indexnya memiliki tiga kemungkinan value
 * O -> adalah posisi mobil
 * X -> adalah tujuan akhir mobil
 * ' ' -> adalah lintasan biasa
 *
 * Setiap mobil pasti akan memiliki bensin untuk berjalan, buatlah sebuah fungsi yang akan menentukan dimana mobil tersebut akan
 * berhenti dengan jumlah bensin yang dimiliki.
 *
 * Asumsi
 * - Mobil psti bergerak ke arah kanan, jika sudah mencapai akhir mobil akan turun ke kolom dibawahnya dan seterusnya
 * - Setiap kali mobil bergerak maka bensin akan berkurang 1l.
 *
 * Contoh:
 *
 * Lintasan
 * [
 *  [' ', ' ', 'O', ' ']
 *  [' ', ' ', 'X', ' ']
 * ]
 *
 * Jumlah bensin 2L
 *
 * Output:
 * [
 *  [' ', ' ', ' ', ' ']
 *  ['O', ' ', 'X', ' ']
 * ]
 *
 *
 */

function howFarCanIGo(track, fuel) {
  // Happiness start here
  //Cari posisi mobil
  //kalo maju bensin -1
  //kalo mentok pindah kebawah

  //cari posisi mobil sekarang
  
 for (let i = 0 ; i <track.length; i ++){
   for (let j = 0; j <track[i].length;j++){
     if (track[i][j]=='O'){ // Ketemu Mobil
      //  console.log('mobil',i,j) 
        //Jalanin
        for (let k = j+1; k <track[i].length; k++){
          if (track[i][k]!=='O' && fuel >0 ){//kalo jalan bukan 0 (SPASI DAN X DIASUKIN)
            track[i][k]='O'
            track[i][j]=' '
            fuel= fuel -1
            
            
          }
          if (track[i][k]==undefined ||fuel>0 && track[i+1]!==undefined){ // KALO MENTOK PINDAH BAWAH
            track[i+1][0]='O'
            track[i][k]=' '
            track[i][k-1]=' '
            fuel=fuel-1
            
            
          }
          
          // if (fuel<0 && track[i][j]==''){ // KALO ABIS 
          //   track[i][k]='O'
          //   track[i][j]=' '
          //   track[i][k]=''
            
          // }
        }
     }

   }
 }
 return track
}

var track1 = [
  [' ', ' ', 'O', ' '], // 0
  [' ', ' ', 'X', ''] // 1
]

console.log(howFarCanIGo(track1, 2))
/**
 *  [
 *   [' ', ' ', ' ', ' '],
 *   [ 'O', ' ', 'X', '']
 * ]
 */

var track2 = [
  [' ', ' ', 'O', ' '],
  [' ', ' ', 'X', '']
]
console.log(howFarCanIGo(track2, 4))
/**
 *  [
 *  [' ', ' ', ' ', ' '],
 *  [' ', ' ', 'O', ' ']
 * ]
 */
