// 1. if ticket number is less then 100, per ticket price : 100.
// 2. if ticket number is more then 100, but less then 200. First 100 ticket will be 100/ticket. Rest ticket will be 90 taka per piece.
// 3. If you purchase more then 200 ticket
// first 100 ticket ----------> 100tk;
// 101-200 ---------> 90tk;
// 200+ -------> 70tk 


function ticketPrice(ticketQuantity) {
    const first100Rate = 100;
    const second100Rate = 90;
    const restTicketRate = 70;

    if (ticketQuantity <= 100) {
        const price = ticketQuantity * first100Rate;
        return price;
    }
    else if (ticketQuantity <= 200) {
        const first100price = 100 * first100Rate;
        const restTTicketQuantity = ticketQuantity - 100;
        const restTicketPrice = restTTicketQuantity * second100Rate;
        const totalPrice = first100price + restTicketPrice;
        return totalPrice;
    }
    else {
        const first100price = 100 * first100Rate;
        const second100price = 100 * second100Rate;
        const restTicketQuantity = ticketQuantity - 200;
        const restTicketPrice = restTicketQuantity * restTicketRate;
        const totalCost = first100price + second100price + restTicketPrice;
        return totalCost;
    }
}


const price = ticketPrice(250);
console.log('price ', price);