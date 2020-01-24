/**
 * ==============
 * Movie Database
 * ==============
 * 
 * Instruction
 * -----------
 * findMovie adalah sebuah function yang mengelompokkan data film dari input yang diberikan
 * berdasarkan tahun film itu dibuat.
 * 
 * Restrictions
 * ------------
 * 1. input berupa array multidimensional yang setiap entri-nya merupakan sebuah array
 *    dengan format [<nama film>, <Tanggal rilis>, <genre>]
 * 2. Output berupa object dengan key tahun rilis dari masing-masing film
 *    dengan value berupa array of objects dengan format:
 *    { <date (tanggal dan bulan)>, <title>, <genre> }
 * 
 * Rules
 * -----
 * 1. Dilarang menggunakan built-in function split, slice, splice
 */
function findMovie(arrMovie) {
  
    for (let i = 0 ; i < arrMovie.length ; i++){ // looping array film
        var year=''
        var date=''
        // console.log(arrMovie[i][1]) cari year dan dante
        for ( let j = 0; j < arrMovie[i][1].length-4; j++){ //cari date
            date+=arrMovie[i][1][j]
        }

        // console.log(date) cari date
        for ( let k = arrMovie[i][1].length-4; k < arrMovie[i][1].length; k++){ //cari year
            year+=arrMovie[i][1][k]
        }

        arrMovie[i].push(date) // push date kedalam arrMovie
        arrMovie[i].unshift(year) // unshift (taro paling depan)ke arrMovie
    }

    // console.log( arrMovie)

    //looping arrmovie untuk masukin tahun ke obj
  
    let obj = {} // buat object kosong untuk hasil akhir
    for ( let i = 0 ; i <arrMovie.length; i++){ // looping arrMovie yang udah adah year dan datenya
        let tahun =arrMovie[i][0] //arrMoie[i][0]-> tahun pada array urutan ke i, diassign dalam variabel biar gampang
        if (obj[tahun]===undefined){// cek apakah variabel obj ( tipe data :objek)tahun(2017/2016/2018) udah ada atau belum
            obj[tahun]=[] // kalo belum ada buat key tahun kedalam obj
        }

        obj[tahun].push({ // ngepush obj.tahun (bisa 2019 2017 2018) data2 berikut:
            date:arrMovie[i][4], // date
            title:arrMovie[i][1], // judul
            genre:arrMovie[i][3] // genre
        })
    }
    
  

    return obj
}
var movie1 = [
  ["Suicide Squad", "3 May 2016", "Action"],
  ["Interstellar", "6 June 2018", "Sci-Fi"],
  ["La La Land", "24 June 2018", "Romatic"],
  ["Fast Furious", "2 January 2019", "Action"],
  ["IT", "7 January 2019", "Horror"],
  ["Justice League", "14 April 2019", "Action"],
  ["Lion King", "20 July 2019", "Animation"]
]
console.log(findMovie(movie1));
/*
{
  2016: [
    { date: "3 May", title: "Suicide Squad", genre: "Action" }
  ],
  2018: [
    { date: "6 June", title: "Interstellar", genre: "Sci-Fi" },
    { date: "24 June", title: "La La Land", genre: "Romantic" }
  ],
  2019: [
    { date: "2 January", title: "Fast Furious", genre: "Action" },
    { date: "7 January", title: "IT", genre: "Horror" },
    { date: "14 April", title: "Justice League", genre: "Action" },
    { date: "20 July", title: "Lion King", genre: "Animation" }
  ]
}
*/
var movie2 = [
  ["Joker", "4 October 2019", "Thriller"],
  ["Parasite", "24 June 2019", "Drama"],
  ["Into the Spider-verse", "14 December 2018", "Animation"],
  ["Avengers: Infinity War", "27 April 2018", "Action"],
  ["Avengers: Endgame", "26 April 2019 ", "Action"],
  ["Coco", "22 November 2017", "Animation"],
  ["Your Name", "7 April 2017", "Animation"]
]
// console.log(findMovie(movie2))
// {
//   '2017': [
//     { date: '22 November', title: 'Coco', genre: 'Animation' },
//     { date: '7 April', title: 'Your Name', genre: 'Animation' }
//   ],
//   '2018': [
//     { date: '14 December', title: 'Into the Spider-verse', genre: 'Animation' },
//     { date: '27 April', title: 'Avengers: Infinity War', genre: 'Action' }
//   ],
//   '2019': [
//     { date: '4 October', title: 'Joker', genre: 'Thriller' },
//     { date: '24 June', title: 'Parasite', genre: 'Drama' },
//     { date: '26 April', title: 'Avengers: Endgame', genre: 'Action' }
//   ]
// }