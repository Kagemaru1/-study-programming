function addBags(input) {
    let luggagePriceOver20kg = Number(input[0]);
    let luggageKg = Number(input[1]);
    let daysToTrip = Number(input[2]);
    let luggageCount = Number(input[3]);

    let luggagePrice = 0;

    if (luggageKg < 10) {
        luggagePrice = luggageCount * luggagePriceOver20kg * 0.2;
    } else if (luggageKg >= 10 && luggageKg <= 20) {
        luggagePrice = luggageCount * luggagePriceOver20kg * 0.5;
    } else {
        luggagePrice = luggageCount * luggagePriceOver20kg;
    }

    if (daysToTrip > 30) {
        luggagePrice *= 1.1;
    } else if (daysToTrip >= 7 && daysToTrip <= 30) {
        luggagePrice *= 1.15;
    } else {
        luggagePrice *= 1.4;
    }
    console.log(`The total price of bags is: ${luggagePrice.toFixed(2)} lv.`);
}
addBags(["30", "18", "15", "2"]);
addBags(["25.50", "5", "36", "6"]);
addBags(["63.80", "23", "3", "1"]);