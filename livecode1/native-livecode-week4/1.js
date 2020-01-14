/**
 * ============================
 * Outstanding Students Finder
 * ============================
 *
 * Diberikan array berisi nilai livecode suatu kelas, carilah nilai rata-rata dari kelas tersebut, 
 * lalu carilah student yang mendapatkan nilai diatas rata-rata beserta nilainya.
 *
 * Function getStudents menerima 2 parameter, grades adalah array berisi nilai, dan names adalah array yang berisi
 * nama dari student-student tersebut.
 *
 * Panjang array grades dan names selalu sama, 
 * karena index merepresentasikan student ke - i dengan nama di names[i] dan nilai di grades[i].
 *
 * contoh 
 * nilai: [5, 7, 2, 9, 3, 4] -> rata-rata = 5
 * murid: ["aron", "raka", "fauzan", "rivan", "ulul", "ramadhan"] 
 * 
 * maka murid yang nilai nya di atas rata - rata adalah: 
 * ["raka", "rivan"]
 * 
 * RULES: 
 *  - WAJIB MENGGUNAKAN PSEUDOCODE
 *  - Dilarang menggunakan .reduce .map .filter .indexOf .set .includes
 *
 * [pseudo code ala2]
 * buat kondisi apabila array nama  panjangnya 0 maka akan mereturn -> nama tdk boleh kosong
 *buat juga untuk nilai
 
 buat variabel hasil utk menanmpung array baru (rencananya bikin 2 dimensi [[][]])
push nama kedalam array
dengan cara buat perulangan dan di push satu persatu

buat perulangan i dan j lagi utk push nilai
perulangan i utk cari nilai di hasil, dan j utk grade
lalu push nilai [j] kedalam indeks nilai [i]

setelah itu buat variabel total nilai utk sum semua nilai
terus buat variabel rata2 iisinya total nilai / array length

dan terakhirbuat variabel array result utk push 
if nilai lebih besar dari nilai rata


 * 
 * 
 * 
 */


function getStudents(grades, names) {
  // Your Code here

  if (grades.length==0){
    return ' grades should not be empty'
  }

  if (names.length==0){
    return ' names should not be empty'
  }

  let hasil=[]
  for (let i = 0 ; i < names.length;i++){
    hasil.push([names[i]])
  }
  for (let i = 0 ; i <hasil.length; i++){
    for (let j = 0; j<grades.length; j++){
      
      
    }
    hasil[i].push(grades[i])
  }

let totalNilai=0;
  for (let i = 0; i <grades.length; i++){
    totalNilai=totalNilai+grades[i]
  }
  let avg=totalNilai/grades.length

  let result=[]
  for (let i=0; i <hasil.length; i++){
    if (hasil[i][1]>avg){
      result.push(hasil[i])
    }
  }


return result
}

var grades1 = [10, 9, 8, 7, 6, 8];
var studentNames1 = ['Tony', 'Tifa', 'Cloud', 'Aerith', 'Stark', 'Asd'];
console.log(getStudents(grades1, studentNames1));
// [ 'Tony', 'Tifa' ]

var grades2 = [3, 9, 4, 6];
var studentNames2 = ['Aron', 'Rama', 'Gigih', 'Fauzan'];
console.log(getStudents(grades2, studentNames2));
// [ 'Rama', 'Fauzan' ]

var grades3 = [];
var studentNames3 = ["Rivan", "Raka", "Afif", "Gusti"];
console.log(getStudents(grades3, studentNames3));
// grades should not be empty

var grades4 = [5, 3, 2, 10, 5];
var studentNames4 = [];
console.log(getStudents(grades4, studentNames4));
// student name should not be empty

