/*
------------
LOST NUMBERS
------------
PROBLEM
=======
	lostNumbers adalah sebuah function yang akan menerima tiga parameter.
	Tiga parameter tersebut adalah tiga angka yang berbeda.
	Function akan mengembalikan setiap angka diantara angka pada tiga parameter tersebut, dari nilai parameter terkecil ke parameter terbesar
	kecuali angka yang di input pada parameter
Contoh:
	first = 6, second = 1, third = 3
	terbesar adalah 6, terkecil adalah 1,
	maka function mengembalikan urutan angka secara berurutan seperti:
	2, 4, 5

Jika tidak ada angka yang ditampilkan, maka output "Tidak ada angka sama sekali".

RULES
=====
- Wajib menggunakan pseudocode sebelum memulai kode
*/

//Pseudocode
/**
 *1.    membuat 3 parameter untuk mencari/membandingkan data yang terbesar dan terkecil 
        store numFirst
        store numSecond
        store numThird

 2.     membuat variabel penampungan nilai terbesar
        store numMax
        membuat variabel penampungan nilai terkecil
        store numMin
        membuat variabel penampungan nilai tengah
        store numMid
        membuat variabel penampungan bilangan lost number
        stor lostNum

3.      mencari masing2 nilai

        memastikan data yang diinput nilainya tidak sama satu sama lain dengan if
        if numFirst == numSecond && numFirst== numThird
        return tidak ada angka sama sekali
        if numSecond == numFirst && numSecond== numThird
        return tidak ada angka sama sekali
        if numThird == numSecond && numThird== numFirst
        return tidak ada angka sama sekali

        membandingkan parameter dengan menggunakan if untuk mencari nilai terbesar
        if numFirst > numSecond && numFirst > numThird 
        (numMax=numFirst)
        else if numSecond>numFirst && numSecond> numThird
        (numMax=numSecond)
        else if numThird > numSecond && numThird >numFirst 
        (numMax=numThird)

        membandingkan parameter dengan menggunakan if lagi untuk mencari nilai terkecil
        if numFirst< numSecond && numFirst<numThird
        (numMin=numFirst)
        else if numSecond < numFirst&& numSecond<numthird
        (numMin=numFirst)
        else if numThird < numFirst && numthird<numSecond
        (numMin=numThird)


        membandingkan parameter dengan menggunakan if lagi (lagi) untuk mencari nilai tengah
        if numFirst !== numMax && numFirst!==numMin
        (numMid=numFirst)
        if numSecond !== numMax && numFirst!==numMin
        (numMid=numSecond)
        if numThird !== numMax && numFirst!==numMin
        (numMid=numThird)

    4.  menggunakan pengulangan untuk menuliskan bilangan yang hilang
        dengan kondisi numMin sebagai nilai i/counter awal, numMax sebagai kondisi for untuk berhenti
        dan memasukkan if untuk mengecek apakah bilangan tersebut adalah benar bilangan yang hilang, bila bilangan tsbt sama dengan max/min/mid
        maka sistem akan menambahkan string kosong.
        bila nilainya berbeda maka akan diselipkan string i
        
    
       for(let i = numMin; i<=numMax;i++){
        if(i ==numMin && i==numMax && i==nummid){
             lostnum+="tidak ada angka sama sekali"
             return lostnum
         } else if (i ==numMin || i==numMax && i==nummid){
             lostnum+=""
         } else if (i !==numMin && i!==numMax && i!==nummid)
             {lostnum+=i
                lostnum+=" "
            }

             
             
         }
    
            }
        }

 *  
 * 
 *
 */

function lostNumbers(first, second, third) {
    let numFirst = first;
    let numSecond=second;
    let numThird=third;
    let numMax=0;
    let numMin=0;
    let nummid=0;
    let lostnum=""

    if (numFirst == numSecond && numFirst ==numThird){
        lostnum='tidak ada angka sama sekali'
        
    }else if (numSecond==numFirst && numSecond ==numThird){
        lostnum='tidak ada angka sama sekali'
        
    }else if (numThird==numSecond && numThird==numFirst){
        lostnum='tidak ada angka sama sekali'
        
    }

  
    if (numFirst > numSecond && numFirst > numThird) {
        numMax=numFirst
    } else if (numSecond > numFirst && numSecond > numThird){
        numMax=numSecond
    }else if (numThird > numSecond && numThird >numFirst){ 
        numMax=numThird
    }

    if (numFirst < numSecond && numFirst < numThird) {
        numMin=numFirst
    } else if (numSecond < numFirst && numSecond < numThird){
        numMin=numSecond
    }else if (numThird < numSecond && numThird < numFirst){ 
        numMin=numThird
    }

    if (numFirst !== numMax && numFirst!==numMin){
        nummid=numFirst
    }
    else if (numSecond !== numMax && numSecond!==numMin){
        nummid=numSecond
    }
    else if (numThird !== numMax && numThird!==numMin){
        nummid=numThird
    }
    
    if (numMin+1==nummid && numMin+2==numMax){
        lostnum='tidak ada angka sama sekali'
        return lostnum
    }


    for(let i = numMin; i<=numMax;i++){
        if(i ==numMin && i==numMax && i==nummid){
             lostnum+="tidak ada angka sama sekali"
             return lostnum
         } else if (i ==numMin || i==numMax && i==nummid){
             lostnum+=""
         } else if (i !==numMin && i!==numMax && i!==nummid)
             {lostnum+=i
                lostnum+=" "
            }

             
             
         }
         return lostnum;

}

console.log(lostNumbers(1, 3, 5));
// // 2, 4

console.log(lostNumbers(4, 6, 2));
// // 3, 5

console.log(lostNumbers(100, 108, 105));
// // 101, 102, 103, 104, 106, 107

console.log(lostNumbers(6, 5, 3));
// // 4

console.log(lostNumbers(3, 1, 2));
// Tidak ada angka sama sekali

console.log(lostNumbers(1, 1, 1));
// Tidak ada angka sama sekali

