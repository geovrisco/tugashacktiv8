/*

  Seorang user spotify ingin mengetahui lagu apa saja yang dia putar selama seminggu terakhir diurutkan dari paling jarang diputar

  Tugas kamu adalah membuat function sortPlaylist yang menerima inputan sebuah array satu dimensi berisi data lagu. 
  Output dari function tersebut adalah array 2 dimensi yang menampilkan judul lagu dan jumlah pemutaran terurut dari 
  jumlah pemutaran yang paling sedikit.

  INPUT:
    ['Senorita', 'Senorita', 'I Love You 3000', 'A Whole New World', 'Senorita', 'I Love You 3000', 'Senorita']

  OUTPUT:
    [ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

  RULES:
   - DILARANG MENGGUNAKAN BUILT IN FUNCTION APAPUN KECUALI .push()
*/

function sortPlaylist(playlist) {
  // your code here
  var obj = {};
  for (let i = 0; i < playlist.length; i++) {
    if (obj[playlist[i]] == undefined) {
      obj[playlist[i]] = 1;
    } else {
      obj[playlist[i]]++;
    }
  }

  let result = [];
  for (var key in obj) {
    result.push([key, obj[key]]);
  }

  let temp = result[0];
  for (let i = 0; i < result.length - 1; i++) {
    for (let j = 0; j < result.length - 1 - i; j++) {
      if (result[j] > result[j + 1]) {
        temp = result[j];
        result[j] = result[j + 1];
        result[j + 1] = temp;
      }
    }
  }

  return result;
}

console.log(
  sortPlaylist([
    "Senorita",
    "Senorita",
    "I Love You 3000",
    "A Whole New World",
    "Senorita",
    "I Love You 3000",
    "Senorita"
  ])
);

//[ [ 'A Whole New World', 1 ], [ 'I Love You 3000', 2 ], [ 'Senorita', 4 ] ]

console.log(
  sortPlaylist([
    "Donna Donna",
    "Top of The World",
    "Donna Donna",
    "Top of The World",
    "Top of The World",
    "Location Unknown",
    "Location Unknown"
  ])
);

//[ [ 'Donna Donna', 2 ], [ 'Location Unknown', 2 ], [ 'Top of The World', 3 ] ]

console.log(sortPlaylist([])); // []
