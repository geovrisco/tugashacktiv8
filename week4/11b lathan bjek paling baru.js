/**
 * CALCULATE TAX
 *  
 * Buathlah sebuah function yang akan membagi mobil berdasarkan pajak, dan menghitung pajak,
 * mobil tersebut.
 * 
 * pajak di tentukan dari harga mobil tersebut , berikut listnya:
 *  1. dibawah 250 jt = 10%
 *  2. dibawah 400 jt = 20%
 *  3. 400 jt ke atas = 30 % 
 *  
 *  Contoh bisa liat di test case
 * 
 *  RULES: 
 *  - Dilarang menggunakan .reduce .filter .map .regex .split .set 
 * 
 * 
 */

function toRupiah(num){
    let numStr = num.toString()
    let counter = 0
    let reversd = ''
    for (let i = numStr.length-1; i>=0; i--) {
        reversd += numStr[i]
        counter++
        if (counter % 3 === 0){
            reversd += '.'
        }
    }
    let rupiah=''
    for (let j =reversd.length-1; j >=0; j--){
        rupiah+=reversd[j]
    }
    let result=''
    for (let k = 0; k < rupiah.length; k++){
        if (result[0]==='.'){
            result=''
        }
        result+=rupiah[k]
    }

    return result
}


function main (cars) {
  // your code here
  let res = {

  }

  for (let a = 0; a < cars.length; a++){
      if (cars[a].price>400000000){
          if (res['30%']===undefined){
              res['30%']=[]
          }
          let countTax = parseInt('30%')*cars[a].price /100
            cars[a].tax = toRupiah(countTax) 
          res['30%'].push(cars[a])
      }

      if (cars[a].price<=400000000){
          if (res['20%']===undefined){
              res['20%']=[]
          }
          let countTax = parseInt('20%')*cars[a].price /100
          cars[a].tax = toRupiah(countTax) 
          res['20%'].push(cars[a])
      }

      if (cars[a].price<=250000000){
        if (res['10%']===undefined){
            res['10%']=[]
        }
        let countTax = parseInt('10%')*cars[a].price /100
        cars[a].tax = toRupiah(countTax) 
        res['10%'].push(cars[a])
    }


  }

  for (var persenPajak in res){
      for (let i = 0 ; i < res[persenPajak].length; i++){
          delete res[persenPajak][i].price
      }
  }
  
  return res
}

console.log(main([
  { brand: "BMW", merk: "I8", type: "Coupe", price: 500000000 },
  { brand: "TOYOTA", merk: "Yaris", type: "Coupe", price: 250000000 },
  { brand: "HONDA", merk: "Civic", type: "Sedan", price: 220000000 },
  { brand: "HONDA", merk: "City", type: "Sedan", price: 300000000 },
  { brand: "MITSUBISHI", merk: "Pajero", type: "SUV", price: 600000000},
  { brand: "SUZUKI", merk: "Ertiga", type: "SUV", price: 180000000}
]))
// {
//   '30%': [
//     { brand: 'BMW', merk: 'I8', type: 'Coupe', tax: 'Rp. 150.000.000,00' },
//     { brand: 'MITSUBISHI', merk: 'Pajero', type: 'SUV', tax: 'Rp. 180.000.000,00' }
//   ],
//   '20%': [
//     { brand: 'TOYOTA', merk: 'Yaris', type: 'Coupe', tax: 'Rp. 50.000.000,00' },
//     { brand: 'HONDA', merk: 'City', type: 'Sedan', tax: 'Rp. 60.000.000,00' }
//   ],
//   '10%': [
//     { brand: 'HONDA', merk: 'Civic', type: 'Sedan', tax: 'Rp. 22.000.000,00' },
//     { brand: 'SUZUKI', merk: 'Ertiga', type: 'SUV', tax: 'Rp. 18.000.000,00' }
//   ],
// }

// console.log(main([
//   { brand: "DAIHATUS", merk: "AYLA", type: "Coupe", price: 130000000 },
//   { brand: "TOYOTA", merk: "AGYA", type: "Coupe", price: 150000000 },
//   { brand: "HONDA", merk: "JAZZ", type: "Coupe", price: 280000000 },
//   { brand: "TOYOTA", merk: "AVANZA", type: "SUV", price: 300000000 },
// ]))
// // {
//   '10%': [
//     { brand: 'DAIHATUS', merk: 'AYLA', type: 'Coupe', tax: 'Rp. 13.000.000,00' },
//     { brand: 'TOYOTA', merk: 'AGYA', type: 'Coupe', tax: 'Rp. 15.000.000,00' }
//   ],
//   '20%': [
//     { brand: 'HONDA', merk: 'JAZZ', type: 'Coupe', tax: 'Rp. 56.000.000,00' },
//     { brand: 'TOYOTA', merk: 'AVANZA', type: 'SUV', tax: 'Rp. 60.000.000,00' }
//   ]
// }