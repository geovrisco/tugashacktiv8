

function rowSumOddNumbers(n) {
    // TODO
    let angkapush=0
    let arr=[]
    for (let i=0; i < n; i++){
       
        
        if (arr.length<=0){
            arr.push([[i+1]])
        }else if(arr.length==1){
            arr.push([[i+2]])
        }else if (arr.length>1){
            arr.push([[num+4]])
        }
      
        for (let j=0; j < i ; j++){
            var num =  arr[i][arr[i].length-1][0]

            // console.log(num)
            arr[i].push([num+2])
            }
        }
    
    return arr

}
function assertEquals(arr, indexKe){
    indexKe=indexKe-1
    res=0
    
    for (let i = 0; i <arr[indexKe].length;i++){
        res=res+parseInt(arr[indexKe][i])
    }
    return parseInt(res)
}
console.log(rowSumOddNumbers(5))
console.log(assertEquals(rowSumOddNumbers(5),1))