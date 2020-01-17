function rupiahkan(num){
    let numStr = num.toString()
    let counter = 0
    let reversd = ''
    for (let i = numStr.length-1; i>=0; i--) {
        reversd += numStr[i]
        counter++
        if (counter % 3 === 0){
            reversd += '.'
        }
    }
    let rupiah=''
    for (let j =reversd.length-1; j >=0; j--){
        rupiah+=reversd[j]
    }
    let result=''
    for (let k = 0; k < rupiah.length; k++){
        if (result[0]==='.'){
            result=''
        }
        result+=rupiah[k]
    }

    return result
}

console.log(rupiahkan(1120000000))