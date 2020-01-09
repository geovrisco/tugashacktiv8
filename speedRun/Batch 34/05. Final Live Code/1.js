/*
	Dalam sebuah game, hero yang dapat dipilih memiliki jenis tertentu
	Dalam game ini satu tim harus memilih 5 heroes yang akan dimainkan
	Disini kamu diminta menampilkan apakah pick hero yang dilakukan tergolong good atau bad dengan kodisi sebagai berikut
		good pick : jika dari hero yang di pick tidak memiliki lebih dari 2 tipe hero yang sama
    bad pick : jika dari hero yang di pick ada 3 atau lebih tipe hero yang sama
    pick list : ranger, mage, tank, warrior, atau assassin (cuma ada 5 tipe ini)
  tampilkan apakah good pick atau bad pick dan jenis apa yang lebih dari 2, pesan seperti pada test case

  [RULES]
  1. Wajib menggunakan Algoritma/Pseudocode
  2. Hanya boleh menggunakan built in function .split(), .unshift(), dan .push()
*/

function heroPick(composition) {
  // code here
  let obj = {};
  let temp = "";
  for (let i = 0; i <= composition.length; i++) {
    switch (composition[i]) {
      case ",":
        if (obj[temp] == undefined) {
          obj[temp] = 1;
        } else {
          obj[temp]++;
        }
        temp = "";
        break;

      case undefined:
        if (obj[temp] == undefined) {
          obj[temp] = 1;
        } else {
          obj[temp]++;
        }
        break;

      default:
        temp += composition[i];
        break;
    }
  }
  console.log(obj);
  let arr = ["ranger", "mage", "tank", "warrior", "assassin"];
  let highest = 0;
  let length = 0;
  temp = 0;
  let flag = false;

  for (const key in obj) {
    for (let i = 0; i < arr.length; i++) {
      if (key == arr[i]) {
        flag = true;
        break;
      } else {
        flag = false;
      }
    }
    if (flag == false) {
      return key + " is not on the pick list";
    } else if (obj[key] > highest) {
      highest = obj[key];
      temp = key;
    }
    length += obj[key];
  }

  for (const key in obj) {
    if (length < 5) {
      return "not sufficient players";
    } else if (obj[key] > 2) {
      return "bad pick too many " + temp;
    } else {
      return "good pick";
    }
  }
}

// Test case
console.log(heroPick("ranger,ranger,mage,tank,warrior")); // good pick
console.log(heroPick("mage,mage,tank,mage,warrior")); // bad pick too many mage
console.log(heroPick("mage,mage,tank,mage")); // not sufficient players
console.log(heroPick("mage,mage,god,mage,mage")); // god is not on the pick list
