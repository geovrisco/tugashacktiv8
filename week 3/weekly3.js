/**
 * ===========
 * MINE TYCOON
 * ===========
 *
 * Anggap Array 2 dimensi ini adalah sebuah tambang. Row merepresentasikan lantai dari tambang tersebut (dari lantai 0 sampai lantai N kebawah)
 * Tambang ini memiliki 4 mineral yang menjadi kekayaan alam tambang tersebut yaitu:
 *
 * - copper
 * - silver
 * - gold
 * - diamond
 *
 * Step adalah jumlah langkah yang dapat di capai oleh si penambang, untuk menambang di penambangan.
 *
 * Jika penambang mendapatkan salah satu dari 4 mineral di atas, maka penambang akan menyimpannya.
 * Function akan mereturn mineral yang pernah di dapatkan oleh si penambang selama menambang.
 * Output wajib berurutan mulai dari copper, silver, gold, lalu terakhir diamond.
 *
 * contoh:
 * #mine
 * [
 *  ['#', 'c', 's', '#', '#', '#', '#'],
 *  ['d', '#', 'c', '#', 'd', '#', '#'],
 *  ['#', '#', '#', 'g', '#', '#', '#']
 * ]
 * #steps: 11
 *
 * maka function akan mereturn:
 *  mineral:
 *    [[2, cooper], [1, silver], [1, diamond]]
 *
 *
 * RULES:
 * - Wajib menuliskan Pseudocode!
 * - Dilarang menggunakan built-in function .reduce .filter .map .indexOf .lastIndexOf
    
    [start]
    membuat variabel penampung 
 *
 */


function mineCraft(mine, steps) {
    steps=steps+1
    let hasil=[]
    let countCopper=0
    let countSilver=0
    let countGold=0
    let countDiamond=0
   

    for (let i = 0; i<mine.length && steps>=0;i++){
        if (steps==0){
            break;
        }

        for (let j=0; j<mine[i].length && steps>=0; j++){
            steps=steps-1
            if (steps==0){
                break;
            }
            if (mine[i][j]=="#"){
                
                if (steps==0){
                    break;
                }
            }else if (mine[i][j]=='c'){
                countCopper=countCopper+1
                
                if (steps==0){
                    break;
                }
            }else if (mine[i][j]=='s'){
                countSilver=countSilver+1
                
                if (steps==0){
                    break;
                }
            }else if (mine[i][j]=='g'){
                countGold=countGold+1
                
                if (steps==0){
                    break;
                }
            }else if (mine[i][j]=='d'){
                countDiamond=countDiamond+1
                
                if (steps==0){
                    break;
                }
            }if (steps==0){
                break;
            }
        }
    }
    if (countCopper>0){
        hasil.push([countCopper,'Copper'])
    }
    if (countSilver>0){
        hasil.push([countSilver,'Silver'])
    }
    if (countGold>0){
        hasil.push([countGold,'Gold'])
    }
    if (countDiamond>0){
        hasil.push([countDiamond,'Diamond'])
    }
    
    return hasil
}
var mine1 = [
	['#', 'h', 's', '#', '#', '#', 'g'],
	['u', '#', 'c', '#', 'd', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine1, 10));
// [[1, copper] [1, silver] [1, gold]]
var mine2 = [
	['#', '#', '#', '#', '#', 'w', '#'],
	['r', '#', 'c', '#', 'd', '#', '#'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#'],
	['#', '#', '#', '#', '#', '#', '#']
];
console.log(mineCraft(mine2, 20));
// [[2, copper], [1, diamond]]
var mine3 = [
	['d', 'c', '#', 's', '#', 'w', '#'],
	['r', 'b', 'c', '#', '#', '#', 'g'],
	['#', 't', '#', 'c', '#', '#', '#'],
	['#', '#', 's', 'g', '#', '#', '#']
];
console.log(mineCraft(mine3, 94));
// [ [ 3, 'copper' ], [ 2, 'silver' ], [ 2, 'gold' ], [ 1, 'diamond' ] ]