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


console.log(sortAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']));
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(sortAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]));
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda', 'kancil'], ['unta'] ]
