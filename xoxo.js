function xo(str) {

    let tampung;
    let hitungX=0;
    let hitungO=0
  for (let i=0; i<=str.length;i++){
      if(str[i]=='x'){
        hitungX=hitungX+1;
      }
  }
  for (let i=0; i<=str.length;i++){
    if(str[i]=='o'){
      hitungO=hitungO+1;
    }
}
    if (hitungX === hitungO){tampung=true}
    else if (hitungX !== hitungO){tampung=false}

return tampung
}

// // TEST CASES
// console.log(xo('xoxoxo')); // true
// console.log(xo('oxooxo')); // false
// console.log(xo('oxo')); // false
// console.log(xo('xxxooo')); // true
// console.log(xo('xoxooxxo')); // true



// XO yg susah 
function hitungxo(str){
  let arrUnik=[]
  let arrStr=[]
  for (let i=0; i<str.length;i++){
    arrStr.push(str[i])
  }
  arrUnik.push(arrStr[0])
  for (let i = 1 ; i <arrStr.length ; i++){
    // var status = false
    // for (let j= 0;j < arrUnik.length; j++){
    //   if (arrStr[i] === arrUnik[j]){
    //     let status = true
    //   }
    // }
    // if (status === false){
    //   arrUnik.push(arrStr[i])
    // }
    var a = false
    for (let j = 0; j < arrUnik.length; j++) {
      if (arrStr[i][0] == arrUnik[j][0]) {
        a = true
      }
    }
    if (a == false) {
      arrUnik.push(arrStr[i])
    }

  }
  
  let final=[]
  for (let i = 0; i< arrUnik.length;i++){
    let count = 0;
    for (let j=0;j<arrStr.length;j++){
      if (arrUnik[i]===arrStr[j]){
        count=count+1
      } 

    }

    final.push(count)
  }
  return final
}
console.log(hitungxo('xoxoxo')); // 3,3
console.log(hitungxo('oxooxo')); // 2,3
console.log(hitungxo('oxo')); // 1,2
console.log(hitungxo('xxxooo')); // 3,3
console.log(hitungxo('xoxooxxo')); //4,4
