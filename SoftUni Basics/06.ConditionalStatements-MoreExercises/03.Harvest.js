function harvest(input) {
    let land = Number(input[0]);
    let grapeForMetre = Number(input[1]);
    let wineNeeded = Number(input[2]);
    let workers = Number(input[3]);

    let grapes = land * grapeForMetre * 0.4;
    let wine = grapes / 2.5;

    if (wine < wineNeeded) {
        console.log(`It will be a tough winter! More ${Math.floor(wineNeeded - wine)} liters wine needed.`);
    } else {
        console.log(`Good harvest this year! Total wine: ${Math.floor(wine)} liters.`);
        console.log(`${Math.ceil(wine - wineNeeded)} liters left -> ${Math.ceil((wine - wineNeeded) / workers)} liters per person.`);
    }
}
harvest(["650", "2", "175", "3"]);
harvest(["1020", "1.5", "425", "4"]);