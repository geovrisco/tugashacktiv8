/**
Partial Check
-----------
Implementasikan function `partialCheck` untuk menghitung ada berapa kali string yang perlu dicari
terdapat di dalam `str` berdasarkan `partial` yang dicari.
Contoh 1:
input:
  str: 'abcdabcdabc'
  partial: 'abc' ==> berarti mencari partial "abc"
output: found 3 times
Contoh 2:
input:
  str: 'abbccdab'
  partial: 'd' ==> berarti mencari partial "d"
output: found 1 time
Contoh 2:
input:
  str: 'foggycloud'
  partial: 'foggly' ==> berarti mencari partial "foggly"
output: not found
RULES:
 - WAJIB MENYERTAKAN ALGORITMA/PSEUDOCODE
 - DILARANG MENGGUNAKAN REGEX

 START
 1. membuat variabel yang diperlukan
 store counter=0 ->untuk menghitung kondisi yang ditemukan
 store strBaru-> digunakan untuk menapung str, dan nantinya semua teks str akan dijadikan lowercase(ada yang uppercase)

 2. membuat pengulangan untuk mencari kata-perkata dan dimasukkan kondisional if
 if strBaru indeks ke i == partial indeks ke 0 (karena partial adalah 3 suku kata), 
 dan i dimulai dari 0, dan dilooping i+1 = partial 1, dan i+2=partial 2
 maka counter akan ditambahkan.
lalu fungsi akan merturn string kalimat + dengan variabel counter.

*/
function partialCheck(str, partial) {
  let counter=0
  
 
  for(i=0;i<=str.length;i++){
    strBaru=str.toLowerCase()
      if(strBaru[i]==partial[0]&&strBaru[i+1]==partial[1]&&strBaru[i+2]==partial[2]){
        counter+=1
      
    }
  }
return 'found '+counter+' times'
}
console.log(partialCheck('abcdcabdabc', 'abc')); // found 2 times
console.log(partialCheck('zachariah', 'ach')); // found 1 time
console.log(partialCheck('accHghebchg', 'chg')); // found 2 times
console.log(partialCheck('asjekfogiy', 'foy')); // not found