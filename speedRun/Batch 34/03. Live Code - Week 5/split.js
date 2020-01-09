var a = 'geo,makan,minum,tidur'

function splitManual (input,parameter){
let kata = ""
let arrayPenampung =[]
for (let i = 0; i < input.length;i++){
    if (input[i]==parameter){
        arrayPenampung.push(kata)
        kata=""
    } else {
        kata +=input[i]
    }
}return arrayPenampung

}

console.log(splitManual( "geo,makan,minum,tidur" , "," ))
