/**
 * ===================
 * What should I ride
 * ===================
 *
 * Angkot merupakan salah satu angkutan umum yang sangat populer di Indonesia, dan setiap angkot memiliki rutenya masing masing.
 * Bayangkan kalian ingin berpergian dari tempat anda berada sampai tujuan anda.
 *  Buatlah sebuah fungsi yang akan menampilkan angkot mana saja yang harus kita naikin untuk mencapai tujuan kita
 *  dan jarak yang kita tempuh untuk mencapai tujuan.
 *
 * Fungsi ini akan menerima dua parameter:
 * - angkot -> list angkot yang tersedia
 * - source -> tujuan awal dari pengguna
 * - destination -> tujuan akhir dari pengguna
 *
 * Asumsi:
 * - Tidak ada angkot yang memiliki rute tujuan yang sama
 *
 * Contoh angkot
 * var angkot = [
 *   {
 *     name: 'Angkot 01',
 *     from: 'Pondok Indah',
 *     to: 'Gandaria City',
 *     distance: 100
 *   },
 *   {
 *     name: 'Angkot 02',
 *     from: 'Gandaria City',
 *     to: 'Palmerah',
 *     distance: 200
 *   },
 *   {
 *     name: 'Angkot 03',
 *     from: 'Palmerah',
 *     to: 'Sudirman',
 *     distance: 300
 *   },
 *   {
 *     name: 'Angkot 04',
 *     from: 'Sudirman',
 *     to: 'Manggarai',
 *     distance: 400
 *   },
 *   {
 *     name: 'Angkot 05',
 *     from: 'Manggarai',
 *     to: 'Bekasi',
 *     distance: 10000
 *   }
 * ]
 *
 * findRoute(angkot, 'Pondok Indah', 'Gandaria City')
 *
 * Input
 * {
 *  distance: 100,
 *  routes: [
 *     {
 *      name: 'Angkot 01',
 *      from: 'Pondok Indah',
 *      to: 'Gandaria City',
 *      distance: 100
 *     },
 *   ]
 * }
 *
 */

function findRoute(angkot, source, destination) {
  // Where happiness start
  let totalDistance = 0
  res = {
    distance: totalDistance,
    routes : []
  }
  
  for (let i = 0 ; i < angkot.length; i ++){
    if (source === angkot[i].from){
        res.routes.push(angkot[i])
        // totalDistance=totalDistance+angkot[i].distance
          for (let j = 0 ; j < angkot.length; j++){
            if (destination !== angkot[j].to){
              res.routes.push(angkot[j])
              totalDistance=totalDistance+angkot[j].distance
            }
            if (destination === angkot[j].to){
              res.routes.push(angkot[j])
              totalDistance=totalDistance+angkot[j].distance
              break
            }
          }
    }
  }
  let objfinal = {
    distance:totalDistance,
    routes:res.routes
  }

 

  return objfinal
}

var angkot = [
  {
    name: 'Angkot 01',
    from: 'Pondok Indah',
    to: 'Gandaria City',
    distance: 100
  },
  {
    name: 'Angkot 02',
    from: 'Gandaria City',
    to: 'Palmerah',
    distance: 200
  },
  {
    name: 'Angkot 03',
    from: 'Palmerah',
    to: 'Sudirman',
    distance: 300
  },
  {
    name: 'Angkot 04',
    from: 'Sudirman',
    to: 'Manggarai',
    distance: 400
  },
  {
    name: 'Angkot 05',
    from: 'Manggarai',
    to: 'Bekasi',
    distance: 10000
  }
]

console.log(findRoute(angkot, 'Pondok Indah', 'Gandaria City'))
// {
//   distance: 100,
//   routes: [
//     {
//       name: 'Angkot 01',
//       from: 'Pondok Indah',
//       to: 'Gandaria City',
//       distance: 100
//     }
//   ]
// }

console.log(findRoute(angkot, 'Palmerah', 'Manggarai'))

// {
//   distance: 700,
//   routes: [
//     {
//       name: 'Angkot 03',
//       from: 'Palmerah',
//       to: 'Sudirman',
//       distance: 300
//     },
//     {
//       name: 'Angkot 04',
//       from: 'Sudirman',
//       to: 'Manggarai',
//       distance: 400
//     }
//   ]
// }

console.log(findRoute(angkot, 'Pondok Indah', 'Bekasi'))
//  {
//   distance: 11000,
//   routes: [
//     {
//       name: 'Angkot 01',
//       from: 'Pondok Indah',
//       to: 'Gandaria City',
//       distance: 100
//     },
//     {
//       name: 'Angkot 02',
//       from: 'Gandaria City',
//       to: 'Palmerah',
//       distance: 200
//     },
//     {
//       name: 'Angkot 03',
//       from: 'Palmerah',
//       to: 'Sudirman',
//       distance: 300
//     },
//     {
//       name: 'Angkot 04',
//       from: 'Sudirman',
//       to: 'Manggarai',
//       distance: 400
//     },
//     {
//       name: 'Angkot 05',
//       from: 'Manggarai',
//       to: 'Bekasi',
//       distance: 10000
//     }
//   ]
// }
