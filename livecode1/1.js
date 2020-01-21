/**
 * Elementalist Battle.
 * 
 * Function akan menerima input berupa object player dan array berisi serangan yang akan dihadapi player tersebut. 
 * Seorang player memiliki nama, health, dan element. 
 * -health : merupakan nyawa dari pemain, dari  0 - 100
 * -element: merupakan elemen dari pemain
 * 
 * Terdapat 3 jenis element: wind, fire, dan water.
 * Tiap elemen memiliki DAMAGE yang sama yaitu 25
 * Berikut ini aturan untuk elemen tersebut:
 * 
 * -fire bisa memberikan damage kepada wind    fire > wind
 * -water bisa memberikan damage fire          water > fire
 * -wind bisa memberikan damage water          wind > water
 * 
 * 
 * Selain 3 itu, tidak ada efeknya, misal untuk kasus water:
 * water tidak bisa memberikan damage kepada wind
 * water tidak bisa memberikan damage kepada water
 * 
 * -Jika health player sudah 0, maka keluarkan output "Player `name` meninggal"
 * -Jika health player masih ada, maka output object player tersebut
 * 
 * RULES:
 *  - Tuliskan Pseudocode kalian, No pseudocode = 0 !!!
 *  - Dilarang menggunakan .filter .reduce .in
 */

function elementBattle(player, attacks) {
  // your code here
  let dmg=0

  for (i=0; i <attacks.length ; i++){
    if (player.element==='wind'){
      if (attacks[i]==='fire'){
        dmg=dmg+25
      }else{
        dmg=dmg+0
      }
    }
    if (player.element==='water'){
      if (attacks[i]==='wind'){
        dmg=dmg+25
      }
      else{
        dmg=dmg+0
      }
    }
    if(player.element=='fire'){
      if(attacks[i]==='water'){
        dmg=dmg+25
      }
      else{
        dmg=dmg+0
      }
    }
  }
  // console.log(dmg)
  let res = {
    name:player.name,
    health:player.health-dmg,
    element:player.element
  }

  if (res.health<=0){
    return 'player '+res.name+' mMeninggal'
  }

  return res


  // return res
}

console.log(elementBattle({
  name: "Aang",
  health: 100,
  element: "wind"
}, ["water", "fire", "fire", "wind"]));
//{ name: 'Aang', health: 50, element: 'wind' }

console.log(elementBattle({
  name: 'Zuko', 
  element: "fire",
  health: 100
}, ['water','water','water','water','water']))
// Player Zuko meninggal

console.log(elementBattle({
  name: 'Katara', 
  element: "water", 
  health: 35
}, ['water','fire', 'wind', 'wind', 'wind']))
// Player Katara meninggal