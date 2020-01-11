function unik (arr){

let hasil=[arr[0]]

for (let i = 1; i<arr.length;i++){
    let param = true
    for (let j = 0; j<hasil.length; j++){
        if (arr[i]===hasil[j]){
            param = false
        }
    }
    if (param == true){
        hasil.push(arr[i])
    }
}

return hasil
}








function sort (arr){

    for (var i =0; i<arr.length;i++){
        for (j=0;j<arr.length; j++){
            if(arr[j]>arr[j+1]){
                temp = arr[j]
                arr[j]= arr[j+1]
                arr[j+1]=temp
            } 
        }
    }
    
return arr
}

function kelompok(arr){
    let hasil=[ [arr[0]] ]

    for (let i = 1; i < arr.length; i++){
        let param = true
        for (let j = 0; j < hasil.length;j++){
            if (arr[i][0] === hasil[j][0][0]){
                hasil[j].push(arr[i])
                param = false
            }
        }
        if (param==true){
            hasil.push([arr[i]])
        }
    }
    return hasil
   
}
console.log(kelompok(['apel','pisang','semangka','jeruk','jambu','anggur']))