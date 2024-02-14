function tennisEquipment(input) {
    let rocketPrice = Number(input[0]);
    let rocketQuantity = Number(input[1]);
    let sneakersPears = Number(input[2]);

    let sneakersPrice = rocketPrice / 6;
    let otherEquipment = (sneakersPrice * sneakersPears + rocketPrice * rocketQuantity) * 0.2;
    let finaleCost = sneakersPrice * sneakersPears + rocketPrice * rocketQuantity + otherEquipment;

    console.log(`Price to be paid by Djokovic ${Math.floor(finaleCost * 1 / 8)}`);
    console.log(`Price to be paid by sponsors ${Math.ceil(finaleCost * 7 / 8)}`);
}
tennisEquipment(["850", "4", "2"]);
tennisEquipment(["386", "7", "4"]);