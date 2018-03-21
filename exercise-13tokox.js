function countProfit(shoppers) {
    let listBarang = [ ['Sepatu Stacattu', 1500000, 10],
                     ['Baju Zoro', 500000, 2],
                     ['Sweater Uniklooh', 175000, 1]
                   ];
    var arr = [];

    if(shoppers.length === 0) {
        return [];
    }
    for (var i=0; i < listBarang.length; i++) {
        var product = {};
        product.product = listBarang[i][0];
        product.shoppers = [];
        product.leftOver = listBarang[i][2];
        product.totalProfit = 0;
        for (j=0; j < shoppers.length; j++) {
            for (var key in shoppers[j]) {
                if(shoppers[j][key] === product.product) {
                    if(shoppers[j].amount > listBarang[i][2]) { //stock barang kurang dari yg mo di beli
                        product.leftOver = listBarang[i][2]; //leftOver adalah listBarang di minus amount yg di beli shoppers
                    } else {
                        product.leftOver = listBarang[i][2] = listBarang[i][2] - shoppers[j].amount;
                        product.shoppers.push(shoppers[j].name); //nama shoppers ada di obj yg di dalam array
                        product.totalProfit = product.totalProfit + (listBarang[i][1] * shoppers[j].amount); //profit is the price stated multiplied by the amount bought by shoppers
                    }
                }
            } 
        }
        arr.push(product); //push the object into the array
    }
    return arr;
}

console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 2},
{name: 'Vanessa', product: 'Sepatu Stacattu', amount: 3},
{name: 'Rani', product: 'Sweater Uniklooh', amount: 2}]));
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
//   totalProfit: 0 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Stacattu', amount: 8}, {name: 'Vanessa', product: 'Sepatu Stacattu', amount: 10}, {name: 'Rani', product: 'Sweater Uniklooh', amount: 1}, {name: 'Devi', product: 'Baju Zoro', amount: 1}, {name: 'Lisa', product: 'Baju Zoro', amount: 1}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [ 'Windi' ],
//     leftOver: 2,
//     totalProfit: 12000000 },
//   { product: 'Baju Zoro',
//     shoppers: [ 'Devi', 'Lisa' ],
//     leftOver: 0,
//     totalProfit: 1000000 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [ 'Rani' ],
//     leftOver: 0,
//     totalProfit: 175000 } ]
console.log(countProfit([{name: 'Windi', product: 'Sepatu Naiki', amount: 5}]));
// [ { product: 'Sepatu Stacattu',
//     shoppers: [],
//     leftOver: 10,
//     totalProfit: 0 },
//   { product: 'Baju Zoro',
//     shoppers: [],
//     leftOver: 2,
//     totalProfit: 0 },
//   { product: 'Sweater Uniklooh',
//     shoppers: [],
//     leftOver: 1,
//     totalProfit: 0 } ]

console.log(countProfit([])); //[]