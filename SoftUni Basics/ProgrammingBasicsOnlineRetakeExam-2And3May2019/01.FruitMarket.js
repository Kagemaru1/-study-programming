function fruitMarket(strawberryPrice, bananasKg, orangesKg, redRaspberryKg, strawberryKg) {
    // let strawberryPrice = Number(input[0]);
    // let bananasKg = Number(input[1]);
    // let orangesKg = Number(input[2]);
    // let redRaspberryKg = Number(input[3]);
    // let strawberryKg = Number(input[4]);

    let redRaspberryPrice = strawberryPrice / 2;
    let orangesPrice = redRaspberryPrice * 0.6;
    let bananasPrice = redRaspberryPrice * 0.2;

    let finaleCost = strawberryKg * strawberryPrice + bananasKg * bananasPrice + orangesKg * orangesPrice + redRaspberryKg * redRaspberryPrice;

    console.log(finaleCost);
}
fruitMarket(["48", "10", "3.3", "6.5", "1.7"]);
fruitMarket(["63.5", "3.57", "6.35", "8.15", "2.5"]);