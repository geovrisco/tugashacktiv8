function tentukanDeretAritmatika(arr) {
  // you can only write your code here!

  let tampung = 0; 
  let hasil = []
  
  for ( let i = 0 ; i < arr.length -1 ; i ++){ // ekstra minus biar mantap
      tampung = arr[i+1]-arr[i]
      hasil.push(tampung)
      tampung = 0
  }
  let status= true
  for ( let i = 0 ; i < hasil.length ; i ++){
      for ( let j = 0 ; j < hasil.length ; j++){
          if (hasil[i]!==hasil[j]){
              status = false
          }
          
      }      
  }
  return status
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
console.log(tentukanDeretAritmatika([1, 1, 1, 4, 1, 1])); // false
console.log(tentukanDeretAritmatika([3, 6, 9, 12, 15, 3])); // false