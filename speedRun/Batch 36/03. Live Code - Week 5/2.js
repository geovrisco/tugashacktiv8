/**
 * ===================
 * Proxytia BUT Object
 * ===================
 * 
 * [DESCRIPTION]
 * Masih ingat dengan proxitia? Kali ini buatlah sebuah function yang mengecek apakah karakter yang kamu buat
 * sudah valid untuk bermain di proxytia.
 * 
 * [INSTRUCTIONS]
 * 1. fungsi menerima 3 parameter: `name, role, weapon`
 * 2. fungsi akan mengecek apakah role dan senjata yang digunakan sudah valid atau belum
 * 
 * [RULES]
 * 1. `Dilarang menggunakan built-in functions`
 * 2. Asumsi semua parameter selalu terisi
 */

function proxytiaObject(name, role, weapon) {
    var proxytia = {
      ksatria: ['pedang', 'tombak'],
      tabib: ['gada'],
      penyihir: ['tongkat']
    }
    var job =Object.getOwnPropertyNames(proxytia)
    // Write your code here
    

    if (role===job[0]){
      if (weapon==proxytia.ksatria[0]||weapon==proxytia.ksatria[1]){
        return `Selamat dantang di Proxytia ${role} ${name}, gunakan ${weapon}mu untuk bermain`
      }else{
        return 'Senjata invalid'
      }
    }

    if (role===job[1]){
      if (weapon==proxytia.tabib[0]){
        return `Selamat dantang di Proxytia ${role} ${name}, gunakan ${weapon}mu untuk bermain`
      }else{
        return 'Senjata invalid'
      }
    }
    if (role===job[2]){
      if (weapon==proxytia.penyihir[0]){
        return `Selamat dantang di Proxytia ${role} ${name}, gunakan ${weapon}mu untuk bermain`
      }else{
        return 'Senjata invalid'
      }
    }

   if (role !==job[0]||role !==job[1]||role !==job[2]){
     return `Role invalid`
   }

    return job

    


    
    
}

console.log(proxytiaObject('Ucup', 'ksatria', 'tombak'))
// Selamat datang di Proxytia ksatria Ucup, gunakan tombakmu untuk bermain.

console.log(proxytiaObject('Icha', 'penyihir', 'pedang'))
// Senjata invalid.

console.log(proxytiaObject('Armedi', 'Programmer', 'tongkat'))
// Role invalid

console.log(proxytiaObject('Stef', 'penyihir', 'tongkat'))
// Selamat datang di Proxytia penyihir Stef, gunakan tongkatmu untuk bermain.