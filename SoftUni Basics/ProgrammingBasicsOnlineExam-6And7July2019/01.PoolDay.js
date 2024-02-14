function poolDay(input) {
    let people = Number(input[0]);
    let entranceTax = Number(input[1]);
    let shezlngPrice = Number(input[2]);
    let umbrellaPrice = Number(input[3]);

    let umbrellas = Math.ceil(people / 2);
    let shezlongs = Math.ceil(people * 0.75);

    let finaleCost = people * entranceTax + shezlngPrice * shezlongs + umbrellaPrice * umbrellas;
    console.log(`${finaleCost.toFixed(2)} lv.`);
}
poolDay(["21", "5.50", "4.40", "6.20"]);
poolDay(["50", "6", "8", "4"]);