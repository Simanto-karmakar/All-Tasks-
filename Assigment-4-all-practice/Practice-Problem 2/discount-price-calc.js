function discountPriceCalc(totalPrice) {
    if (totalPrice > 5000) {
        const discountPrice = totalPrice * (20 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log("you will get 20% discount, now you will pay: ", netPrice);
    }
    else if (totalPrice >= 3000) {
        const discountPrice = totalPrice * (15 / 100);
        const netprice = totalPrice - discountPrice;
        console.log("you will get 15% discount, now you will pay: ", netprice);
    }
    else if (totalPrice >= 1000) {
        const discountPrice = totalPrice * (10 / 100);
        const netPrice = totalPrice - discountPrice;
        console.log("you will get 10% discount, now you will pay: ", netPrice);
    }
    else {
        console.log("you will not have any discount, if you get discount then buy upto 1000tk. Thank You sir")
    }
}

discountPriceCalc(200);