function cariMean(arr) {
    // you can only write your code here!
    let tampung=arr[0]
 for (let i = 1 ; i < arr.length ; i++){
     tampung=tampung+arr[i]
 }
    tampung=tampung/arr.length
    return Math.round(tampung)
  }
  
  // TEST CASES
  console.log(cariMean([1, 2, 3, 4, 5])); // 3
  console.log(cariMean([3, 5, 7, 5, 3])); // 5
  console.log(cariMean([6, 5, 4, 7, 3])); // 5
  console.log(cariMean([1, 3, 3])); // 2
  console.log(cariMean([7, 7, 7, 7, 7]));
  console.log(cariMean([7, 7, 7, 7, 8])); // 7