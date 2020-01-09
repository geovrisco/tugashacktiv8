function perkalianUnik(arr) {
  // you can only write your code here!
  let hasil = []
  let kali = 1

    for (let i = 0; i < arr.length; i++){
        if ( arr[i] == arr[0] ){
            for ( let j = 1 + i; j < arr.length ; j++){ // buat maju +1 dri i
                kali = kali * arr[j]
            }
            hasil.push(kali)
            kali = 1
        }else if (arr[i] == arr[arr.length-1]){
            for ( let j = i - 1 ; j >= 0 ; j--){ // buat mundur -1 dari i yang diujung
                kali = kali * arr[j]
            }
            hasil.push(kali)
            kali = 1
        } else {
            for ( let j = i+1 ; j < arr.length; j++ ){
                kali = kali * arr[j]
            }
            for ( let k = i-1 ; k >= 0; k--){
                kali = kali *arr[k]
            }
            hasil.push(kali)
             kali = 1
        }
        
    }
    hasil.pop()
    for ( let i = arr.length-2 ; i >=0 ; i--){
        kali = kali * arr[i]
    }
    hasil.push(kali)
    return hasil
}

// TEST CASES
console.log(perkalianUnik([2, 4, 6])); // [24, 12, 8]
console.log(perkalianUnik([1, 2, 3, 4, 5])); // [120, 60, 40, 30, 24]
console.log(perkalianUnik([1, 4, 3, 2, 5])); // [120, 30, 40, 60, 24]
console.log(perkalianUnik([1, 3, 3, 1])); // [9, 3, 3, 9]
console.log(perkalianUnik([2, 1, 8, 10, 2])); // [160, 320, 40, 32, 160]