function pets(input) {
    let days = Number(input[0]);
    let foodKg = Number(input[1]);
    let dogFoodKg = Number(input[2]);
    let catFoodKg = Number(input[3]);
    let turtleFoodG = Number(input[4]);

    let food = (dogFoodKg + catFoodKg + turtleFoodG / 1000) * days;

    if (foodKg >= food) {
        console.log(`${Math.floor(foodKg - food)} kilos of food left.`);
    } else {
        console.log(`${Math.ceil(food - foodKg)} more kilos of food are needed.`);
    }

}
pets(["2", "10", "1", "1", "1200"]);
pets(["5", "10", "2.1", "0.8", "321"]);