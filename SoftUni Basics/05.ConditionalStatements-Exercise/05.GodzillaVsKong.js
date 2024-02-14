function godzillaVsKong(input) {
    let movieBudget = Number(input[0]);
    let extras = Number(input[1]);
    let dressCost = Number(input[2]);

    let decorCost = movieBudget * 0.1;
    let extrasCost = extras * dressCost;

    if (extras > 150) {
        extrasCost *= 0.9;
    }
    let movieCost = decorCost + extrasCost;

    if (movieCost > movieBudget) {
        console.log("Not enough money!");
        console.log(`Wingard needs ${(movieCost - movieBudget).toFixed(2)} leva more.`);
    } else {
        console.log("Action!");
        console.log(`Wingard starts filming with ${(movieBudget - movieCost).toFixed(2)} leva left.`);
    }
}
godzillaVsKong(["20000", "120", "55.5"]);
godzillaVsKong(["15437.62", "186", "57.99"]);
godzillaVsKong(["9587.88", "222", "55.68"]);