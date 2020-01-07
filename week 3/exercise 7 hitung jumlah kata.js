function hitungJumlahKata(kalimat) {
  // you can only write your code here!
  
let count =0
  if (kalimat.length<=1){
     count = 1
     return count
  }
for (let i = 0 ; i<kalimat.length;i++){
    if (kalimat[i]===" "){
        count = count + 1
    }
}
count = count + 1
return count
}

// TEST CASES
console.log(hitungJumlahKata('I have a dream')); // 4
console.log(hitungJumlahKata('Never eat shredded wheat or cake')); // 6
console.log(hitungJumlahKata('A song to sing')); // 4
console.log(hitungJumlahKata('I')); // 1
console.log(hitungJumlahKata('I believe I can code')); // 5
console.log(hitungJumlahKata('geo lop pinak'))