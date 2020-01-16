function digitPerkalianMinimum(angka) {
  // you can only write your code here!
let arr=[]

  for (let i=0; i<=angka;i++){
      for (let j=0; j<=angka;j++){
          if (i*j==angka ){
              arr.push([i.toString(),j.toString()])
              
        
          }
      }
  }

   let result=[]
 
  
  for (let i =0 ; i <arr.length;i++){
      string=arr[i]
      if (arr[i][0].length==1 && arr[i][1].length==1){
          result.push([arr[i][0],arr[i][1]])
      }
  }

  return result



}



// TEST CASES
// console.log(digitPerkalianMinimum(24)); // 2
// console.log(digitPerkalianMinimum(90)); // 3
// console.log(digitPerkalianMinimum(20)); // 2
// console.log(digitPerkalianMinimum(179)); // 4
// console.log(digitPerkalianMinimum(1)); // 2