function petShop(input) {
    let dogFood = Number(input[0]);
    let catFood = Number(input[1]);
    let foodCost = dogFood * 2.5 + catFood * 4;

    console.log(`${foodCost} lv.`);
}
petShop(["5", "4"]);
petShop(["13", "9"]);