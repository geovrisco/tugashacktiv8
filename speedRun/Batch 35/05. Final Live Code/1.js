/*
******
Cari Student
******


Function studentFinder menerima input berupa string berisi nama-nama student sebuah batch, dipisahkan oleh " " atau ",".
Function ini mengeluarkan output berupa nama student dengan jumlah huruf terpendek.
Apabila ada 2 nama student yang terpendek, maka function akan mengeluarkan nama yang berada di posisi sebelah kiri terlebih dahulu!


[RULES]
  - Dilarang menggunakan built-in function .split

*/

function studentFinder(students) {
  // your code here
  let arr = [];
  var temp = "";
  for (let i = 0; i <= students.length; i++) {
    if (students[i] == " " || students[i] == ",") {
      arr.push(temp);
      temp = "";
    } else if (
      students[i] != " " ||
      students[i] != "," ||
      students[i] == undefined
    ) {
      temp += students[i];
    }
  }
  temp = arr[0].length;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length < temp) {
      temp = arr[i];
    }
  }
  return temp;
}

console.log(studentFinder("Hanif Ranev Tio Tirta Igor Yusril Tia Titania")); // Tio
console.log(studentFinder("Yogi Hengky Trina An Hamzah")); // An
console.log(studentFinder("Huday,Kay,Trisna,Kinan,Hazman")); // Kay
