function birthDayParty(hallPrice) {
    // let hallPrice = Number(input[0]);

    let cakePrice = hallPrice * 0.2;
    let drinksPrice = cakePrice * 0.55;
    let animatorPrice = hallPrice / 3;

    let partyCost = Number(hallPrice) + cakePrice + drinksPrice + animatorPrice;
    console.log(partyCost);
}
birthDayParty(["2250"]);
birthDayParty(["3720"]);