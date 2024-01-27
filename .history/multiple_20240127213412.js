const price = 10000;

if (price >= 11000){
    const discountPrice = price * 10 / 100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}