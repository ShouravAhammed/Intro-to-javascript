const price = 4000;

if (price >= 3000){
    const discountPrice = price * 10 / 100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}