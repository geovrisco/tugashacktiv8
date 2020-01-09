function balikKata(kata) {
  // you can only write your code here!
    let str=""
    let stra=""
  for (let i=0;i<kata.length;i++){
   
    for (let j=0; j<kata.length;j++){
        if ( i%j===0 && j!==i){
            str+=kata[j]
        }
    }
   
    


  }
return str
}

// TEST CASES
// console.log(balikKata('0123456789')); // sredoC dna dlroW olleH
// console.log(balikKata('John Doe')); // eoD nhoJ
// console.log(balikKata('I am a bookworm')); // mrowkoob a ma I
// console.log(balikKata('Coding is my hobby')); // ybboh ym si gnidoC
// console.log(balikKata('Super')); // repuS*.

function isPrime (num){ 
  if (num===2){
      return true
  }
  if (num==3){
      return true
  }
  for (let i=2;i<=num;i++){
      if (num%i==0){
          return false
      } else {
          return true
      }
}

}
console.log(isPrime(2))  // true

console.log(isPrime(7))  // true

console.log(isPrime(4))  // false

console.log(isPrime(11))  // false

function balikKata(kata) {
    // you can only write your code here!
      let str=""
    
    for (let i=0;i<kata.length;i++){
     if (isPrime(i)===true){
         str +=kata[i]
     }     
  
  
    }
  return str
}
  console.log(balikKata('0123456789'))