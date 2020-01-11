/**
 * ============
 * Checkerboard
 * ============
 * 
 * [Instruction]
 * Buatlah sebuah function yang mengembalikan string berupa
 * asterisk yang berbentuk pola seperti papan catur.
 * 
 * [Resctrictions]
 * 1. Result selalu dimulai dari asterisk '*' bukan spasi ' '
 * 2. Function mengembalikan 'Invalid' jika input kurang dari 1
 *    ATAU input bukan number
 */

function checkerBoard(num) {
  // Write your code here
  if (num < 1){
    return 'invalid'
  }
 let bintang=""
  for (let i=0;i<=num;i++ ){
 
    if (i%2 !== 0 ){
      bintang+=" "
    }else{
      bintang+='*'
    }
  } bintang +='\n'
return(bintang)
}

console.log(checkerBoard(1))
// *
console.log(checkerBoard(2))
// * 
//  *
console.log(checkerBoard(3))
// * *
//  *
// * *
console.log(checkerBoard(4))
// * *
//  * *
// * *
//  * *
console.log(checkerBoard(5))
// * * *
//  * *
// * * *
//  * *
// * * *
console.log(checkerBoard(-1)) // Invalid
console.log(checkerBoard('5')) // Invalid
console.log(checkerBoard(false)) // Invalid