const price = 30000;

if (price >= 5000){
    const discountPrice = price * 10 / 100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else if(price >= 2000){
    const discountPrice = price * 5 /100;
    console.log(discountPrice);
    const payAmount = price - discountPrice;
    console.log(payAmount);
}
else{
    console.log(price);
}
