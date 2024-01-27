// const price = 2500;

// if (price >= 5000){
//     const discountPrice = price * 10 / 100;
//     console.log(discountPrice);
//     const payAmount = price - discountPrice;
//     console.log(payAmount);
// }
// else if(price >= 2000){
//     const discountPrice = price * 5 /100;
//     console.log(discountPrice);
//     const payAmount = price - discountPrice;
//     console.log(payAmount);
// }
// else{
//     console.log(price);
// }

// const age = 17;
// const age2 = 40;
// const price = 500;
// const age3 = 56;


// if (age <= 17 && age2 >= 60) {
//     console.log("you can eat for free");
// }
// else if (age3 > 50) {
//     const discountPrice = price * 50 / 100;
//     const payAmount = price - discountPrice;
//     console.log(payAmount);
// }
// else {
//     console.log("please money price")
// }

const age = 41;
const price = 300;

if (age <= 14 || age >= 60){
    console.log("you can eat free food");
}
else if (age > 40){
    const discountPrice = price * 25 / 100;
    console.log(discountPrice)
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if (age > 50 ){
    const discountPrice2 = price * 50 / 100;
    const payAmount2 = price - discountPrice2;
    console.log(payAmount2);
}
else{
    console.log(price);
}

