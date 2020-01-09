// function mengelompokkanAngka(arr) {
//     // you can only write your code here! cara apaan ini
//     let arrGenap = []
//     let arrGanjil = []
//     let arrKelipatan = []
//     let Hasil = []

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] % 3 == 0) {
//             arrKelipatan.push(arr[i])
//         } else if (arr[i] % 2 == 0) {
//             arrGenap.push(arr[i])
//         } else {
//             arrGanjil.push(arr[i])
//         }


//     }
//     Hasil.push(arrGenap)
//     Hasil.push(arrGanjil)
//     Hasil.push(arrKelipatan)
//     return Hasil
// }

function mengelompokkanAngka(arr) {
    // you can only write your code here! cara benar
    let Hasil = [[],[],[]]
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] % 3 == 0) {
            Hasil[2].push(arr[i])
        } else if (arr[i] % 2 == 0) {
            Hasil[0].push(arr[i])
        } else {
            Hasil[1].push(arr[i])
        }
    }
    return Hasil
}

// TEST CASES
console.log(mengelompokkanAngka([2, 4, 6])); // [ [2, 4], [], [6] ]
console.log(mengelompokkanAngka([1, 2, 3, 4, 5, 6, 7, 8, 9])); // [ [ 2, 4, 8 ], [ 1, 5, 7 ], [ 3, 6, 9 ] ]
console.log(mengelompokkanAngka([100, 151, 122, 99, 111])); // [ [ 100, 122 ], [ 151 ], [ 99, 111 ] ]
console.log(mengelompokkanAngka([])); // [ [], [], [] ]