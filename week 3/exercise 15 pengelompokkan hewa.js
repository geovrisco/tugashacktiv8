function groupAnimals(animals) {
  // you can only write your code here!
  let input = animals
  function sortAnimals(arr){
    for (let i = 0 ; i < arr.length; i++){
       for (let j = 0; j < arr.length; j++){        
           if ( arr[j] > arr[j+1] ){
               temp = arr[j]
               arr[j]= arr[j+1]
               arr[j+1]=temp
           }
       } 
    }
return arr
}


sortAnimals(input)
let arrKosong=[[input[0]]]


    // for (let i = 1; i < input.length;i++){
    //     let status = true
    //     for (let j = 0; j < arrKosong.length; j++){
    //         if (input[i][0]===arrKosong[j][0][0]){
    //             arrKosong[j].push(input[i])
    //             status = false
    //         }
    //     }
    //     if (status===true){
    //         arrKosong.push([input[i]])
    //     }
        
    // }

    for ( let i = 1; i <input.length;i++){
        let status = true
        for (let j=0; j < arrKosong.length;j++){
            if (input[i][0]===arrKosong[j][0][0]){
                arrKosong[j].push(input[i])
                status= false
            }
        }
        if (status==true){
            arrKosong.push([input[i]])
        }
    }


return arrKosong
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
// console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// // // [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]