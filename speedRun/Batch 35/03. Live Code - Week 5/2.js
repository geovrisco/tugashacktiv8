/*
============
rapotAsrama
============
rapotAsrama adalah sebuah fungsi yang menerima parameter berupa array of object.
Function akan menerima sebuah parameter array of object dengan format:
  [
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    { nama: <nama murid>, nilai: <nilai murid>, asrama: <nama asrama>},
    ...
  ]
Data di atas merupakan campuran seluruh nilai murid dari asrama manapun.
Function akan memproses array of object tersebut untuk membuat sebuah rapot dalam bentuk array of object dengan format:
  [
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    { asrama: <nama asrama>, lulus: <array berisi nama murid yg lulus>, gagal: <array berisi nama murid yg gagal> },
    ...
  ]
Data yang diharapkan merupakan akumulasi murid yang lulus dan tidak dari setiap asrama.
Standard kelulusan adalah minimum 70.
*/

function rapotAsrama(students) {
    // Write your code here
  
   let res=[]
   let group=[students[0].asrama]
   for (let i = 1 ; i < students.length;i++){
    var flag=true
    for (let j =0; j < group.length;j++){
      if (group[j]===students[i].asrama){
        flag=false
      }
    }
    if (flag==true){
      group.push(students[i].asrama)
    }
   }

   for (let a =0; a < group.length;a++){
     res.push({
       asrama : group[a],
       gagal :[],
       lulus:[]
     })
   }

   for (let j=0;j<res.length;j++){
     var arrgagal=[]
     var arrlulus=[]
     for (let k=0; k < students.length;k++){
       if (res[j].asrama===students[k].asrama){
         if (students[k].nilai<70){
           arrgagal.push(students[k].nama)
         }else if (students[k].nilai>=70){
           arrlulus.push(students[k].nama)
         }
       }
     }
     res[j].gagal.push(arrgagal)
     res[j].lulus.push(arrlulus)
   }

   
   return res
    
}


var data = [
  { nama: 'Harry Potter', nilai: 80, asrama: 'Griffindor' },
  { nama: 'Cho Chang', nilai: 60, asrama: 'Ravenclaw' },
  { nama: 'Pansy Parkinson', nilai: 70, asrama: 'Slyterin' },
  { nama: 'Dean Thomas', nilai: 50, asrama: 'Griffindor' },
  { nama: 'Ginny Weasley', nilai: 10, asrama: 'Griffindor' },
  { nama: 'Gregory Goyle', nilai: 10, asrama: 'Slyterin' },
  { nama: 'Penelope Clearwater', nilai: 10, asrama: 'Ravenclaw' },
  { nama: 'Tom Marvolo Riddle', nilai: 90, asrama: 'Slyterin' },
];

console.log(rapotAsrama(data));

/* 
[
  {
    asrama: 'Griffindor',
    gagal: ['Dean Thomas', 'Ginny Weasley'],
    lulus: ['Harry Potter']
  },
  {
    asrama: 'Ravenclaw',
    gagal: ['Cho Chang', 'Penelope Clearwater'],
    lulus: []
  },
  {
    asrama: 'Slyterin',
    gagal: ['Gregory Goyle'],
    lulus: ['Pansy Parkinson', 'Tom Marvolo Riddle']
  }
]
*/