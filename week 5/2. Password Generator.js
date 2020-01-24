function changeVocals (str) {
  //code di sini
  let tampung = ''
  let unicode=''
  let angkaUnicode = 0
  for (let i = 0; i < str.length ; i++){
     if (str[i]==='a' || str[i]==='u' || str[i]==='i'|| str[i]==='e'|| str[i]==='o' ||str[i]==='A' ||str[i]==='I'||str[i]==='U'||str[i]==='E'||str[i]==='O')
     {
      angkaUnicode=str.charCodeAt(i)
      angkaUnicode=angkaUnicode+1
      unicode=String.fromCharCode(angkaUnicode)
      tampung+=unicode
     }
     else {
       tampung+=str[i]
     }
     
  }

  return tampung
}

// console.log(changeVocals('abc'))
function reverseWord (str) {
  //code di sini
  let tampung =''
  for (let i = str.length-1 ; i>=0;i--){
    tampung+=str[i]
  }
  return tampung
}
// console.log(reverseWord('abcde'))

function setLowerUpperCase (str) {
  //code di sini
  let tampung = ''
  for (let i = 0; i < str.length;i++){
    if (str[i]===str[i].toLowerCase()){
      tampung+=str[i].toUpperCase()
    } else if (str[i]===str[i].toUpperCase()){
      tampung+=str[i].toLowerCase()
    }
  }
  return tampung
}
// console.log(setLowerUpperCase('AbCd'))

function removeSpaces (str) {
  //code di sini
  tampung=''
  for (let i = 0 ; i < str.length; i ++){
    if (str[i]!==' '){
      tampung+=str[i]
    }
  }
  return tampung
}
// console.log(removeSpaces('adi budi'))


function passwordGenerator (name) {
  //code di sini
  if (name.length<5){
      return 'Minimal karakter yang diinputkan adalah 5 karakter'
  }
 let hapusSpasi=removeSpaces(name)
let besarKeCil=changeVocals(hapusSpasi)
let balikKata=reverseWord(besarKeCil)
let capsl=setLowerUpperCase(balikKata)

  return capsl
}

console.log(passwordGenerator('Sergei Dragunov')); // 'VPNVGBRdJFGRFs'
console.log(passwordGenerator('Dimitri Wahyudiputra')); // 'BRTVPJDVYHBwJRTJMJd'
console.log(passwordGenerator('Alexei')); // 'JFXFLb'
console.log(passwordGenerator('Alex')); // 'Minimal karakter yang diinputkan adalah 5 karakter'



  