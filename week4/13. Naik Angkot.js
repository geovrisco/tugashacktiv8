function naikAngkot(arrPenumpang) {
  rute = ['A', 'B', 'C', 'D', 'E', 'F'];
  //your code here
 var count=0 
 var result = []
 var obj={}

 for (let i = 0 ; i < arrPenumpang.length;i++){
   for (let j = 0; j <rute.length;j++){
     if (arrPenumpang[i][1]==rute[j]){
       for (let k = j; k<rute.length;k++){
            if(arrPenumpang[i][2]!==rute[k]){
              count=count+1
            }else{
              
              break;
            }
       }
     }
   }
   obj ={
     'penumpang':arrPenumpang[i][0],
     'naikDari':arrPenumpang[i][1],
     'tujuan':arrPenumpang[i][2],
     'bayar':(count)*2000
   }
   result.push(obj)
   count=0

 }

 return result
}

//TEST CASE
console.log(naikAngkot([['Dimitri', 'B', 'F'], ['Icha', 'A', 'B']]));
// [ { penumpang: 'Dimitri', naikDari: 'B', tujuan: 'F', bayar: 8000 },
//   { penumpang: 'Icha', naikDari: 'A', tujuan: 'B', bayar: 2000 } ]

console.log(naikAngkot([])); //[]
