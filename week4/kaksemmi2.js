/**
 * Objective: Memahami pengecekan data di dalam object
 *
 * Misalkan kita memiliki sebuah object seperti ini
 * {
 *  name: 'Kosasih',
 *  grade: 90
 * }
 *
 * Buatlah sebuah fungsi yang akan melakukan pengecekan apakah sebuah property ada di dalam object
 */
function hasProperty(obj, key) {
    let arrProperty = Object.keys(obj)
    if (key==arrProperty[0] || key==arrProperty[1]){
        return true
    }else{
        return false
    }
    
}



console.log(
  hasProperty(
    {
      name: 'Kosasih',
      grade: 90
    },
    'grade'
  )
) // true
console.log(
  hasProperty(
    {
      name: 'Kosasih',
      grade: 90
    },
    'gender'
  )
) // false
/**
 * Objective: Grouping collection of data into an object
 *
 * Kosasih memiliki sebuah peternakan dengan kumpulan hewan sebagai berikut
 * [ 'Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']
 *
 * Buatlah sebuah fungsi yang akan menerima input sebuah array seperti diatas, dan akan mengembalikan
 * Sebuah object jumlah hewan yang dimiliki oleh Kosasih dikelompokan berdasarkan namanya.
 * Liat driver code untuk output yang lebih jelas
 */
function groupAnimal(array) {
    let obj = {}
   
    let arrUnik = [ array[0]]
    let arrHitung = []

    for (let i = 1; i <array.length; i++){ // untuk bikin array unik
        let a = true
        for (let j = 0; j < arrUnik.length; j++){
            if (array[i]===arrUnik[j]){
                
                a = false
            }
        }
        if (a===true){
            arrUnik.push(array[i])
           
        }
    } // untuk bikin array unik


    console.log(arrUnik,'<<<<<<array')
    let count=0
    let objKosong = {

    }
    
    for (i = 0; i<arrUnik.length; i++){
        for (j = 0; j <array.length;j++){
            if(array[j]===arrUnik[i]){
                count++
            }        
        }
        objKosong[arrUnik[i]]= count
        count=0
    }
    return objKosong
}
console.log(groupAnimal(['Ayam', 'Bebek', 'Ayam', 'Kuda', 'Kuda']))
/**
 * {
 *  Ayam: 2,
 *  Kuda: 2,
 *  Bebek: 1
 * }
 */