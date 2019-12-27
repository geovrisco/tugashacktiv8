/*

  TOL JAKARTA BANDUNG

  Karena adanya mudik lebaran maka pemerintah menerapkan sistem beberapa jalur prioritas.
  disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan yang paling cepat
  sampai ke tujuan.

  Plat nomor kuning paling cepat sampai, dilanjutkan merah, dan terakhir hitam.
  Jam keberangkatan sesuai urutan dalam array.

  [INPUT]
  [['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]

  [PROCESS]
  kuning => 'B 1172 BA'
  merah => 'B 1171 BA'
  hitam => 'B 1173 BA', 'B 1174 BA'

  [OUTPUT]
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]  

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

  1. membuat variabel penampung array baru
  store -> arraybaru=[]

  2. membuat nested loop 3x untuk mencari warna dengan ketentuan sebagai berikut
  pengulahan pertama digunakan untuk mencari indeks ke-x [x][y] karena index x adalah index plat mobil,
   y adalah warna
  cars adalah array input 
  for (let plat=0;plat<=cars.length-1;plat++) { ---> mencari index [x] untuk plat
    for (let warna=0;warna<=1;warna ++){ --->mencari index [y] untuk warna
        if (cars[plat][warna]='kuning'){
            arraybaru.push(cars[plat][0])-> akan di push arra       
        }
    }
  }



*/

function firstArrived(cars) {
let arraybaru=[]
  for(let plat=0; plat<=cars.length-1;plat++){
    
    for (let warna=0;warna<=1;warna++){
        if(cars[plat][warna]=='kuning'){
            arraybaru.push(cars[plat][0])
        }
    }

}//cari yang kuning terlebih dahulu

for(let plat=0; plat<=cars.length-1;plat++){
    
    for (let warna=0;warna<=1;warna++){
        if(cars[plat][warna]=='merah'){
            arraybaru.push(cars[plat][0])
        }
    }

}//cari yang merah


for(let plat=0; plat<=cars.length-1;plat++){
    
    for (let warna=0;warna<=1;warna++){
        if(cars[plat][warna]=='hitam'){
            arraybaru.push(cars[plat][0])
        }
    }

}//cari yang mhitam

return arraybaru
};

//TEST CASE

console.log(firstArrived([['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1173 BA', 'B 1174 BA' ]
*/
console.log(firstArrived([['B 1174 BA', 'hitam'], ['B 1171 BA', 'merah'], ['B 1173 BA', 'hitam'], ['B 1172 BA', 'kuning']]));
/*
  [ 'B 1172 BA', 'B 1171 BA', 'B 1174 BA', 'B 1173 BA' ]
*/
