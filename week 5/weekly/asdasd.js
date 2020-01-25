let objek = {
    attack:20,
    defend:35,
    agi:444,
    'level ganteng': [
        { namaToko: 'BobaFett', harga: 21250 },
     { namaToko: 'BobaFest', harga: 16250 },
     { namaToko: 'ChatTime', harga: 18900 },
     { namaToko: 'Kokumi', harga: 16200 }
    ]
}

console.log(objek)

function sortMurah (array){
    for (let i = 0 ; i < array.length ; i++){
        for (let j = i+1; j <array.length; j++){
            if (array[i].harga>array[j].harga){
                temp=array[i]
                array[i]=array[j]
                array[j]=temp
            }
        }
    }
    return array
}
sortMurah(objek['level ganteng'])
console.log(objek)