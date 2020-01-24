function sortMin (input){
  for (let i =0; i < input.length ; i++){
    for (let j = i+1; j <input.length; j++){
      if (input[i]>input[j]){
        temp = input[i]
        input[i]=input[j]
        input[j]=temp
      }
    }
  }

  return input
}

function digitPerkalianMinimum(angka) {
  // you can only write your code here!
let arr=[]
let count=0

  for (let i=0; i<=angka;i++){    
      for (let j=0; j<=angka;j++){

          if (i*j==angka ){
              arr.push([i.toString(),j.toString()])
              count++
          }
      }
  }

  let length =[]
  for (let i = 0 ; i < arr.length ; i++){
    
      var totallength=0
      totallength=arr[i][0].length+arr[i][1].length
      length.push(totallength)
  }
  sortMin(length)

  return length[0]
}



// TEST CASES
console.log(digitPerkalianMinimum(24)); // 2
console.log(digitPerkalianMinimum(90)); // 3
console.log(digitPerkalianMinimum(20)); // 2
console.log(digitPerkalianMinimum(179)); // 4
console.log(digitPerkalianMinimum(1)); // 2