const price = 4000;

if (price >= 3000){
    const discountPrice = price * 10 / 100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
if(price >= 2000){
    const discountPrice2 = price * 5 /100;
    console.log(discountPrice2);
}
else{
    console.log(price);
}