
function winner (cars, totalKM) {
    //code below here
    let arrJarakTersisa=[];
    let platMobil="";
    let jarakTersisa=0;
    let kecepatan=0;
    let jarakSekarang=0;
    for (let i=0; i<=cars.length;i++){      
        platMobil=cars[[i][0]]
        kecepatan=cars[[i][1]]
        jarakSekarang=cars[[i][2]]
        jarakTersisa= totalKM -jarakSekarang
        arrJarakTersisa.push(platMobil,kecepatan,jarakTersisa)
             
      
    }
    return arrJarakTersisa;
  
    
  };
  console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));
