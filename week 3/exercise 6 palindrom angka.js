function angkaPalindrome(num) {
    // you can only write your code here!

    function balikKata(num) {
        var teks = num.toString()
        var pembalik = ""
        for (let i = teks.length - 1; i > -1; i--) {
            pembalik += teks[i]
        }
        if (teks === pembalik) {
            return true
        } else {
            return false
        }
    }
    if (balikKata(num==true)){
        let newNum= num + 1
        param = true
        do{
          param = true 
          num+1
           if (balikKata(newNum)==false){
               newNum ++
           }
           if (balikKata(newNum)==true){
               param=false
               return newNum
           }
            
        }
        while(true)
        

         
    }else{
    param = true
    do{
      param = true 
      num+1
       if (balikKata(num)==false){
           num ++
       }
       if (balikKata(num)==true){
           param=false
           return num
       }
        
    }
    while(true)
}


}

// TEST CASES
console.log(angkaPalindrome(8)); // 9
console.log(angkaPalindrome(10)); // 11
console.log(angkaPalindrome(117)); // 121
console.log(angkaPalindrome(175)); // 181
console.log(angkaPalindrome(1000)); // 1001
console.log(angkaPalindrome(1004)); // 1001