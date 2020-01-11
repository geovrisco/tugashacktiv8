/*
1. bikin special case untuk kalo array[0]=='o' dan array[ujung kanan]== 'o' ->langsung return 
2. bikin pengulangan lagi untuk mencari posisi o yang ditengah array (pengulangan i)
    2.1. bikin pengulangan j didalam pengulangan i untuk maju kedepan
        2.1.1 kondisi jika j = ' ' maka jarakMaju++
 cuakss>2.1.2 jika j= x maka dia break; -
        2.1.3 jika ujungnya adalah spasi maka dia set jarakMaju=infinity dan berak;
    2.2. bikin juga pengulangan k untuk mundur sampe indeks awal
        2.2.1 kondisi jika k =' ' maka jarakMundur++
        2.2.2 jika kondisi k = x maka dia break
        2.2.3 jika ujung kirinya itu spasi maka dia set jarak mundur infniti dan break
    2.3 Bikin cek kondisional jika (jarak maju dan jarak mundur nilainya bukan nol)
        2.3.1 cek kondisi mana yg lebih kecil terus direturn
        2.3.3 kalo else kasi return 0

    ????
    profit


*/



function targetTerdekat(arr) {
    // you can only write your code here!
    let jarakMaju = 1;
    let jarakMundur = 1;
    let jarakAkhir=0
    if ( arr[0] == 'o' ){ // spesial awal
        for (let i = 0; i < arr.length; i ++){
                if (arr[i]==' '){

                    jarakAkhir++
                }
                else if ( arr[i] == 'x'){
                    jarakAkhir=jarakAkhir+1
                    return jarakAkhir
                }
        }
 
    } else if (arr[arr.length-1] == 'o'){ // spesial akhir
        for ( let i = arr.length-1; i >=0 ; i--){
            if (arr[i]==' '){
                jarakAkhir++
            }else if ( arr[i] == 'x'){
                jarakAkhir=jarakAkhir+1
                return jarakAkhir
            }
        }
    }
    
    for ( let a = 0; a<arr.length;a++){// seleksi mencari o
        if (arr[a]=='o'){// kalo ketemu o
            for ( let b=a; b<arr.length;b++){// dari o maju cari x atau cari spasi
                if (arr[b]==' '){
                    jarakMaju++ //jarak maju tambahin 1
                }else if (arr[b]== 'x'){//pas x dio break
                    break;
                }else if(arr[arr.length-1]==' '){
                    jarakMaju=Math.pow(10, 1000);
                    break;
                }
            }
            for ( let c = a; c>=0;c--){//dari o mundur sampe indeks 0
                if (arr[c]==' '){
                    jarakMundur++ //men spasi tambain 1 sambil mundur
                }else if (arr[c] == 'x'){
                    break;
                }else if (arr[0]==' '){
                    jarakMundur=Math.pow(10, 1000);
                     break;
                }
            //     // else{
            //     //     return 0
            //     // }
            }
        }
      
        
    }
    // console.log (jarakMaju, ' maju')
    // console.log(jarakMundur, ' mundur')
    if (jarakMaju !== 0 && jarakMundur !==0){
        if (jarakMaju>jarakMundur){
                return jarakMundur
            } 
        else if (jarakMaju<jarakMundur){
                return jarakMaju
            }
            else {
                return 0
            }
    }
  }
  //TEST CASES


  console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])); // 3
  console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])); // 4
  console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])); // 1
  console.log(targetTerdekat([' ', ' ', 'o', ' '])); // 0
  console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])); // 2
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', ' ', 'o'])); // 2