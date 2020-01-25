//Object berisi para seller minuman
//object ini disediakan

/**
 *  Seseorang  ingin membeli minuman-minuman karena kebetulan sedang ada promosi dengan diskon maksimal 40%.
 *  Semua sellers direpresentasikan dengan object bernama "sellers", yang memiliki properti berupa object juga.
 *  satu sellers, misal "Kokumi" menjual barang-barang yang terdapat di items dan dia sedang memberikan promo diskon sebesar 
 *  "discount" (40%).
 * 
 *  Implementasikan function beliTermurah yang akan menerima input berupa array berisi minuman yang ingin dibeli oleh user.
 *  Function akan mengoutput hasil berupa harga dan rekomendasi tempat membeli minuman-minuman tersebut dengan total harga 
 *  yang paling murah.
 */
function sortMurah (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let j = i+1; j <array.length; j++){
            if (array[i].harga>array[j].harga){
                temp=array[i]
                array[i]=array[j]
                array[j]=temp
            }
        }
    }
    return array
}
function beliTermurah(toBuy) {
	var sellers = {
		BobaFett: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.15
		},
		BobaFest: {
			items: [
				{ name: 'Fett Drink', price: 30000 },
				{ name: 'Dragon Boba Juice', price: 40000 },
				{ name: 'Star Big Boba', price: 25000 }
			],
			discount: 0.35
		},
		ChatTime: {
			items: [
				{ name: 'Fett Drink', price: 18000 },
				{ name: 'Dragon Boba Juice', price: 24000 },
				{ name: 'Star Big Boba', price: 21000 }
			],
			discount: 0.1
		},
		Kokumi: {
			items: [
				{ name: 'Fett Drink', price: 32000 },
				{ name: 'Dragon Boba Juice', price: 42000 },
				{ name: 'Star Big Boba', price: 27000 }
			],
			discount: 0.4
		}
    };
    
    let container = [ 
        [toBuy[0] ] 
      ]
      for (let i = 1; i < toBuy.length; i++){
        let flag= true
        for (let j = 0 ; j <container.length ;j ++){
          if (toBuy[i]===container[j]){
            flag= false
          }
        }
        if (flag){
          container.push([toBuy[i]])
        }
      }
      let res=[]
      for (let i = 0 ; i < container.length ; i ++){
          var produk = container[i][0]
        //   console.log(produk)
          let obj={}
          if (obj[produk]===undefined){
              obj[produk]=[]
          }
          for (const key in sellers){
              for (let j = 0; j <sellers[key].items.length; j++){
                if (produk===sellers[key].items[j].name){
                    let tempharga = (1-sellers[key].discount)*sellers[key].items[j].price
                    obj[produk].push({
                        namaToko:`${key}`,
                        harga:tempharga
                    })
                }
              }
          }

          res.push(obj)
      }
     
    
   for (let i = 0 ; i < res.length ; i++){
       for (let key in res[i]){
           sortMurah(res[i][key])
       }
   }
    // console.log(res[0])
    // console.log(res[1])
    let msg=''
    for (let i = 0; i < res.length ; i++){
        for (let key in res[i]){
            // console.log(key)
            msg+='\n'+key+' bisa dibeli dengan harga paling murah '+res[i][key][0].harga +' di '+res[i][key][0].namaToko +' '
            
        }
    }
    
    return msg
}
    

  
    
  
var tc1 = ['Star Big Boba', 'Dragon Boba Juice'];
var tc2 = ['Fett Drink'];
var tc3 = [];
var tc4 = ['Star Big Boba', 'Dragon Boba Juice', 'Fett Drink'];

console.log(beliTermurah(tc1));
// /*
// Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
// Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
// */
console.log(beliTermurah(tc2)); //Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime
// console.log(beliTermurah(tc3)); //Pembeli Tidak Membeli Apa-Apa
console.log(beliTermurah(tc4)); /**Star Big Boba bisa dibeli dengan harga paling murah 16200 di Kokumi
// // Dragon Boba Juice bisa dibeli dengan harga paling murah 21600 di ChatTime
// // Fett Drink bisa dibeli dengan harga paling murah 16200 di ChatTime */