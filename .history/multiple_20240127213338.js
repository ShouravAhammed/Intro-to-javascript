const price = 10000;

if (price >= 10000){
    const discountPrice = price * 10 / 100;
    const payAmount = price - discountPrice;
    console.log(payAmount);
}