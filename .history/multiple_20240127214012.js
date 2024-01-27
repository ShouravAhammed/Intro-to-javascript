const price = 80000;

if (price >= 50000){
    const discountPrice = price * 10 / 100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}