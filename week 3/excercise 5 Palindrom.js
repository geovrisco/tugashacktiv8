function palindrome(kata) {
    // you can only write your code here!
    function balikKata(teks) {
        var pembalik = ""
        for (let i = teks.length-1; i > -1; i--) {
            pembalik += teks[i]
        }
        return pembalik
    }
if (kata===balikKata(kata)){
    return true
}
else {
    return false
}

}

// TEST CASES
console.log(palindrome('katak')); // true
console.log(palindrome('blanket')); // false
console.log(palindrome('civic')); // true
console.log(palindrome('kasur rusak')); // true
console.log(palindrome('mister')); // false