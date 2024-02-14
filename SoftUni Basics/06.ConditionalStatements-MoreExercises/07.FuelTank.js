function fuelTank(input) {
    let fuel = input[0];
    let litre = Number(input[1]);

    if (fuel === "Diesel") {
        if (litre >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }
    } else if (fuel === "Gasoline") {
        if (litre >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }
    } else if (fuel === "Gas") {
        if (litre >= 25) {
            console.log(`You have enough ${fuel.toLowerCase()}.`);
        } else {
            console.log(`Fill your tank with ${fuel.toLowerCase()}!`);
        }
    } else {
        console.log("Invalid fuel!");
    }
}
fuelTank(["Diesel", "10"]);
fuelTank(["Gasoline", "40"]);
fuelTank(["Gas", "25"]);
fuelTank(["Kerosene", "200"]);