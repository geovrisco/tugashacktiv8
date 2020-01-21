/**
 * ===================================
 * Seleksi masuk Universitas HacktiFox
 * ===================================
 * 
 * Function checkAdmission akan mengecek apakah seseorang pendaftar bisa menjadi mahasiswa baru dari universitas HacktiFox.
 * Mahasiswa baru direpresentasikan dengan object dengan parameter:
 * - `name`  : Nama dari calon mahasiswa
 * - `dob`   : Tanggal lahir dari calon mahasiswa
 * - `date`  : Tanggal mahasiswa tersebut mendaftar ke universitas ini
 * - `scores`: Array berisi nilai-nilai dari mahasiswa tersebut, dengan urutan:
 *             [nilai_matematika, nilai_bahasa_indonesia, nilai_bahasa_inggris, nilai_IPA]
 * 
 * Syarat masuk ke universitas ini adalah mahasiswa memperoleh nilai rata-rata >= 70.
 * Masing-masing pendaftar mendapatkan student id, walaupun mereka gagal diterima di universitas ini.
 * Student id dibuat dengan format:
 * 
 * [2 digit pertama tahun pendaftaran] + [2 digit bulan pendaftaran] + [2 digit terakhir tahun kelahiran] + [2 digit bulan kelahiran]
 * contoh:
 * {
 *  name: Hanif,
 *  dob: '10-05-1997',
 *  date: '14-01-2020',
 *  scores: [60,60,70,60]
 * }
 * 
 * maka student id dia adalah:
 * 20019705
 * [20][01][97][05]
 * 
 * 
 * Function akan menerima input berupa object student, lalu akan mengoutput object dengan format: 
 *  { 
 *     name: 'Hanif',
 *     id  : '20019705',
 *     status: 'rejected'
 *  }
 * 
 * -status: bisa berisi 'accepted' atau 'rejected', rejected bila nilai rata-rata <70, dan accepted bila nilainya >=70.
 * 
 * 
 * Rules:
 * - Dilarang menggunakan built-in function selain .push()
 *
 */
function getStudentId (input, sep){

  let res=''
  for (let i = 0; i < input.dob.length; i++){

  }


}

function checkAdmission (student) {
  // your code here

  let str1=`${student.date[student.date.length-4]}${student.date[student.date.length-3]}`
  let str2=`${student.date[student.date.length-7]}${student.date[student.date.length-6]}`
  let str3=`${student.dob[student.dob.length-4]}${student.dob[student.dob.length-3]}`
  let str4=`${student.dob[student.dob.length-7]}${student.dob[student.dob.length-6]}`
  let varid=`${str1}${str2}${str3}${str4}`



  let rata=0
  for (let i = 0; i < student.scores.length; i++){
    rata=rata+student.scores[i]
  }
  let avg =rata/student.scores.length

  let res = {
    name:student.name,
    id:varid,
    
  }

  if (avg>=70){
    res.status='accepted'
  }else if (avg<70){
    res.status='rejected'
  }

    


    return res
    
}
  
//test-cases
console.log(checkAdmission({
    name: "Rafif",
    dob: "15-11-1997",
    date: '16-01-2020',
    scores: [70,40,50,90]
}));
//{ name: 'Rafif', id: '20019711', status: 'rejected' }

console.log(checkAdmission({
    name: "Akbar",
    dob: "14-02-1995",
    date: '16-12-2019',
    scores: [40,70,90,90]
}))
//{ name: 'Akbar', id: '19129502', status: 'accepted' }


console.log(checkAdmission({
  name: 'Akbar',
  dob: '14-02-1995',
  date: '16-12-2019',
  scores: [40,70,90,90]
}))
//{ name: ‘Akbar’, id: ‘20129502’, status: ‘accepted’ }