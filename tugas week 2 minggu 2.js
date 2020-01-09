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
    
    
    
    
    
    
    
    
    
    
    