function totalDigitRekursif(angka) {
  // you can only write your code here!
  
    let angkastr=angka.toString()
    if (angkastr.length<=1){
        return angkastr
    }
    let i = angkastr.length -1
    if (i <=0){
        return 
    } else {
        let a = parseInt(angkastr[i])
        let b = parseInt(angkastr[i-1])
        
        return totalDigitRekursif(a+b)
    }

  
}

// TEST CASES
console.log(totalDigitRekursif(512)); // 8
console.log(totalDigitRekursif(1542)); // 12
console.log(totalDigitRekursif(5)); // 5
console.log(totalDigitRekursif(21)); // 3
console.log(totalDigitRekursif(11111)); // 5