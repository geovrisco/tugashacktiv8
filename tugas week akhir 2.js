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



/**
 *	=========
 *	Minecraft
 * 	=========
 * 	Bantulah steve untuk mengumpulkan berbagai macam mineral yang ada di World 66785.
 *
 * Terdapat 5 jenis mineral di dalam game Minecraft yang direpresentasikan dengan :
 *    Mineral             Harga ($)
 * copper : "c"             20
 * iron   : "i"             30
 * silver : "s"             40
 * diamond: "d"            1000
 * gold   : "g"             80
 *
 *
 * Mineral-mineral ini terpendam di dalam tambang dan dipisahkan oleh tanah yang direpresentasikan dengan #.
 * Bantu Steve mengimplementasikan function mineCraft yang menerima input berupa tambang dalam bentuk string dan akan mengoutput
 * harga dari semua batuan yang ada di tambang tersebut.
 * selain mineral di atas tidak masuk hitungan
 *
 * contoh:
 * 1. input  : #g######s
 *    output : 120 -> 1 gold = 80, 1 silver = 40 maka outputnya 120
 * 2. input: ############
 *    output: Tidak ada mineral sama sekali
 * 3. input: #sdgipc##
 *    output: 1170 
 *  
 * 1. membuat variabel2 le-mineral-e
 * 
 * store c =20
 * store i =30
 * store s=40
 * store d=1000
 * store g=80
 * 
 * 2. membuat variabel penampungan
 * store hasilTambang
 * store hasilTambangSteve
 * 3. membuat pengulangan dengan pertambahan 1 untuk mengecek nilai/hasil tambang
 * for (let i=0; i<=tambang.length; i++){
 * if (tambang[i]=='#')
 * { hasilTambang = hasiltambang + 0}
 * else if(tambang)
 * }dan seterusnya
 * 
 * membuat kondisi terakhir untuk menilai total pendapatan steve
 * if hasilTambang=0
 * hasilTambangSteve='tidak ada hasil sama sekali'
 * dan keluar function
 * 
 * else if hasilTambang>0
 * hasilTambangSteve=hasilTambang
 * dan kelaur function
 *
 *
 *
 *
 */

function mineCraft(tambang) {
let hasiltambang=0;
let c =20
 let iron =30
 let s=40
 let d=1000
 let g=80
let hasiltambangSteve

 for (let i=0; i<=tambang.length; i++){
     if (tambang[i]=='#'){
         hasiltambang=hasiltambang+0;
     }else if (tambang[i]=='c'){
         hasiltambang=hasiltambang+c;
     }else if (tambang[i]=='i'){
         hasiltambang=hasiltambang+iron;
     }else if (tambang[i]=='s'){
         hasiltambang=hasiltambang+s;
     }else if (tambang[i]=='d'){
         hasiltambang=hasiltambang+d;
     }else if(tambang[i]=='g'){
         hasiltambang=hasiltambang+g;
     }
 }
if (hasiltambang==0){
    hasiltambangSteve='Tydac ada mineral sama sekali'
    return hasiltambangSteve;
}else if (hasiltambang>0){
    hasiltambangSteve=hasiltambang
    return hasiltambangSteve;
}

}

console.log(mineCraft('#g####c##s')); //120
console.log(mineCraft('######w###q###')); //Tidak ada mineral sama sekali
console.log(mineCraft('#sdgicp##')); //1170
console.log(mineCraft('')); //Tidak ada mineral sama sekali










