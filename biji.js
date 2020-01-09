var input = [
                ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
                ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
                ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
                ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
            ]



function dataHandling(arr){
    for (let i=0;i<=arr.length-1;i++){
        let nomorId=arr[i][0];
        let namaLengkap=arr[i][1];
        let ttl=arr[i][2]+" "+ arr[i][3];
        let hobi=arr[i][4];
        console.log('Nomor Id: '+nomorId+'\n'+'Nama Lengkap : '+namaLengkap+'\n'+'TTL : '+ttl+'\n'+'Hobi : '+hobi+'\n')
        }
         
}

dataHandling(input)