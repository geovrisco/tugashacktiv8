function bandingkanAngka(angka1, angka2) {
  let a;
  
    if (angka2>angka1){
      a= true
  } else if (angka2<angka1){
      a = false
  } else if (angka1==angka2) {
      a=-1
  }
  return a
}

// TEST CASES
console.log(bandingkanAngka(5, 8)); // true
console.log(bandingkanAngka(5, 3)); // false
console.log(bandingkanAngka(4, 4)); // -1
console.log(bandingkanAngka(3, 3)); // -1
console.log(bandingkanAngka(17, 2)); // false