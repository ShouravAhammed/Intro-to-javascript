const price = 1500;
const price2 = 500;
if (price >= 3000){
    const discountPrice = price * 10 / 100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
if(price >= 2000){
    const discountPrice2 = price2 * 5 /100;
    console.log(discountPrice2);
    const payAmount2 = price2 - discountPrice2;
    console.log(payAmount2);
}
else{
    console.log();
}
