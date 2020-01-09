function pasanganTerbesar(num) {
  // you can only write your code here!
  stringNum = num.toString()
arrTemp=[]
for (i=0;i<stringNum.length;i++){
    arrTemp.push(stringNum[i]+stringNum[i+1])
}
arrTemp.pop()
arrNum = arrTemp.map(Number)

let max =arrNum[0]
for (let i = 0; i<arrNum.length;i++){
    if (arrNum[i]>max){
        max=arrNum[i]
    }else if (arrNum<max) {
        return max
    }
    
}
return max

}

// TEST CASES
console.log(pasanganTerbesar(641573)); // 73
console.log(pasanganTerbesar(12783456)); // 83
console.log(pasanganTerbesar(910233)); // 91
console.log(pasanganTerbesar(71856421)); // 85
console.log(pasanganTerbesar(79918293)); // 99
console.log(pasanganTerbesar(92841823989921)); // 99