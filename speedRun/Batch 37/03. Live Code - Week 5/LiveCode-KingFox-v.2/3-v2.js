/**
 * ===============
 * Remedial Recap
 * ===============
 * 
 * Deskripsi: 
 * Sebuah fungsi 'remedialRecap' akan mengembalikan 
 * Array of Object berisi data student berserta nilai 
 * ujian-ujiannya. Student mendapatkan kesempatan
 * remedial sebanyak maksimal 3x. 
 * Kriteria student yang dapat mengikuti remedial adalah student
 * yang memiliki nilai di antara 60 dan 79.
 * 
 * Asumsi:
 * - Student hanya bisa melakukan remed maksimal 3x 
      untuk setiap mata pelajaran
 * - 1 kali remed student mendapatkan nilai tambahan 5 poin
 * - nilai hasil remed maksimal 80, tidak bisa melebihi nilai
      student yang tidak remed
 * 
 * Contoh:
 *  [{
 *      name: 'Murid 1',
 *      history: 40, 
 *      math: 90,
 *      art: 73
 *    },
 *    {
 *      name: 'Murid 2',
 *      history: 100,
 *      math: 100,
 *      art: 100
 *    }]
 *  Hasil yang diharapkan:
 *  [{ 
 *      name: 'Murid 1',
 *      history: 40 // nilai awal 40, tidak bisa remed
 *      math: 90,
 *      art: [73, 78, 80] // nilai awal 73, 
              // kemudian remed pertama 78,
 *            // kemudian remed kedua 80, max nilai tercapai,
              // remed dilakukan hanya 2x
 *    },
 *    { 
 *      name: 'Murid 2',
 *      history: 100,
 *      math: 100,
 *      art: 100
 *  }]
 *
 * Rules:
 * 1. DILARANG menggunakan built in function apapun kecuali .push() dan .unshift()
 * 2. Output HARUS sesuai dengan contoh yang telah diberikan
*/

function remedialRecap(data) {
    // Write your code here
    
}

var student1 = [
  {
    name: 'Romeo',
    history: 71,
    math: 62,
    art: 100
  },
  {
    name: 'Sierra',
    history: 50,
    math: 100,
    art: 70
  },
  {
    name: 'Alpha',
    history: 100,
    math: 100,
    art: 100
  }
]
console.log(remedialRecap(student1))
/*
 [ { name: 'Romeo',
     history: [ 71, 76, 80 ],
     math: [ 62, 67, 72, 77 ],
     art: 100 },
   { name: 'Sierra', 
     history: 50, 
     math: 100, 
     art: [ 70, 75, 80 ] },
   { name: 'Alpha', 
     history: 100, 
     math: 100, 
     art: 100 } ]
*/