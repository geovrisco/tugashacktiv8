/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  yang paling cepat sampai ke tujuan, berdasarkan laju dan kecepatan sampai di 
  tujuan.

  [INPUT]
  cars = [['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]]
  info: ['PLAT NOMOR', 'SPEED', 'CURRENT POSITION']
  totalKM = 450

  [PROCESS]
  butuh waktu = jarak tersisa / kecepatan
  cars ke - 0 = butuh waktu 2,5 jam
  cars ke - 1 = butuh waktu 2,25 jam
  cars ke - 2 = butuh waktu 2.35 jam
  cars ke - 3 = butuh waktu 6.3 jam

  [OUTPUT]
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun



  [start]
  deklarasi variabel yg dibutuhkan
  store arrayJarakTersisa []
  store platmobil=''
  membuat pengulangan untuk memasukkan array dengan isi plat mobil dan waktu yang dibutuhkan


*/

function winner (cars, totalKM) {
  arrMobil=cars;
  let arrJarakTersisa=[];
  let platMobil=''
  let kecepatan=0
  let jarakSekarang=0
  let jarakTersisa=0
  let waktuDibutuhkan=0
  for (let i=0; i<=arrMobil.length-1;i++){    
    platMobil=arrMobil[i][0]
    kecepatan=arrMobil[i][1]
    jarakSekarang=arrMobil[i][2]
    jarakTersisa=totalKM-jarakSekarang
    waktuDibutuhkan=jarakTersisa/kecepatan
    arrJarakTersisa.push([platMobil,waktuDibutuhkan])   
  }
  var swap=true;
do{
  swap=false;
  for (let i=0;i<arrJarakTersisa.length-1;i++){
    if (arrJarakTersisa[i][1] > arrJarakTersisa[i+1][1]){
      temp = arrJarakTersisa[i][1]
      temp2 = arrJarakTersisa[i][0]
      arrJarakTersisa[i][1]=arrJarakTersisa[i+1][1]
      arrJarakTersisa[i][0]=arrJarakTersisa[i+1][0]
      arrJarakTersisa[i+1][1]=temp
      arrJarakTersisa[i+1][0]=temp2
      swap=true
    }
  }
}while(swap) /** my code works, i dont know why meme*/
let arrayAkhir=[]
  for (let i=0;i<=arrJarakTersisa.length-1;i++){
    arrayAkhir.push(arrJarakTersisa[i][0])
  }
  return arrayAkhir
};
console.log(winner([['B 1171 BA', 100, 200], ['B 1172 BA', 200, 0], ['B 1173 BA', 98, 220], ['B 1174 BA', 80, 400]], 450));



/*
  [ 'B 1174 BA', 'B 1172 BA', 'B 1173 BA', 'B 1171 BA' ]
*/