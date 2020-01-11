/**
 * ======================
 * find first not repeat
 * ======================
 * 
 * Description
 * -----------
 * Function ini akan mencari huruf pertama yang tidak terulang pada kata tersebut
 * 
 * Example
 * -------
 *  "lawless" => maka function akan membalikkan output a, walaupun huruf e juga hanya sekali,
 *    tetapi yang pertama kali muncul pada kata tersebut ada huruf a, maka huruf a lah yang di return
 *  "ada" => maka function akan membalikkan output d
 *  "torabika" => maka function akan membalikkan output t
 * 
 *  Jika seluruh huruf pada kata tersebut terulang maka function akan mencetak output "None"
 *  contoh :
 *  "taat" => maka function akan mencetak output "None"
 *  
 * Restrictions
 * ------------
 * - Kita asumsikan input hanya alphabet lowercase tanpa spasi ataupun symbol
 * 
 *  RULES
 *  1. tidak boleh menggunakan built in function: .map .filter .find .indexOf .includes .lastIndexOf
 *  2. tidak boleh menggunakan regex
 */

function notRepeat(word) {
  // Write your code here
  var hasil =""
  for ( let i = 0; i<word.length;i++){
    status = true
    for (let j = 1; j<word.length;j++){
      if (word[i]==word[j]){
        status=false
      }
    }
    if (status==true){
      hasil=word[i]
    }
  }

if (hasil===""){
  for (let i = 1 ; i< word.length;i++){
    status = true
    for (let j = 2; j<word.length;j++){
      if (word[i]==word[j]){
        status=false
      }
    }
    if (status==true){
      hasil=word[i]
    }
  }
}

if (hasil===""){
  return 'none'
}
  return hasil
}

console.log(notRepeat("nescafe")) // n
console.log(notRepeat("torabika")) // t
console.log(notRepeat("kuroky")) // u
console.log(notRepeat("pesawat")) // p
console.log(notRepeat("taat")) // None