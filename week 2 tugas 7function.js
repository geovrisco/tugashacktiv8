
function shoutOut(){
    return 'Halo Function!'
    }

console.log(shoutOut())



/*
 BUATLAH KODE FUNCTION DISINI
*/

function calculateMultiply(num1,num2){
    return num1*num2
}

var num1 = 5;
var num2 = 6;

var hasilPerkalian = calculateMultiply(num1,num2);
console.log(hasilPerkalian); // Menampilkan angka 30

/*
 BUATLAH KODE FUNCTION DISINI
*/

function processSentence(paramName,paramAge,padamAddress,paramHobby){
    return 'Nama saya '+paramName+', umur saya '+paramAge+' tahun, alamat saya di '+padamAddress+' dan saya punya hobby yaitu '+paramHobby
}

var name = "Agus";
var age = 30;
var address = "Jln. Malioboro, Yogjakarta";
var hobby = "gaming";

var fullSentence = processSentence(name,age,address,hobby);
console.log(fullSentence); // Menampilkan "Nama saya Agus, umur saya 30 tahun, alamat saya di Jln. Malioboro, Yogjakarta, dan saya punya hobby yaitu gaming!"
