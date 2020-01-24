

function makanTerusRekursif(waktu) {
  // you can only write your code here!
 
  if (waktu<=0){
      return 0
  }

var count = 1
    function rekursiftesst(waktu){
        if (waktu<15){
            return count
        }else if (waktu>15){
            count=count+1
            return rekursiftesst(waktu-15)
        }
    }
    rekursiftesst(waktu)
    return count
}



// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0