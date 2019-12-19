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

// TEST CASES
console.log(xo('xoxoxo')); // true
console.log(xo('oxooxo')); // false
console.log(xo('oxo')); // false
console.log(xo('xxxooo')); // true
console.log(xo('xoxooxxo')); // true