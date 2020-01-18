/**
 * Buatlah sebuah object dari hewan, yang memiliki beberapa propert
 * - Nama hewan
 * - Habitat hewan
 * - Jumlah kaki hewan
 * - Jenis kelamin dari hewan
 *
 * Setelah membuat object seperti diatas jawablah pertanyaan dibawah ini
 * - Bagaimana cara mendapatkan nama hewan
 * - Bagaimana cara jika saya ingin menambahkan properi baru ke hewan contoh
 *   contoh bagaimana jika saya ingin menambahkan tipe hewan ( unggas, burung, dll)
 * - Dapatkah saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
 * - Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
 * - Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
 *  - Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
 *  - Tuliskanlah built in function yang bisa kita gunakan di dalam object?
 */

 let kucing = {
     'Nama Hewan' : 'kucing',
     habitatHewan : 'darat',
     JumlahKaki : 4,
     JenisKelamin : 'jantan' 
 }

 // - Bagaimana cara mendapatkan nama hewan
 console.log(kucing['Nama Hewan'])
 
 //Bagaimana cara jika saya ingin menambahkan properi baru ke hewan 
 kucing.tipeHewan = 'mamalia'
 

 // saya membuat properti yang berupa sebuah array ke dalam object? Jika iya berikan contoh satu
kucing['Nama Lain'] = ['cat','garong']
console.log(kucing)
console.log('sebelum delete kaki','\n','\n')

//Dapatkah saya menghapus sebuah properti yang sudah ada di dalam sebuah objek? Jika iya berikan contoh satu
delete kucing.JumlahKaki

``

//Dapatkah saya membuat properti yang berupa sebuah object ke dalam object? Jika iya berikan contoh satu
kucing.status = {
    agility : 20,
    healthPoint : 100,
    damage : 2
}

console.log(kucing)

console.log('sebelum delete kaki','\n','\n')
//Dapatkah saya melakukan looping di dalam object? Jika iya berikan contoh satu
for (const key in kucing){
    if (key=='Nama Lain'){
        console.log(`${key} : ${kucing[key]}`)
    }
}

//Tuliskanlah built in function yang bisa kita gunakan di dalam object?
console.log(Object.getOwnPropertyNames(kucing))