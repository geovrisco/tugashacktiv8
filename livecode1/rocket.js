/**
 * Buatlah sebuah function yang akan mengambil input berupa array multidimensi berisi kumpulan angka.
 * Function akan mencari nilai mean, modus, max dari masing-masing array di dalam array multidimensi tersebut.
 * Masing-masing mean, modus, dan max dari array-array tersebut akan disimpan di dalam 1 array.
 * 
 * Jika terdapat 2 modus di dalam 1 array, maka modus di array tersebut adalah modus yang terkecil!!!
 * 
 * contoh input: [[1,2,3,4], [5,6,5,7]]
 * contoh output:[[mean, modus, max], [mean,modus,max]]
 *               [ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]
 * 
 * Rules:
 * -Dilarang menggunakan built-in function selain .push()
 * 
 */

function findSpecials(array) {
    let res = []

    
    var avg = 0
    var avrg = 0
    for (let i =0 ; i < array.length; i++){
        
        for (let j=0 ; j <array[i].length;j++){
            
            for(let a = 0; a < array[i].length; a++){
                for (let b = a+1 ;b <array[i].length; b++){
                    if (array[i][a]>array[i][b]){
                            temp=array[i][a]
                            array[i][a]=array[i][b]
                            array[i][b]=temp
                    }
                }
            }
            
            avg+=avg+array[i][j]
        
        }
        avrg=Math.round(avg/array[i].length)
        
        res.push(array[i][avrg])
    
    }
    
    
    
    console.log(array)
    
    return res
}


//test-cases
console.log(findSpecials([[2,2,2,4,5,6,8,9],[2,2,2,0,9],[3,4,5,8,8,8,3,3,2,10]]));
//[ [ 4.75, 2, 9 ], [ 3, 2, 9 ], [ 5.4, 3, 10 ] ]

console.log(findSpecials([[1,2,3,4], [5,6,5,7]]))
//[ [ 2.5, 1, 4 ], [ 5.75, 5, 7 ] ]