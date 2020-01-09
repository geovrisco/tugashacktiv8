/*
  /////
  ROBOT
  /////

  Function Robot digunakan untuk mengetahui robot apa saja yang bisa kita buat dari beberapa
  bahan baku.
  Function ini akan menerima suatu string barang dan akan mengembalikkan berapa jumlah robot
  yang dapat dibuat, berdasarkan urutan bukan mencari yang paling efisien.

  GUIDE:
    - R => Red
    - G => Green
    - B => Blue
    - Bahan baku hanya terdiri dari R, G, dan B
    - Combination diasumsikan dalam pembuatan akan selalu berurutan
  COMBINATION:
    - 1R + 1G + 1B => 1 Robot
    - 2R + 2B => 1 Robot
    - 2B + 2G => 1 Robot
    - 2R + 2G => 1 Robot
    - 4R => 1 Robot
    - 4G => 1 Robot
    - 4B => 1 Robot
  
  [EXAMPLE]
  INPUT:
    'BBB'
  PROCESS:
    - Terdapat 3B
  OUTPUT:
    'Jumlah maksimal yang dihasilkan adalah 0'
  
  INPUT:
    'RGB'
  PROCESS:
    - Terdapat 1 R, 1 G, dan 1 B
  OUTPUT:
    'Jumlah maksimal yang dihasilkan adalah 1'
  
  [RULES]
    - Hanya boleh menggunakan built in function .push(), .pop(), .shift(), dan .unshift()
    - Pembuatan mengikuti urutan combinations bukan yang paling efisien

*/

function robot(scrap) {
  var combinations = [
    { R: 1, G: 1, B: 1 },
    { R: 2, B: 2 },
    { B: 2, G: 2 },
    { G: 2, R: 2 },
    { R: 4 },
    { G: 4 },
    { B: 4 }
  ];
  // code here
  let obj = {
    B: 0,
    G: 0,
    R: 0
  };
  for (let i = 0; i < scrap.length; i++) {
    if (obj[scrap[i]] == undefined) {
      obj[scrap[i]] = 1;
    } else {
      obj[scrap[i]]++;
    }
  }
  console.log(obj);

  let count = 0;
  while (obj.B != 0 || obj.G != 0 || obj.R != 0) {
    for (let i = 0; i < combinations.length; i++) {
      let flag = false;
      for (const key in combinations[i]) {
        if (obj.hasOwnProperty(key)) {
          if (obj[key] >= combinations[i][key]) {
            obj[key] -= combinations[i][key];
            flag = true;
          }
        }
      }
      if (flag) {
        count++;
      }
    }
  }
  return "Jumlah maksimal yang dihasilkan adalah " + count;
}

console.log(robot("BBB"));
// 'Jumlah maksimal yang dihasilkan adalah 0'
console.log(robot("RGB"));
// 'Jumlah maksimal yang dihasilkan adalah 1'
console.log(robot("BBRRGG"));
// 'Jumlah maksimal yang dihasilkan adalah 2'
// console.log(robot("BBRRGGGGGGGGGGRRRRRBBBBBBBBBBBBBBBBBBBBBBBBBBBB"));
// 'Jumlah maksimal yang dihasilkan adalah 13'
