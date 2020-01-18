/**
 * =============
 * Students List
 * =============
 * 
 * Instruction
 * -----------
 * Buatlah sebuah function yang mengelompokkan student berdasarkan phase yang sedang berjalan.
 * 
 * Resctrictions
 * -------------
 * 1. Input berupa array of strings yang berisi nama dan phase dan dipisah dengan strip '-'
 *    Ex: 'yusuf-0'
 * 2. Output merupakan sebuah array yang berisi key berupa masing-masing phase dari 0-3
 * 3. Setiap key menyimpan array of names sesuai dengan input yang diberikan,
 *    Jika ada phase yang kosong (tidak ada student) maka key tersebut menyimpan array kosong []
 * 4. Jika phase kosong, maka hanya mengembalikan object kosong {}
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice, includes, find, findIndex, indexOf
 * 2. Pastikan urutan key sesuai dengan expected output
 */

function getStudents(arr) {
  // Write your code here
  
  let arrResult = []

  for(let i = 0 ; i < arr.length; i++){
    let strPhase=''
    let strName=''
    for ( let j = 0; j < arr[i].length; j++){
        if (arr[i][j]!=='-'){
          strName+=arr[i][j]
        }
    
      if (arr[i][j]==='-'){
        strPhase='phase '+arr[i][j+1]
        arrResult.push([strName,strPhase])       
      }
    }
  }
let result={
  'phase 0':[],
  'phase 1':[],
  'phase 2':[],
  'phase 3':[]
}

  for (let a = 0; a < arrResult.length; a++){
    if (arrResult[a][1]=='phase 0'){
      result['phase 0'].push(arrResult[a][0])
    }
    if (arrResult[a][1]=='phase 1'){
      result['phase 1'].push(arrResult[a][0])
    }
    if (arrResult[a][1]=='phase 2'){
      result['phase 2'].push(arrResult[a][0])
    }
    if (arrResult[a][1]=='phase 3'){
      result['phase 3'].push(arrResult[a][0])
    }
  }

  return result
}

console.log(getStudents(['okka-0', 'maulid-1', 'riko-2', 'bayu-3']))
// {
//   'phase 0': [ 'okka' ],
//   'phase 1': [ 'maulid' ],
//   'phase 2': [ 'riko' ],
//   'phase 3': [ 'bayu' ]
// // }

console.log(getStudents([]))
// {}

console.log(getStudents(['serafim-1', 'amalya-0', 'fadhilah-1', 'reka-3', 'vika-2']))
// {
//   'phase 0': [ 'amalya' ],
//   'phase 1': [ 'serafim', 'fadhilah' ],
//   'phase 2': [ 'vika' ],
//   'phase 3': [ 'reka' ]
// }

console.log(getStudents(['yusuf-0', 'fiqi-3', 'adiel-1']))
// {
//   'phase 0': [ 'yusuf' ],
//   'phase 1': [ 'adiel' ],
//   'phase 2': [],
//   'phase 3': [ 'fiqi' ]
// }