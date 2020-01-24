function wcCowok (n) {

    let hasil=[]
    for (let i = 1 ; i <= n ; i++){
        hasil.push([ ])
    }
    hasil[0].push(1)
    



    for (let i = 2; i <=n-1; i++){
        hasil[Math.floor(n/2)].push(n)
        hasil
    }
    return hasil

    

}

console.log(wcCowok(3))