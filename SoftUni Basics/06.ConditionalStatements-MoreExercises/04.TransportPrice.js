function transportPrice(input) {
    let distance = Number(input[0]);
    let timeOfDay = input[1];

    let money = 0;

    if (timeOfDay === "day" && distance < 20) {
        money = 0.7 + distance * 0.79;
    } else if (timeOfDay === "night" && distance < 20) {
        money = 0.7 + distance * 0.9;
    } else if (distance >= 20 && distance < 100) {
        money = distance * 0.09;
    } else if (distance >= 100) {
        money = distance * 0.06;
    }
    console.log(money.toFixed(2));
}
// transportPrice(["5", "day"]);
// transportPrice(["7", "night"]);
// transportPrice(["25", "day"]);
transportPrice(["180", "night"]);