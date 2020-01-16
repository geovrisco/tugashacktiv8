function shoppingTime(memberId, money) {
  // you can only write your code here!
if(memberId==undefined && money==undefined){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
}
  if (memberId.length <1){
    return 'Mohon maaf, toko X hanya berlaku untuk member saja'
} if ( money < 50000){
      return 'Mohon maaf, uang tidak cukup'
  }
  var jualan = [['Sepatu Stacattu',1500000],['Baju Zoro',500000],['Baju H&N',250000],['Sweater Unikloh',175000],['Casing Handphone',50000]]
  var beli =[]
  var sisaUang=money

  for (let i =0; i<jualan.length;i++){
      
      if (sisaUang>=jualan[i][1]){
          sisaUang=sisaUang-jualan[i][1]
          beli.push(jualan[i][0])
      }  
  }

  let objName={
      'memberId':memberId,
      'money':money,
      'listPurchased:':beli,
      'changeMoney':sisaUang
  }

  return objName
}

// TEST CASES
console.log(shoppingTime('1820RzKrnWn08', 2475000));
  //{ memberId: '1820RzKrnWn08',
  // money: 2475000,
  // listPurchased:
  //  [ 'Sepatu Stacattu',
  //    'Baju Zoro',
  //    'Baju H&N',
  //    'Sweater Uniklooh',
  //    'Casing Handphone' ],
  // changeMoney: 0 }
console.log(shoppingTime('82Ku8Ma742', 170000));
// //{ memberId: '82Ku8Ma742',
// // money: 170000,
// // listPurchased:
// //  [ 'Casing Handphone' ],
// // changeMoney: 120000 }
console.log(shoppingTime('', 2475000)); //Mohon maaf, toko X hanya berlaku untuk member saja
console.log(shoppingTime('234JdhweRxa53', 15000)); //Mohon maaf, uang tidak cukup
console.log(shoppingTime()); ////Mohon maaf, toko X hanya berlaku untuk member saja



