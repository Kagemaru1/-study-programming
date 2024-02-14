function oscarsCeremony(input) {
    let hallTax = Number(input[0]);

    let statuePrice = hallTax * 0.7;
    let cateringPrice = statuePrice * 0.85;
    let soundingPrice = cateringPrice / 2;

    let ceremonyCost = hallTax + statuePrice + cateringPrice + soundingPrice;

    console.log(ceremonyCost.toFixed(2));
}
oscarsCeremony(["3500"]);
oscarsCeremony(["5555"]);