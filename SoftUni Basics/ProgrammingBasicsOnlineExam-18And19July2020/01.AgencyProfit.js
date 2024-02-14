function agencyProfit(input) {
    let company = input[0];
    let adultTickets = Number(input[1]);
    let childrenTickets = Number(input[2]);
    let adultTicketsPrice = Number(input[3]);
    let taxCost = Number(input[4]);

    let childrenTicketsPrice = adultTicketsPrice * 0.3;
    let agencyTax = (adultTickets * adultTicketsPrice + childrenTickets * childrenTicketsPrice) + (taxCost * (adultTickets + childrenTickets));
    let agencyProfit =agencyTax * 0.2;

    console.log(`The profit of your agency from ${company} tickets is ${agencyProfit.toFixed(2)} lv.`);
}
agencyProfit(["WizzAir", "15", "5", "120", "40"]);
agencyProfit(["Ryanair", "60", "23", "158.96", "39.12"]);