const price = 1500;
const price2 = 500;
if (price >= 3000){
    const discountPrice = price * 10 / 100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if(price >= 2000){
    const discountPrice = price * 5 /100;
    console.log(discountPrice);
    const payAmount = price - discountPrice2;
    console.log(payAmount);
}
else{
    console.log(price);
}
