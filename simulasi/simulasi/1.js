/**
 * ==============
 * Find the value of Y
 * ==================
 *
 * Mungkin kalian ingat persamaan linear seperti ini y = 2x + 3
 *
 * Tugas kalian adalah membuat sebuah fungsi yang akan mengembalikan nilai dari Y, fungsi ini akan menerima dua input:
 * - String yang merupakan persamaan yang ingin kita cari.
 * - Angka yang akan menggantikan variable x di dalam persamaan yang kita punya
 *
 * Contoh fungsi:
 *
 * Input
 * findTheY('2x+3', 2)
 *
 * Proses
 * 2 x (2) + 3
 *
 * Output
 * 7
 */

function findTheY(linearEquation, xValue) {
  // Insert your code here

  let sumArray = []
  for (let i = 0; i < linearEquation.length ; i++){
    sumArray.push(linearEquation[i])
  }

  let Arrayx=[]
  for (let i = 0 ; i < sumArray.length ; i ++){
    if (sumArray[i]==='x'){
      Arrayx.push(xValue)
    }
    if (sumArray[i]!=='+' && sumArray[i] !=='x'){
      Arrayx.push(parseInt(sumArray[i]))
    }
    if (sumArray[i]==='+'){
      Arrayx.push('+')
    }
  }
  let kiri=1;
  let kanan=1

  console.log(Arrayx)
  let flag = false

   for (let j = 0 ; j < Arrayx.length ; j ++){
     if (Arrayx[j]==='+'){
       flag = true
     }
   }
  if (flag==true){
     for (let i = 0 ; i < Arrayx.length ; i ++){
      if (Arrayx[i]==='+'){
        for (let maju = i+1; maju < Arrayx.length;maju++){
          kanan=kanan*Arrayx[maju]
        }
        for (let mundur = 0; mundur < i; mundur++){
          kiri= kiri *Arrayx[mundur]
        }
      }
     }
     return kiri+kanan
   }

   if (flag==false){
     for (let i = 0; i < Arrayx.length ; i++){
       kiri = kiri*Arrayx[i]
     }
     return kiri
   }
    
}

console.log(findTheY('2x+3', 2)) // 7
console.log(findTheY('2x+3x', 3)) // 15
console.log(findTheY('3x', 5)) // 15

// console.log(findTheY('2x+3'), 2) // 7
// console.log(findTheY('2x+3x'), 3) // 15
// console.log(findTheY('3x'), 5) // 15
