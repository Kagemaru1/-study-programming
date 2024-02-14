function shopping(input) {
    let budget = Number(input[0]);
    let videoCards = Number(input[1]);
    let processor = Number(input[2]);
    let ram = Number(input[3]);

    let videoCardsCost = videoCards * 250;
    let processorCost = videoCardsCost * 0.35;
    let ramCost = videoCardsCost * 0.1;

    let sumCost = videoCardsCost + processorCost * processor + ramCost * ram;

    if (videoCards > processor) {
        sumCost *= 0.85;
    }
    if (budget >= sumCost) {
        console.log(`You have ${(budget - sumCost).toFixed(2)} leva left!`);
    } else {
        console.log(`Not enough money! You need ${(sumCost - budget).toFixed(2)} leva more!`);
    }
}
shopping(["900", "2", "1", "3"]);
shopping(["920.45", "3", "1", "1"]);