function uangterbanyak(arr){
    
    function manualsplit(arr){
        let tampung =[]
        let kalimat=arr[0]
        let str=""
        
        for (let i = 0; i <= kalimat.length;i++){
            if (kalimat[i] !== ","){
                str+=kalimat[i]
            }
        
            if (kalimat[i]=="," || i==kalimat.length-1){
                tampung.push(str)
                str=""
            }
        }
            return tampung
            
        }

       
var input= manualsplit(arr)
    let nama=''
    let angka=''
    let angkafix=''
    let array=[]

    for (let i=0; i<input.length;i++){
        var huruf = input[i]
        console.log(huruf.length,huruf,typeof(huruf))
        for (let j = 0; j<=huruf.length;j++){
            if (huruf[j] !==':'){
                nama+=huruf[j]
            }
            if (huruf[j]==':'){
                array.push([nama])
                nama=""
                break;
            }
        }
        for (let k = huruf.length-1; k>=1;k--){
            if (huruf[k]!== ":"){
                angka+=huruf[k]
            }
            if (huruf[k]==':'){
                for (let l = angka.length-1; l>=0; l--){
                    angkafix+=angka[l]
                }
                array[i].push(angkafix)
                angkafix=''
                angka=""
                break;
            }
        }

    }
    return array

          
}



console.log(uangterbanyak(['andi:3000,bintang:35000,dia:4500']))
