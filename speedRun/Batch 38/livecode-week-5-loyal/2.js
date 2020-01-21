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
 * 1. Dilarang menggunakan built-in function split, slice, splice,
 */

function findMovie(arrMovie) {
  // Tulis kodemu disini
  let res = {}
  let hasil = []
  for (let i = 0 ; i < arrMovie.length; i ++){
    let date=''
    let year=''
    for (let j = 0; j < arrMovie[i][1].length-4; j++){ //untuk looping tgl taun
      date+=arrMovie[i][1][j]
    }   
    for (let k = arrMovie[i][1].length-4; k < arrMovie[i][1].length; k++){
      year+=arrMovie[i][1][k]
    }
    arrMovie[i].unshift(date)
    arrMovie[i].push(year)
  }
  //push year dan date
  console.log(arrMovie)
  for (let a = 0 ; a <arrMovie.length; a++){
    if(res[arrMovie[a][4]] === undefined){
      res[arrMovie[a][4]] = []
      a--
    } else {
      res[arrMovie[a][4]].push({
        date: arrMovie[a][0],
        title: arrMovie[a][1],
        genre: arrMovie[a][3]
      })
    }

  }
  return res
}

var movie1 = [
  ["Suicide Squad",   "3 May 2016",       "Action"], // 0
  ["Interstellar",    "6 June 2018",      "Sci-Fi"], // 1
  ["La La Land",      "24 June 2018",     "Romatic"], // 2
  ["Fast Furious",    "2 January 2019",   "Action"],// 3
  ["IT",              "7 January 2019",  "Horror"], // 4
  ["Justice League",  "14 April 2019",    "Action"], // 5
  ["Lion King",       "20 July 2019",     "Animation"] // 6
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

// var movie2 = [
//   ["Joker", "4 October 2019", "Thriller"],
//   ["Parasite", "24 June 2019", "Drama"],
//   ["Into the Spider-verse", "14 December 2018", "Animation"],
//   ["Avengers: Infinity War", "27 April 2018", "Action"],
//   ["Avengers: Endgame", "26 April 2019 ", "Action"],
//   ["Coco", "22 November 2017", "Animation"],
//   ["Your Name", "7 April 2017", "Animation"]
// ]

// console.log(findMovie(movie2))
// // {
// //   '2017': [
// //     { date: '22 November', title: 'Coco', genre: 'Animation' },
// //     { date: '7 April', title: 'Your Name', genre: 'Animation' }
// //   ],
// //   '2018': [
// //     { date: '14 December', title: 'Into the Spider-verse', genre: 'Animation' },
// //     { date: '27 April', title: 'Avengers: Infinity War', genre: 'Action' }
// //   ],
// //   '2019': [
// //     { date: '4 October', title: 'Joker', genre: 'Thriller' },
// //     { date: '24 June', title: 'Parasite', genre: 'Drama' },
// //     { date: '26 April', title: 'Avengers: Endgame', genre: 'Action' }
// //   ]
// // }