let firstArrived=[['B 1171 BA', 'merah'], ['B 1172 BA', 'kuning'], ['B 1173 BA', 'hitam'], ['B 1174 BA', 'hitam']]


let arraybaru=[]

for(let plat=0; plat<=firstArrived.length-1;plat++){
    
    for (let warna=0;warna<=1;warna++){
        if(firstArrived[plat][warna]=='kuning'){
            arraybaru.push(firstArrived[plat][0],'kuning')
        }
    }

}//cari yang kuning terlebih dahulu

for(let plat=0; plat<=firstArrived.length-1;plat++){
    
    for (let warna=0;warna<=1;warna++){
        if(firstArrived[plat][warna]=='merah'){
            arraybaru.push(firstArrived[plat][0],'merah')
        }
    }

}//cari yang merah


for(let plat=0; plat<=firstArrived.length-1;plat++){
    
    for (let warna=0;warna<=1;warna++){
        if(firstArrived[plat][warna]=='hitam'){
            arraybaru.push(firstArrived[plat][0],'hitam')
        }
    }

}//cari yang mhitam

console.log(arraybaru)





/*

let arraybaru1=[]


for(let i=0; i<=firstArrived.length-1;i++){
    if(firstArrived[i][1]='kuning'){
        arraybaru1.push([firstArrived[i][0],'kuning'])
    }
}

for(let i=0; i<=firstArrived.length-1;i++){
    if(firstArrived[i][1]='merah'){
        arraybaru1.push([firstArrived[i][0],'merah'])
    }
}

for(let i=0; i<=firstArrived.length-1;i++){
    if(firstArrived[i][1]='hitam'){
        arraybaru1.push([firstArrived[i][0],'hitam'])
    }
}


console.log(arraybaru1)
*/



