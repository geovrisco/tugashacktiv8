function cariModus(arr) {
  // you can only write your code here!
  let tampung=[]

  for (let i = 0; i <arr.length ; i++ ){
    let status =false
      for (let j =i+1;j<arr.length;j++){
          if (arr[i]==arr[j]){
          status=true
          }

      }
    if (status==true){
        tampung.push(arr[i])
    }
   
      
  }
  if(tampung.length<1){
    return -1
}

for(let i =0; i < tampung.length;i++){
    if(tampung[i]==tampung[i+1]){
        return -1
    }
    
    else{
        return tampung[0]
    }
}
}

// TEST CASES
console.log(cariModus([10, 4, 5, 2, 4])); // 4
console.log(cariModus([5, 10, 10, 6, 5])); // 5
console.log(cariModus([10, 3, 1, 2, 5])); // -1
console.log(cariModus([1, 2, 3, 3, 4, 5])); // 3
console.log(cariModus([7, 7, 7, 7, 7])); // -1