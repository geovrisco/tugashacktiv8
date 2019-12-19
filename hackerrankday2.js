function vowelsAndConsonants(s) {
    var vokal="aiueo";
    var konsonan="qwrtypsdfghjklzxcvbnm";
    
    
    for (let i=0; i<s.length;i++){
        var textvokal="";
        for(let j=0; j<vokal.length;j++){
            if(s[i]==vokal[j]){
                textvokal+=s[i]
                console.log(textvokal)
            }//if buat cetak vokal
        }//akhir j
    }//akhir for i

    for (let i=0; i<s.length;i++){
        var textkonsonan="";
        for(let j=0; j<konsonan.length;j++){
            if(s[i]==konsonan[j]){
                textkonsonan+=s[i]
                console.log(textkonsonan)
            }//if buat cetak vokal
        }//akhir j
    }//akhir for i
    
        }//akhir function


        vowelsAndConsonants('javascriptooo')