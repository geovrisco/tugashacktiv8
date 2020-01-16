function ubahHuruf(kata) {
  // you can only write your code here!
  str=""
  unicode=""
  cariUnicode=0
  for (let i = 0; i <kata.length ; i++){
    cariUnicode=kata.charCodeAt(i)  
    cariUnicode=cariUnicode+1
    unicode=String.fromCharCode(parseInt(cariUnicode))
    str+=unicode
  }
  return str
}


console.log(ubahHuruf('wow')); // xpx
console.log(ubahHuruf('developer')); // efwfmpqfs
console.log(ubahHuruf('javascript')); // kbwbtdsjqu
console.log(ubahHuruf('keren')); // lfsfo
console.log(ubahHuruf('semangat')); // tfnbohbu



// var str = "HELLO WORLD";
// var n = str.charCodeAt(str.length-1);
// var j =String.fromCharCode(parseInt(n+1))
// console.log(j)