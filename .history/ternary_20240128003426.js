
// normal if-else
// const age = 16;

// if (age >= 18){
//     console.log("You can vote")
// }
// else{
//     console.log("You can't vote")
// }
// simple ternary operator
// const age = 12;
// age >= 18 ? console.log("vote diyo") : console.log("vote dewar boyosh hoynai");

// let price = 600;
// let vat = 150;
// const regularCustomer = true;

// if (regularCustomer === true){
//     price = 0;

// }
// else{
//     price = price + vat;
//     console.log(priceVat);
// }
// console.log(price);

// price = regularCustomer = false ? 0 : price = price + vat; console.log(price) ;

let price = 1000;
const regularCustomer = true;

// if (regularCustomer === true) {
//     if (price > 1000) {
//         price = price / 2;
//     }
//     else {
//         price = 0
//     }
// }
// else {
//     price = price + 100;
// }


price = regularCustomer === true ? price > 1000 ? price /2 : 0 : price + 100; 