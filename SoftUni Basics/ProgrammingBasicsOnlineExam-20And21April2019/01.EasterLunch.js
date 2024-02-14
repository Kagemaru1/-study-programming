function easterLunch(input) {
    let cakes = Number(input[0]);
    let egsBoxes = Number(input[1]);
    let cookiesKg = Number(input[2]);

    let lunchCost = cakes * 3.2 + egsBoxes * 4.35 + cookiesKg * 5.4 + egsBoxes * 12 * 0.15;
    console.log(lunchCost.toFixed(2));
}
easterLunch(["3", "2", "3"]);
easterLunch(["4", "4", "3"]);