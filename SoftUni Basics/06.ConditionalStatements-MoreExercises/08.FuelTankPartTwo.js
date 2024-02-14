function fuelTankPartTwo(input) {
    let fuel = input[0];
    let litre = Number(input[1]);
    let card = input[2];

    let fuelPrice = 0;

    if (fuel === "Gasoline") {
        if (card === "Yes") {
            fuelPrice = litre * 2.04;
        } else {
            fuelPrice = litre * 2.22;
        }
    } else if (fuel === "Diesel") {
        if (card === "Yes") {
            fuelPrice = litre * 2.21;
        } else {
            fuelPrice = litre * 2.33;
        }
    } else {
        if (card === "Yes") {
            fuelPrice = litre * 0.85;
        } else {
            fuelPrice = litre * 0.93;
        }
    }

    if (litre >= 20 && litre <= 25) {
        fuelPrice *= 0.92;
    } else if (litre > 25) {
        fuelPrice *= 0.9;
    }
    console.log(`${fuelPrice.toFixed(2)} lv.`);
}
fuelTankPartTwo(["Gas", "30", "Yes"]);
fuelTankPartTwo(["Gasoline", "25", "No"]);
fuelTankPartTwo(["Diesel", "19", "No"]);