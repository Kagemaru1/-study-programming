function vegetableMarket(input) {
    let vegetablePrice = Number(input[0]);
    let fruitPrice = Number(input[1]);
    let vegetableKg = Number(input[2]);
    let fruitKg = Number(input[3]);
    
    let cost = vegetableKg * vegetablePrice + fruitKg * fruitPrice;
    let costInEuro = cost / 1.94;

    console.log(costInEuro.toFixed(2));
}
vegetableMarket(["0.194", "19.4", "10", "10"]);
vegetableMarket(["1.5" , "2.5", "10", "10"]);