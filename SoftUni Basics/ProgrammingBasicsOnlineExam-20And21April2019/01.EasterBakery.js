function easterBakery(input) {
    let flowerPrice = Number(input[0]);
    let flowerKg = Number(input[1]);
    let sugarKg = Number(input[2]);
    let egsBoxes = Number(input[3]);
    let yest = Number(input[4]);

    let sugarPrice = flowerPrice * 0.75;
    let egsBoxesPrice = flowerPrice * 1.1;
    let yestPrice = sugarPrice * 0.2;

    let finaleCost = flowerKg * flowerPrice + sugarKg * sugarPrice + egsBoxes * egsBoxesPrice + yest * yestPrice;

    console.log(finaleCost.toFixed(2));
}
easterBakery(["50", "10", "3.5", "6", "1"]);
easterBakery(["63.44", "3.57", "6.35", "8", "2"]);