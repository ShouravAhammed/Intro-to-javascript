const price = 30000;

if (price >= 50000){
    const discountPrice = price * 10 / 100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}