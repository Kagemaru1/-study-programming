function toyShop(input) {
    let vacationCost = Number(input[0]);
    let puzzleCount = Number(input[1]);
    let dollsCount = Number(input[2]);
    let teddyBearsCount = Number(input[3]);
    let minionsCount = Number(input[4]);
    let trucksCount = Number(input[5]);

    let money = puzzleCount * 2.6 + dollsCount * 3 + teddyBearsCount * 4.1 + minionsCount * 8.2 + trucksCount * 2;
    let sumToys = puzzleCount + dollsCount + teddyBearsCount + minionsCount + trucksCount;

    if (sumToys >= 50) {
        money *= 0.75;
    }
    money *= 0.9;

    if (money >= vacationCost) {
        console.log(`Yes! ${(money - vacationCost).toFixed(2)} lv left.`);
    } else {
        console.log(`Not enough money! ${(vacationCost - money).toFixed(2)} lv needed.`);
    }
}
toyShop(["40.8", "20", "25", "30", "50", "10"]);
toyShop(["320", "8", "2", "5", "5", "1"]);