function flowerShop(input) {
    let magnoliaCount = Number(input[0]);
    let hyacinthCount = Number(input[1]);
    let rosesCount = Number(input[2]);
    let cactusCount = Number(input[3]);
    let giftPrice = Number(input[4]);

    let money = magnoliaCount * 3.25 + hyacinthCount * 4 + rosesCount * 3.5 + cactusCount * 8;
    money *= 0.95;

    if (giftPrice <= money) {
        console.log(`She is left with ${Math.floor(money - giftPrice)} leva.`);
    } else {
        console.log(`She will have to borrow ${Math.ceil(giftPrice - money)} leva.`);
    }
}
flowerShop(["2", "3", "5", "1", "50"]);
flowerShop(["15", "7", "5", "10", "100"]);