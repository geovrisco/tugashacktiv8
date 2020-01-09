 
function tentukanDeretGeometri(arr) {
    let tampung = 0; 
    let hasil = []
    
    for ( let i = 0 ; i < arr.length -1 ; i ++){ // ekstra minus biar mantap
        tampung = arr[i+1]/arr[i]
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
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])); // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])); // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])); // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])); // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])); // false