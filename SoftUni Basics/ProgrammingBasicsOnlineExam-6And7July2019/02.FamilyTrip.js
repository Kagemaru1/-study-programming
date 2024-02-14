function familyTrip(input) {
    let budget = Number(input[0]);
    let nights = Number(input[1]);
    let moneyPerNight = Number(input[2]);
    let additionalCostPercent = Number(input[3]);

    if (nights > 7) {
        moneyPerNight *= 0.95;
    }

    let cost = nights * moneyPerNight + (budget * (additionalCostPercent / 100));

    if (budget >= cost) {
        console.log(`Ivanovi will be left with ${(budget - cost).toFixed(2)} leva after vacation.`);
    } else {
        console.log(`${(cost - budget).toFixed(2)} leva needed.`);
    }
}
familyTrip(["800.50", "8", "100", "2"]);
familyTrip(["500", "7", "66", "15"]);