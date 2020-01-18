function countProfit(shoppers) {
    let listBarang = [
        ['Sepatu Stacattu', 1500000, 10],
        ['Baju Zoro', 500000, 2],
        ['Sweater Uniklooh', 175000, 1]
    ];

    // you can only write your code here!
    let res = []
    for (let i = 0; i < listBarang.length; i++) {
        let namaBarang = listBarang[i][0]
        let leftOver = listBarang[i][2]

        res.push({
            product: namaBarang,
            'shoppers': [],
            'leftOver': leftOver,
            totalProfit: listBarang[i][1],
        })
    }
    let totalAmt = 0

    // for (let j = 0; j < shoppers.length; j++) {
    //     for (let k = 0; k < res.length; k++) {
    //         if (shoppers[j].product === res[k].product) {
    //             if (res[k].leftOver - shoppers[j].amount > 0) {
    //                 res[k].leftOver = res[k].leftOver - shoppers[j].amount
    //                 res[k].shoppers.push(shoppers[j].name)
    //             }
    //             totalAmt += shoppers[j].amount
    //         }
    //         if (res[k].shoppers.length < 0) {
    //             res[k].totalProfit = 0
    //         }
    //         res[k].totalProfit = res[k].totalProfit * totalAmt
    //     }
    // }
    //  
for ( let j = 0; j < res.length ; j++){
    for ( let k = 0; k < shoppers.length;k++){
        if (shoppers[k].product===res[j].product && res[j].leftOver - shoppers[k].amount >=0){
            res[j].shoppers.push(shoppers[k].name)
            res[j].leftOver -=shoppers[k].amount
            totalAmt+=shoppers[k].amount
        }
    }
    res[j].totalProfit = res[j].totalProfit*totalAmt
    totalAmt = 0
}


    return res

}

// TEST CASES
console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 2
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 3
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 2
}]));
//[ { product: 'Sepatu Stacattu',
//   shoppers: [ 'Windi', 'Vanessa' ],
//   leftOver: 5,
//   totalProfit: 7500000 },
// { product: 'Baju Zoro',
//   shoppers: [],
//   leftOver: 2,
//   totalProfit: 0 },
// { product: 'Sweater Uniklooh',
//   shoppers: [],
//   leftOver: 1,
// //   totalProfit: 0 } ]

console.log(countProfit([{
    name: 'Windi',
    product: 'Sepatu Stacattu',
    amount: 8
}, {
    name: 'Vanessa',
    product: 'Sepatu Stacattu',
    amount: 10
}, {
    name: 'Rani',
    product: 'Sweater Uniklooh',
    amount: 1
}, {
    name: 'Devi',
    product: 'Baju Zoro',
    amount: 1
}, {
    name: 'Lisa',
    product: 'Baju Zoro',
    amount: 1
}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [ 'Windi' ],
// //     leftOver: 2,
// //     totalProfit: 12000000 },
// //   { product: 'Baju Zoro',
// //     shoppers: [ 'Devi', 'Lisa' ],
// //     leftOver: 0,
// //     totalProfit: 1000000 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [ 'Rani' ],
// //     leftOver: 0,
// //     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// // [ { product: 'Sepatu Stacattu',
// //     shoppers: [],
// //     leftOver: 10,
// //     totalProfit: 0 },
// //   { product: 'Baju Zoro',
// //     shoppers: [],
// //     leftOver: 2,
// //     totalProfit: 0 },
// //   { product: 'Sweater Uniklooh',
// //     shoppers: [],
// //     leftOver: 1,
// //     totalProfit: 0 } ]
// console.log(countProfit([])); //[]