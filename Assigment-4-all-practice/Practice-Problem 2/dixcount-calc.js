function discountCalc(totalPrice) {
    if (totalPrice > 5000) {
        console.log('you will get 20% discount');
    }
    else if (totalPrice >= 3000) {
        console.log("you will get 15% discount");
    }
    else if (totalPrice >= 1000) {
        console.log("you will get 10% discount");
    }
    else {
        console.log("you will not get discount");
    }
}

discountCalc(5500);