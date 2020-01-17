let countTax = 20000000
input = countTax.toString()

function toRupiah (input){
  var nominal=input.toString()
  var temptax = ''
  let temp3digit = ''
  
  for (let i = nominal.length - 1; i >= 0; i--) {
    temp3digit += nominal[i]
    if (temp3digit.length == 3) {
      temptax += `.${temp3digit}`
      temp3digit = ""
    }
  }
  
  let tax = ''
  for (let j = temptax.length - 1; j >= 0; j--) {
    tax += temptax[j]
    if (temp3digit.length == 3) {
      temptax += `.${temp3digit}`
      temp3digit = ""
    }
  }

return `Rp.${tax},00`
}


console.log(toRupiah(150000))
console.log(toRupiah(20000000))