/*
  HEROES
  Heroes adalah sebuah fungsi untuk menentukkan karakter apa saja yang disukai
  orang sehingga yang duplikat tidak perlu dicatat.
  Fungsi akan menerima parameter berupa string

  EXAMPLE
  INPUT: "saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"
  OUTPUT: [saitama, naruto, nobita, sasuke]

  RULES:
  1. Tidak boleh menggunakan built in function selain .push(), .unshift()
*/
function Heroes(hero) {
  // Write your code here
  if (hero == "") {
    return "There's no heroes";
  }
  let arr = [];
  let tempStr = "";
  for (let i = 0; i <= hero.length; i++) {
    if ((hero[i] == "&" && hero[i + 1] == "&") || hero[i] == undefined) {
      arr.push(tempStr);
      tempStr = "";
    } else if (hero[i] != "&") {
      tempStr += hero[i];
    }
  }
  return arr;
}

// TEST CASE
console.log(Heroes("saitama&&naruto&&nobita&&nobita&&saitama&&sasuke"));
// [ 'saitama', 'naruto', 'nobita', 'sasuke' ]
console.log(
  Heroes("doraemon&&sakura&&inuyasha&&saitama&&shoji&&ikan indosiar")
);
// [ 'doraemon', 'sakura', 'inuyasha', 'saitama', 'shoji', 'ikan indosiar' ]
console.log(Heroes(""));
// There's no heroes
