function checkAB(num) {
  // you can only write your code here!
  var tampung=num.split('')
  let a = true
  for (let i = 0; i<tampung.length;i++){
      if (tampung[i]=='a'&& tampung[i+4]!=='b'){
          a= false
      }else if (tampung[i]=='a'&&tampung[i-4]!=='b'){
        a= false
    }

      if (tampung[i]=='a'&& tampung[i+4]=='b'){
          a= true
      }
      else if (tampung[i]=='a'&&tampung[i-4]=='b'){
          a= true
      }
      
      
  }
  return a
 
}

// TEST CASES        012345
console.log(checkAB('lane borrowed')); // true
console.log(checkAB('i am sick')); // false
console.log(checkAB('you are boring')); // true
console.log(checkAB('barbarian')); // true
console.log(checkAB('bacon and meat')); // false