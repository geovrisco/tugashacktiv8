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
/*
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

}; */

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

// function mostCarsByState (cars) {
// let arrCars=[]
// for (let i=0;i<cars.length;i++){
//   if (cars[i]===cars[i]){
//     arrCars.push(cars[i])
//   }
// }
// console.log(arrCars + "   <<  array cars")

// let arrResult=[]
// for (let i=0;i<arrCars.length;i++){
//   let counter = 0;
//   for (let j=0;j<arrCars.length;j++){
//     if (arrCars[i]==arrCars[j]){
//       counter=counter+1
//     }
//   }

//   arrResult.push([arrCars[i],counter])
// }
// console.log("hasil array mau di sort")
// console.log(arrResult)

// do {
//   swap = false
//   for (let i=0 ;i<arrResult.length-1;i++){
//     if (arrResult[i][0]> arrResult[i+1][0]){
//       temp=arrResult[i][0]
//       temp1=arrResult[i][1]
//       arrResult[i][0]=arrResult[i+1][0]
//       arrResult[i][1]=arrResult[i+1][1]
//       arrResult[i+1][0]=temp
//       arrResult[i+1][1]=temp1
//       swap = true
//     }
//   }
// }
// while(swap)


// console.log("><><><><><><><>udah sort><><><><><><><><>")
// console.log (arrResult)

// let arrResultUdahDiSort=[]
// for (let i =0;i<arrResult.length-1;i++){
//   if (arrResult[i][0]!==arrResult[i+1][0]){
//     arrResultUdahDiSort.push([arrResult[i][0],arrResult[i][1]/cars.length*100])
//   }
// }
// arrResultUdahDiSort.push([arrResult[arrResult.length-1][0],arrResult[arrResult.length-1][1]/cars.length*100])
// console.log("><><><><><><><>seleksi ><><><><><><><><>")
// return arrResultUdahDiSort
// }

function mostCarsByState(arrInput) {
  let arrOutput = []
  arrOutput.push([arrInput[0]])
  for (let i = 0; i < arrInput.length; i++) {
    var a = false
    for (let j = 0; j < arrOutput.length; j++) {
      if (arrInput[i][0] == arrOutput[j][0]) {
        a = true
      }
    }
    if (a == false) {
      arrOutput.push([arrInput[i]])
    }
  }

  for (let j = 0; j < arrOutput.length; j++) {
    count = 0
    for (let i = 0; i < arrInput.length; i++) {
      if (arrOutput[j][0] === arrInput[i]) {
        count = count + 1
      }
    }
    arrOutput[j].push(count / arrInput.length * 100)
  }

  console.log(arrInput, 'ini array input')
  let concatOutput = []
  for (let i = 0; i < arrOutput.length; i++) {
    concatOutput = concatOutput.concat(arrOutput[i])
  }
  return concatOutput
}

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