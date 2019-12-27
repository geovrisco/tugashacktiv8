/*

  TOL JAKARTA BANDUNG

  Disini kita diminta oleh pemerintah untuk menentukkan siapa kendaraan
  menghitung persentase jumlah pemudik kendaraan.

  [INPUT]
  cars = ['B', 'D', 'B', 'B', 'A', 'C', 'D']

  [PROCESS]
  cars plat - B ada 4/7
  cars plat - D ada 2/7
  cars plat - A ada 1/7
  cars plat - C ada 1/7

  [OUTPUT]
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]

  NOTE:
  - dibuat sedinamis mungkin
  - tidak boleh pake magic apapun

*/

function mostCarsByState (cars) {
  //code below here

  let counterA=0
  let counterB=0
  let counterC=0
  let counterD=0
  let arrJumlahr=[]
  for(let i=0;i<cars.length;i++){
    if (cars[i]=='A'){
      counterA+=1
    }
  }

  for(let i=0;i<cars.length;i++){
    if (cars[i]=='B'){
      counterB+=1
    }
  }
  for(let i=0;i<cars.length;i++){
    if (cars[i]=='C'){
      counterC+=1
    }
  }
  for(let i=0;i<cars.length;i++){
    if (cars[i]=='D'){
      counterD+=1
    }
  }
  let persenA=counterA/cars.length
  let persenB=counterB/cars.length
  let persenC=counterC/cars.length
  let persenD=counterD/cars.length
  arrJumlahr.push(['A',persenA])
  arrJumlahr.push(['B',persenB])
  arrJumlahr.push(['C',persenC])
  arrJumlahr.push(['D',persenD])
  
  var swap=true;
  do{
    swap=false;
    for (let i=0;i<arrJumlahr.length-1;i++){
      if (arrJumlahr[i][1] < arrJumlahr[i+1][1]){
        temp = arrJumlahr[i][1]
        temp2 = arrJumlahr[i][0]
        arrJumlahr[i][1]=arrJumlahr[i+1][1]
        arrJumlahr[i][0]=arrJumlahr[i+1][0]
        arrJumlahr[i+1][1]=temp
        arrJumlahr[i+1][0]=temp2
        swap=true
      }
    }
  }while(swap)
  return arrJumlahr

};

console.log(mostCarsByState(['B', 'D', 'B', 'B', 'A', 'C', 'D']));
/*
  [ 'B',
  42.857142857142854,
  'D',
  28.57142857142857,
  'A',
  14.285714285714285,
  'C',
  14.285714285714285 ]
*/