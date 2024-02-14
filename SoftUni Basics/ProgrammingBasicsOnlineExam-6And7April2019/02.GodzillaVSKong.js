function godzillaVSKong(input) {
    let budget = Number(input[0]);
    let statists = Number(input[1]);
    let dressCost = Number(input[2]);

    let decorCost = budget / 10;

    if (statists > 150) {
        dressCost *= 0.9;
    }

    let finaleCost = statists * dressCost + decorCost;
    let difference = Math.abs(budget - finaleCost);

    if (budget < finaleCost) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${difference.toFixed(2)} leva more.`)
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${difference.toFixed(2)} leva left.`);
    }
}
godzillaVSKong(["20000", "120", "55.5"]);
godzillaVSKong(["15437.62", "186", "57.99"]);
godzillaVSKong(["9587.88", "222", "55.68"]);